import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message
      const contactMessage = await storage.createContactMessage(validatedData);
      
      // Send email notification
      try {
        await sendContactEmail(validatedData);
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Continue with success response even if email fails
      }
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you within 24 hours.",
        id: contactMessage.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your message" 
        });
      }
    }
  });

  // Get all contact messages (for admin use)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Get messages error:", error);
      res.status(500).json({ message: "Failed to retrieve messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

async function sendContactEmail(data: any) {
  // Configure email transporter
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'codemuse@gmail.com',
      pass: process.env.EMAIL_PASSWORD || process.env.GMAIL_APP_PASSWORD || 'default_password'
    }
  });

  const emailContent = `
    New Contact Form Submission from Code Muse Portfolio
    
    Name: ${data.name}
    Email: ${data.email}
    Project Type: ${data.project || 'Not specified'}
    Budget Range: ${data.budget || 'Not specified'}
    
    Message:
    ${data.message}
    
    ---
    Submitted at: ${new Date().toLocaleString()}
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER || 'codemuse@gmail.com',
    to: 'codemuse@gmail.com',
    subject: `New Contact Form Submission - ${data.name}`,
    text: emailContent,
    replyTo: data.email
  };

  await transporter.sendMail(mailOptions);
}
