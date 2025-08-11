import { useState, useEffect } from "react";
import { CodeMuseLogo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Moon, Menu, X, Mail, Clock, Rocket, Check, Code, ShoppingCart, Database, Palette, Shield } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: ""
  });
  const { toast } = useToast();

  // Set dark mode class on document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return await response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
      setFormData({
        name: "",
        email: "",
        project: "",
        budget: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "MUI", icon: "📦" },
    { name: "Python", icon: "🐍" },
    { name: "Node.js", icon: "🟢" },
    { name: "Django", icon: "🎯" },
    { name: "Flask", icon: "🌶️" },
    { name: "Express", icon: "🚀" },
    { name: "Fastify", icon: "⚡" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MySQL", icon: "🗄️" },
    { name: "SQLite", icon: "📋" }
  ];

  return (
    <div className="min-h-screen bg-[hsl(240,31%,9%)] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(240,31%,9%)]/80 backdrop-blur-md border-b border-[hsl(267,84%,67%)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <CodeMuseLogo className="w-10 h-10" />
              <span className="text-xl font-bold gradient-text">CODE MUSE</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => smoothScrollTo('home')} 
                className="hover:text-[hsl(267,84%,67%)] transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => smoothScrollTo('services')} 
                className="hover:text-[hsl(267,84%,67%)] transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => smoothScrollTo('tech')} 
                className="hover:text-[hsl(267,84%,67%)] transition-colors"
              >
                Technology
              </button>
              <button 
                onClick={() => smoothScrollTo('projects')} 
                className="hover:text-[hsl(267,84%,67%)] transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => smoothScrollTo('contact')} 
                className="hover:text-[hsl(267,84%,67%)] transition-colors"
              >
                Contact
              </button>
              
              {/* Dark Mode Toggle */}
              {/* <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="bg-[hsl(240,19%,16%)] hover:bg-[hsl(267,84%,67%)]/20"
              >
                <Moon className="h-5 w-5 text-[hsl(267,84%,67%)]" />
              </Button> */}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="bg-[hsl(240,19%,16%)]"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-[hsl(267,84%,67%)]" />
                ) : (
                  <Menu className="h-5 w-5 text-[hsl(267,84%,67%)]" />
                )}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[hsl(240,19%,16%)] border-t border-[hsl(267,84%,67%)]/20">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => smoothScrollTo('home')}
                className="block hover:text-[hsl(267,84%,67%)] transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => smoothScrollTo('services')}
                className="block hover:text-[hsl(267,84%,67%)] transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => smoothScrollTo('tech')}
                className="block hover:text-[hsl(267,84%,67%)] transition-colors"
              >
                Technology
              </button>
              <button 
                onClick={() => smoothScrollTo('projects')}
                className="block hover:text-[hsl(267,84%,67%)] transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => smoothScrollTo('contact')}
                className="block hover:text-[hsl(267,84%,67%)] transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(240,31%,9%)] via-[hsl(240,19%,16%)] to-[hsl(267,84%,67%)]/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[hsl(267,84%,67%)]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[hsl(328,85%,70%)]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Logo Integration */}
          <div className="mb-8 animate-fade-in-up">
            <CodeMuseLogo className="w-32 h-32 mx-auto mb-6 animate-float" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span className="gradient-text">CODE MUSE</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-light mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Full Stack Development Excellence
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            We craft exceptional digital experiences using React, TypeScript, Next.js, Python, Django, Flask, Node.js, and cutting-edge technologies. From e-commerce platforms to data scraping solutions, we bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <Button 
              onClick={() => smoothScrollTo('contact')}
              className="px-8 py-4 bg-gradient-to-r from-[hsl(267,84%,67%)] to-[hsl(328,85%,70%)] rounded-full font-semibold hover:shadow-lg hover:shadow-[hsl(267,84%,67%)]/50 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Button>
            <Button 
              onClick={() => smoothScrollTo('projects')}
              variant="outline" 
              className="px-8 py-4 border-[hsl(267,84%,67%)] rounded-full font-semibold hover:bg-[hsl(267,84%,67%)]/20 transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver comprehensive development solutions that bring your vision to life with precision and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Full Stack Development */}
            <Card className="tech-card bg-[hsl(240,19%,16%)] p-8 rounded-2xl cyber-glow border-[hsl(267,84%,67%)]/20">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-[hsl(267,84%,67%)] to-[hsl(328,85%,70%)] rounded-xl flex items-center justify-center mb-6">
                  <Code className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Full Stack Development</h3>
                <p className="text-gray-300 mb-6">End-to-end web applications with modern frameworks and scalable architecture.</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Frontend & Backend Development</li>
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />API Design & Integration</li>
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Database Architecture</li>
                </ul>
              </CardContent>
            </Card>
            
            {/* E-commerce Solutions */}
            <Card className="tech-card bg-[hsl(240,19%,16%)] p-8 rounded-2xl cyber-glow border-[hsl(267,84%,67%)]/20">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-[hsl(328,85%,70%)] to-[hsl(188,94%,43%)] rounded-xl flex items-center justify-center mb-6">
                  <ShoppingCart className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">E-commerce Platforms</h3>
                <p className="text-gray-300 mb-6">Complete online stores with payment processing and inventory management.</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Stripe Payment Integration</li>
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Inventory Management</li>
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Admin Dashboards</li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Data Solutions */}
            <Card className="tech-card bg-[hsl(240,19%,16%)] p-8 rounded-2xl cyber-glow border-[hsl(267,84%,67%)]/20">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-[hsl(188,94%,43%)] to-[hsl(267,84%,67%)] rounded-xl flex items-center justify-center mb-6">
                  <Database className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Data Scraping & Analytics</h3>
                <p className="text-gray-300 mb-6">Automated data collection and intelligent visualization systems.</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Web Scraping Solutions</li>
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Data Visualization</li>
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Analytics Dashboards</li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Custom Websites */}
            <Card className="tech-card bg-[hsl(240,19%,16%)] p-8 rounded-2xl cyber-glow border-[hsl(267,84%,67%)]/20">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-[hsl(267,84%,67%)] to-[hsl(188,94%,43%)] rounded-xl flex items-center justify-center mb-6">
                  <Palette className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Custom Websites</h3>
                <p className="text-gray-300 mb-6">Bespoke web solutions tailored to your unique business requirements.</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Responsive Design</li>
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />CMS Integration</li>
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />SEO Optimization</li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Authentication */}
            <Card className="tech-card bg-[hsl(240,19%,16%)] p-8 rounded-2xl cyber-glow border-[hsl(267,84%,67%)]/20">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-[hsl(328,85%,70%)] to-[hsl(267,84%,67%)] rounded-xl flex items-center justify-center mb-6">
                  <Shield className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Authentication Systems</h3>
                <p className="text-gray-300 mb-6">Secure user management with modern authentication protocols.</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Google OAuth Integration</li>
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />JWT Authentication</li>
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Role-based Access</li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Landing Pages */}
            <Card className="tech-card bg-[hsl(240,19%,16%)] p-8 rounded-2xl cyber-glow border-[hsl(267,84%,67%)]/20">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-[hsl(188,94%,43%)] to-[hsl(328,85%,70%)] rounded-xl flex items-center justify-center mb-6">
                  <Rocket className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Landing Pages</h3>
                <p className="text-gray-300 mb-6">High-converting pages optimized for performance and user engagement.</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Contact Form Integration</li>
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Lead Generation</li>
                  <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />A/B Testing Ready</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="tech" className="py-20 px-4 bg-[hsl(240,19%,16%)]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <Card key={tech.name} className="tech-card bg-[hsl(240,31%,9%)] p-6 rounded-xl text-center cyber-glow border-[hsl(267,84%,67%)]/20">
                <CardContent className="p-0">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h4 className="font-semibold">{tech.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Types of Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing our expertise across diverse project categories and industry verticals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* E-commerce Sites */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800" 
                alt="E-commerce development workspace" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(240,31%,9%)] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold mb-2">E-commerce Sites</h3>
                <p className="text-gray-300 mb-4">Full-featured online stores with payment processing, inventory management, and admin dashboards.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[hsl(267,84%,67%)]/20 rounded-full text-sm">Stripe Integration</span>
                  <span className="px-3 py-1 bg-[hsl(267,84%,67%)]/20 rounded-full text-sm">Inventory Management</span>
                  <span className="px-3 py-1 bg-[hsl(267,84%,67%)]/20 rounded-full text-sm">Order Processing</span>
                </div>
              </div>
            </div>
            
            {/* Data Scraping */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800" 
                alt="Data analytics dashboard" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(240,31%,9%)] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold mb-2">Data Scraping Solutions</h3>
                <p className="text-gray-300 mb-4">Automated data collection systems with intelligent parsing and visualization capabilities.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[hsl(188,94%,43%)]/20 rounded-full text-sm">Web Scraping</span>
                  <span className="px-3 py-1 bg-[hsl(188,94%,43%)]/20 rounded-full text-sm">Data Processing</span>
                  <span className="px-3 py-1 bg-[hsl(188,94%,43%)]/20 rounded-full text-sm">Analytics</span>
                </div>
              </div>
            </div>
            
            {/* Custom Websites */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800" 
                alt="Web design workspace" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(240,31%,9%)] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold mb-2">Custom Websites</h3>
                <p className="text-gray-300 mb-4">Bespoke web solutions with responsive design, CMS integration, and SEO optimization.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[hsl(328,85%,70%)]/20 rounded-full text-sm">Responsive Design</span>
                  <span className="px-3 py-1 bg-[hsl(328,85%,70%)]/20 rounded-full text-sm">CMS Integration</span>
                  <span className="px-3 py-1 bg-[hsl(328,85%,70%)]/20 rounded-full text-sm">SEO Optimized</span>
                  {/* <span className="px-3 py-1 bg-[hsl(328,85%,70%)]/20 rounded-full text-sm">Something Else</span> */}
                </div>
              </div>
            </div>
            
            {/* Landing Pages */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800" 
                alt="Marketing team workspace" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(240,31%,9%)] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold mb-2">Landing Pages</h3>
                <p className="text-gray-300 mb-4">High-converting landing pages with integrated contact forms and lead generation capabilities.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-400/20 rounded-full text-sm">Contact Forms</span>
                  <span className="px-3 py-1 bg-green-400/20 rounded-full text-sm">Lead Generation</span>
                  <span className="px-3 py-1 bg-green-400/20 rounded-full text-sm">A/B Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[hsl(240,19%,16%)]/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Build Something Amazing</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Get in touch and let's discuss your next project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[hsl(267,84%,67%)] to-[hsl(328,85%,70%)] rounded-lg flex items-center justify-center">
                      <Mail className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-300">codemuse@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[hsl(267,84%,67%)] to-[hsl(328,85%,70%)] rounded-lg flex items-center justify-center">
                      <Clock className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Response Time</p>
                      <p className="text-gray-300">Within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[hsl(267,84%,67%)] to-[hsl(328,85%,70%)] rounded-lg flex items-center justify-center">
                      <Rocket className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Project Timeline</p>
                      <p className="text-gray-300">2-8 weeks typical delivery</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-[hsl(240,31%,9%)] p-6 rounded-2xl cyber-glow border-[hsl(267,84%,67%)]/20">
                <CardContent className="p-0">
                  <h4 className="font-bold mb-4">Why Choose Code Muse?</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Modern tech stack</li>
                    <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Scalable architecture</li>
                    <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Responsive design</li>
                    <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />Robust and secure</li>
                    <li className="flex items-center"><Check className="text-[hsl(267,84%,67%)] mr-2 w-4 h-4" />24/7 support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-[hsl(240,31%,9%)] p-8 rounded-2xl cyber-glow border-[hsl(267,84%,67%)]/20">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">Name *</label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="bg-[hsl(240,19%,16%)] border-[hsl(267,84%,67%)]/30 focus:border-[hsl(267,84%,67%)]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">Email *</label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="bg-[hsl(240,19%,16%)] border-[hsl(267,84%,67%)]/30 focus:border-[hsl(267,84%,67%)]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="project" className="block text-sm font-semibold mb-2">Project Type</label>
                    <Select value={formData.project} onValueChange={(value) => setFormData(prev => ({ ...prev, project: value }))}>
                      <SelectTrigger className="bg-[hsl(240,19%,16%)] border-[hsl(267,84%,67%)]/30 focus:border-[hsl(267,84%,67%)]">
                        <SelectValue placeholder="Select a project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ecommerce">E-commerce Site</SelectItem>
                        <SelectItem value="custom-website">Custom Website</SelectItem>
                        <SelectItem value="landing-page">Landing Page</SelectItem>
                        <SelectItem value="data-scraping">Data Scraping</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold mb-2">Budget Range</label>
                    <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                      <SelectTrigger className="bg-[hsl(240,19%,16%)] border-[hsl(267,84%,67%)]/30 focus:border-[hsl(267,84%,67%)]">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k+">$25,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Project Description *</label>
                    <Textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="bg-[hsl(240,19%,16%)] border-[hsl(267,84%,67%)]/30 focus:border-[hsl(267,84%,67%)] resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full py-4 bg-gradient-to-r from-[hsl(267,84%,67%)] to-[hsl(328,85%,70%)] rounded-lg font-semibold hover:shadow-lg hover:shadow-[hsl(267,84%,67%)]/50 transition-all duration-300 hover:scale-105"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[hsl(267,84%,67%)]/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <CodeMuseLogo className="w-8 h-8" />
            <span className="text-xl font-bold gradient-text">CODE MUSE</span>
          </div>
          <p className="text-gray-400 mb-6">Transforming ideas into powerful digital solutions</p>
          {/* <p className="text-gray-400 mb-6">Connecting people and technology</p> */}
          <p className="text-sm text-gray-500">© 2024 Code Muse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
