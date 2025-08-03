# Code Muse - Full Stack Development Portfolio

A modern, animated portfolio website for Code Muse, showcasing full-stack development expertise with a dark theme and interactive elements.

## 🚀 Features

- **Dark-themed Design**: Professional dark mode with purple/pink gradient accents
- **Animated Interface**: Smooth animations using CSS keyframes and transitions
- **Interactive Navigation**: Fixed header with smooth scrolling to sections
- **Working Contact Form**: Functional contact form with email integration
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Tech Stack**: Built with React, TypeScript, and Express.js

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling with custom dark theme
- **Shadcn/ui** components for consistent UI
- **React Query** for server state management
- **Wouter** for lightweight routing
- **React Hook Form** with Zod validation

### Backend
- **Node.js** with Express.js
- **TypeScript** with ES modules
- **Nodemailer** for email functionality
- **Drizzle ORM** for database operations
- **PostgreSQL** database support
- **Session management** with express-session

## 📋 Project Types We Handle

- **E-commerce Sites**: Full-featured online stores with Stripe payment integration
- **Data Scraping Solutions**: Automated data collection and visualization
- **Custom Websites**: Bespoke web solutions with CMS integration
- **Landing Pages**: High-converting pages with contact form integration

## 🔧 Setup Instructions

### Prerequisites
- Node.js 20 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd code-muse-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   # Email Configuration
   EMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   
   # Database (if using PostgreSQL)
   DATABASE_URL=your-database-url
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 📧 Email Setup

The contact form integrates with Gmail using Nodemailer. To set up email functionality:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password for your Gmail account
3. Add your email credentials to the `.env` file
4. The form will send emails to `codemuse@gmail.com`

## 🎨 Design Features

- **Company Logo**: Integrated Code Muse branding with animated elements
- **Color Scheme**: Dark background (#1a1332) with purple (#8B5CF6) and pink (#EC4899) accents
- **Animations**: 
  - Fade-in animations for sections
  - Hover effects on cards and buttons
  - Floating animation for the logo
  - Pulse glow effects on key elements

## 📱 Responsive Sections

1. **Hero Section**: Company introduction with animated logo
2. **Services**: Full-stack development offerings
3. **Technology Stack**: Visual showcase of frameworks and languages
4. **Project Types**: Gallery of project categories
5. **Contact Form**: Working contact form with validation

## 🔗 Integrations

- **Stripe Payment Processing**: For e-commerce projects
- **Google Account Login**: OAuth integration capability
- **Contact Forms**: Functional email integration
- **Inventory Management**: For e-commerce solutions

## 🚀 Deployment

The application is configured for deployment on Replit or similar platforms:

- Vite handles frontend building and serving
- Express.js serves the API and static files
- Environment variables for production configuration
- PostgreSQL database support

## 📦 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage interface
├── shared/                 # Shared types and schemas
└── attached_assets/        # Static assets (logo, images)
```

## 🌟 Key Features Implementation

- **Dark Mode**: Default dark theme with CSS variables
- **Animations**: Custom CSS animations for smooth user experience
- **Contact Form**: Validates input and sends emails via Nodemailer
- **Logo Integration**: Custom Code Muse logo with proper branding
- **Mobile Responsive**: Works seamlessly across all device sizes

## 🤝 Contributing

This is a portfolio project for Code Muse. For project inquiries or collaboration, please use the contact form on the website.

## 📄 License

MIT License - see LICENSE file for details.

---

**Code Muse** - Transforming ideas into powerful digital solutions with cutting-edge technology.