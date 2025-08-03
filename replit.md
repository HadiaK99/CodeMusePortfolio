# Overview

This is a full-stack web application built as a portfolio/marketing website for "Code Muse" - a web development agency. The application features a modern React frontend with a Node.js/Express backend, designed to showcase development services across multiple technology stacks (React, TypeScript, Next.js, Python, Django, Flask, Node.js, etc.). The site uses a dark-themed design with purple/pink gradient elements, smooth animations, and interactive features including a fully functional contact form that sends emails to codemuse@gmail.com.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form schemas

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **Email Service**: Nodemailer for contact form notifications

## Data Layer
- **Database**: PostgreSQL as the primary database
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Migrations**: Drizzle Kit for database schema management
- **Schema Validation**: Zod schemas shared between frontend and backend for type safety

## Project Structure
- **Monorepo Layout**: Single repository with separate client, server, and shared directories
- **Shared Types**: Common schemas and types in `/shared` directory
- **Client**: React application in `/client` with component library
- **Server**: Express API in `/server` with routes and storage layers
- **Build System**: Vite for frontend, esbuild for backend production builds

## Development Features
- **Hot Reload**: Vite development server with HMR
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared code
- **Error Handling**: Runtime error overlay for development debugging
- **Code Quality**: Consistent code formatting and linting setup

# External Dependencies

## Database Services
- **PostgreSQL**: Primary database (configured via DATABASE_URL environment variable)
- **Neon Database**: Serverless PostgreSQL provider (@neondatabase/serverless)

## Email Services
- **Nodemailer**: SMTP email sending for contact form notifications
- **Email Templates**: Server-side email composition for client inquiries

## UI and Design
- **Radix UI**: Headless UI components for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variants

## Development Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Static type checking across the entire stack
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Runtime Dependencies
- **React Query**: Server state management and caching
- **Wouter**: Lightweight routing for single-page application
- **Date-fns**: Date manipulation and formatting utilities
- **Zod**: Runtime type validation and schema parsing