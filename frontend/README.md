# CubeAI Frontend

A modern, premium business website built with Next.js 14, Tailwind CSS, Framer Motion, and ShadCN UI components.

## 🎨 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **UI Components**: ShadCN UI + Radix UI
- **Icons**: Lucide React
- **Language**: TypeScript

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
frontend/
├── app/              # Next.js app directory
│   ├── page.tsx     # Home page
│   ├── layout.tsx   # Root layout
│   └── globals.css  # Global styles
├── components/       # Reusable React components
│   ├── Navbar.tsx   # Navigation with dropdowns
│   └── HeroSection.tsx # Hero section
├── lib/             # Utility functions
├── public/          # Static assets
└── package.json
```

## 🎯 Features

### Navbar
- **Responsive Design**: Works on all device sizes
- **Dropdown Menus**: Services, Resources, Careers, About
- **CTA Button**: "Talk to an Expert"
- **Premium Styling**: Blue and white business theme

### Hero Section
- **Animated Headline**: "Building Intelligent Digital Systems for Growing Businesses"
- **Two CTA Buttons**: 
  - "Talk to an Expert" (Primary)
  - "Explore Our Services" (Secondary)
- **Trust Strip**: Icons for Secure, Scalable, Enterprise-Ready, Long-Term Support
- **Smooth Animations**: Framer Motion effects

## 🎨 Design System

### Color Palette
- **Primary Blue**: #1e5ddb to #091f5e (gradient)
- **Neutral**: White background with gray text
- **Accents**: Hover states and primary interactions

### Typography
- Clean, professional sans-serif font
- Consistent sizing hierarchy
- Optimized for readability

## 📝 Environment Variables

Create a `.env.local` file in the frontend directory:

```bash
# Add any required environment variables here
```

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test locally with `npm run dev`
4. Build and verify with `npm run build`

## 📄 License

All rights reserved © CubeAI
