# Personal Website - Technical Documentation

## 📑 Table of Contents

- [Personal Website - Technical Documentation](#personal-website---technical-documentation)
  - [📑 Table of Contents](#-table-of-contents)
  - [📋 Project Overview](#-project-overview)
  - [🛠️ Technology Stack](#️-technology-stack)
    - [Core Framework and Libraries](#core-framework-and-libraries)
    - [Styling and UI](#styling-and-ui)
    - [Communication](#communication)
    - [Development and Code Quality](#development-and-code-quality)
  - [📂 Project Structure](#-project-structure)
  - [🎨 Key Technical Features](#-key-technical-features)
    - [1. **Single Page Application (SPA)**](#1-single-page-application-spa)
    - [2. **Responsive Design**](#2-responsive-design)
    - [3. **State Management**](#3-state-management)
    - [4. **Modular Components**](#4-modular-components)
    - [5. **Performance Optimizations**](#5-performance-optimizations)
    - [6. **Design System**](#6-design-system)
  - [🧭 Site Navigation Guide](#-site-navigation-guide)
    - [Header (Fixed)](#header-fixed)
    - [Main Pages](#main-pages)
      - [1. **Home**](#1-home)
      - [2. **About Me**](#2-about-me)
      - [3. **Certifications**](#3-certifications)
      - [4. **Audit Portfolio**](#4-audit-portfolio)
      - [5. **Dev Portfolio**](#5-dev-portfolio)
      - [6. **Contact Me**](#6-contact-me)
    - [Footer (Fixed)](#footer-fixed)
  - [🎯 Key Features](#-key-features)
    - [Modal Navigation](#modal-navigation)
    - [Responsive Behavior](#responsive-behavior)
    - [Accessibility](#accessibility)
  - [🚀 Available Commands](#-available-commands)
  - [📱 Responsive Breakpoints](#-responsive-breakpoints)
  - [🎨 Custom Color Palette](#-custom-color-palette)
  - [📝 Development Notes](#-development-notes)
  - [🔄 Future Updates](#-future-updates)

---

## 📋 Project Overview

This is my personal website developed to showcase my professional portfolio, specializing in blockchain development and smart contract security. The site features development projects, security audits, certifications, and contact information.

## 🛠️ Technology Stack

### Core Framework and Libraries

- **React 19.1.1** - Main UI library for building the user interface
- **TypeScript 5.8.3** - Typed superset of JavaScript for enhanced code robustness
- **Vite 7.1.2** - Modern and fast build tool for development and bundling
- **Redux Toolkit 2.8.2** - Global state management for the application
- **React Redux 9.2.0** - Official Redux bindings for React

### Styling and UI

- **Tailwind CSS 3.4.18** - Utility-first CSS framework for rapid and responsive styling
- **PostCSS 8.5.6** - Tool for transforming CSS with JavaScript plugins
- **Autoprefixer 10.4.22** - PostCSS plugin to automatically add vendor prefixes
- **Custom CSS** - Custom CSS files for specific components (home.css, header.css, footer.css, etc.)

### Communication

- **EmailJS 4.4.1** - Service to send emails directly from the frontend without a backend

### Development and Code Quality

- **ESLint 9.33.0** - Linter to identify and fix issues in JavaScript/TypeScript code
- **TypeScript ESLint** - TypeScript-specific ESLint plugin
- **Vite Plugin React** - Official plugin to integrate React with Vite

## 📂 Project Structure

```
personal-website/
├── src/
│   ├── assets/          # Static resources
│   │   ├── css/         # Custom CSS files
│   │   ├── img/         # Images (logos, certifications, projects)
│   │   ├── PDF/         # Audit PDFs
│   │   └── Font/        # Custom Roboto fonts
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Home.tsx
│   │   ├── AboutMe.tsx
│   │   ├── Certifications.tsx
│   │   ├── Portfolio.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectSummary.tsx
│   │   ├── AuditPortfolio.tsx
│   │   ├── AuditCard.tsx
│   │   ├── AuditSummary.tsx
│   │   └── ContactMe.tsx
│   ├── data/            # Structured data
│   │   ├── ProjectCardData.ts
│   │   └── AuditCardData.ts
│   ├── redux/           # Redux configuration
│   │   ├── store.ts
│   │   ├── pagesSlice.ts
│   │   ├── selectedProjectSlice.ts
│   │   └── projectFiltersSlice.ts
│   ├── types/           # TypeScript definitions
│   │   ├── pageTypes.ts
│   │   ├── projectTypes.ts
│   │   └── formTypes.ts
│   ├── App.tsx          # Main component
│   ├── main.tsx         # Application entry point
│   └── providers.tsx    # Redux Provider
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## 🎨 Key Technical Features

### 1. **Single Page Application (SPA)**

- Client-side navigation without page reloads
- Global state management with Redux for page navigation

### 2. **Responsive Design**

- Fully responsive layout optimized for:
  - Mobile (< 768px)
  - Tablet (768px - 1024px)
  - Desktop (> 1024px)
  - Nest Hub (1024px) - specific optimizations
- Custom Tailwind breakpoints

### 3. **State Management**

- **Redux Slices**:
  - `pagesSlice`: Manages the currently displayed page
  - `selectedProjectSlice`: Manages the selected project for detailed view
  - `projectFiltersSlice`: Manages filters applied to projects

### 4. **Modular Components**

- Clear separation between presentation and logic components
- Reusable similar components (ProjectCard/AuditCard, ProjectSummary/AuditSummary)
- Full type safety with TypeScript

### 5. **Performance Optimizations**

- Optimized build with Vite
- Automatic code splitting
- Lazy loading of images
- Automatic CSS purge with Tailwind

### 6. **Design System**

- Custom color palette (logo-blue, logo-dark, logo-light-blue)
- Consistent spacing system
- Components with glassmorphism effects
- Smooth animations and transitions

## 🧭 Site Navigation Guide

### Header (Fixed)

The main navigation menu is located in the header, always visible at the top of the page:

- **Personal Logo** (clickable) - Returns to Home
- **Navigation Menu**:
  - **About Me** - Personal information and skills
  - **Certifications** - Professional certifications
  - **Audit Portfolio** - Security audit portfolio
  - **Dev Portfolio** - Development projects portfolio
  - **Contact Me** - Contact form
- **Social Links**:
  - LinkedIn
  - GitHub
  - X (Twitter)
  - Start2Impact

### Main Pages

#### 1. **Home**

The landing page features:

- Animated counters displaying:
  - Total number of projects
  - Number of completed audits
  - Number of vulnerabilities discovered
- Call-to-action to explore the portfolio

#### 2. **About Me**

Split into two columns (responsive):

- **Left Column**:
  - Who I am (personal biography)
  - Professional experiences
  - Educational background
  - Personal growth journey
- **Right Column**:
  - Soft skills (interactive charts)
  - Link to complete I-Profile report
  - Technical Stack:
    - Current skills (Solidity, TypeScript, EVM, Foundry, Hardhat, DeFi)
    - Future learning path (Cairo, StarkNet)

#### 3. **Certifications**

Displays professional certifications with:

- Certificate image
- Layout optimized for all devices

#### 4. **Audit Portfolio**

Presents security audits divided by platform:

- **Total Findings** global counter (High/Medium/Low)
- **Platform Sections**:
  - Cyfrin CodeHawks
  - Damn Vulnerable DeFi
- Each platform shows total vulnerabilities found
- **Clickable Audit Cards** displaying:
  - Project name
  - Image
  - Project type
  - Programming languages
  - Framework used
  - Vulnerability counter (H/M/L)

**Interaction**:

- Click on a card to open the **Audit Summary** modal with:
  - Detailed description
  - Link to PDF report
  - Link to source code
  - Vulnerability statistics

#### 5. **Dev Portfolio**

Similar to Audit Portfolio but for development projects:

- **Project Cards** organized by category
- Available filters (if implemented)
- Technical details of each project

**Interaction**:

- Click on a card to open the **Project Summary** modal with:
  - Complete project description
  - Technologies used
  - Link to GitHub repository
  - Link to deployment (if available)

#### 6. **Contact Me**

Contact form with glassmorphism design:

- **Fields**:
  - Name (required)
  - Company (optional)
  - Email (required)
  - Message (required)
- Submission via EmailJS
- Client-side form validation
- Visual success/error feedback

### Footer (Fixed)

Present at the bottom of every page:

- Copyright © 2025 Elia Bordoni

## 🎯 Key Features

### Modal Navigation

- Clicking on a ProjectCard or AuditCard opens an overlay modal
- The modal displays complete project/audit details
- Close via external click or close button
- Background page scroll is blocked when modal is open

### Responsive Behavior

- **Mobile**: Header on two rows (logo + social / menu)
- **Tablet/Desktop**: Header on one row with horizontal layout
- Adaptive cards: 100% mobile → 42% tablet → 18% desktop
- Padding and spacing optimized for each breakpoint

### Accessibility

- Links with `rel="noopener noreferrer"` attributes for security
- Interactive elements with appropriate `role="button"`
- Descriptive alt text for all images
- Optimized color contrast for readability

## 🚀 Available Commands

```bash
# Start development server
npm run dev

# Build project for production
npm run build

# Run linter to check for errors
npm run lint

# Preview production build
npm run preview
```

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px` (`md` breakpoint)
- **Tablet**: `768px - 1024px` (`md` - `lg` breakpoints)
- **Nest Hub**: `1024px` (`lg` breakpoint) - specific optimizations
- **Desktop**: `> 1280px` (`xl` breakpoint)

## 🎨 Custom Color Palette

Defined in `tailwind.config.js`:

- `logo-blue`: Primary brand blue
- `logo-dark`: Dark blue variant
- `logo-light-blue`: Light blue variant

## 📝 Development Notes

- Project data is centralized in `src/data/`
- TypeScript type definitions are in `src/types/`
- Global styles are in `src/assets/css/index.css`
- Specific components have dedicated CSS files for complex styles
- Custom Roboto fonts included locally

## 🔄 Future Updates

The site is designed to be easily extensible:

- Add new projects by modifying `ProjectCardData.ts` or `AuditCardData.ts`
- New sections can be implemented as separate components
- Routing system easily expandable via Redux
