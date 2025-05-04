# Muhammad Huzaifa Inshal – Portfolio Website

This is my personal portfolio website built using modern web technologies like **Next.js**, **Tailwind CSS**, **Magic UI**, and **shadcn/ui**. It showcases my background as a Computer Systems Engineer, highlighting my experience across Software Development, SOC, GRC, InfoSec, DevOps, and AI.

## ✨ Tech Stack

- **Next.js** – React-based framework for building fast, full-stack web apps
- **Tailwind CSS** – Utility-first CSS for rapid UI development
- **shadcn/ui** – Accessible UI components built on Radix UI and Tailwind
- **Magic UI** – Pre-built animations and effects for elegant user experiences

## 🚀 Features

- Clean, responsive, and fast-loading design
- Modern UI components with dark mode support
- Animated transitions and effects with Magic UI
- Projects, career timeline, and contact sections
- Built with accessibility and best practices in mind

## 📁 Project Structure

src/
├── app/ # App Router structure
│ ├── blog/ # Blog page route
│ ├── favicon.ico # Favicon
│ ├── globals.css # Global styles
│ ├── layout.tsx # Root layout
│ └── page.tsx # Home page
│
├── components/ # Reusable UI and custom components
│ ├── custom/ # Custom made UI elements
│ │ ├── IconButtonWithAnimation.tsx
│ │ └── TextSliderWithButton.tsx
│ ├── magicui/ # Components using Magic UI effects
│ │ ├── BlurFadeText.tsx
│ │ ├── blur-fade-text.tsx
│ │ └── dock.tsx
│ └── ui/ # UI elements (cards, navbar, theme, etc.)
│ ├── experience-card.tsx
│ ├── hackathon-cards.tsx
│ ├── icons.tsx
│ ├── mdx.tsx
│ ├── mode-toggle.tsx
│ ├── navbar.tsx
│ ├── project-card.tsx
│ ├── resume-card.tsx
│ └── theme-provider.tsx
│
├── data/ # Static content
│ ├── blogs.ts
│ ├── projects.ts
│ └── resume.tsx
│
├── lib/ # Utilities and helper functions
│ └── utils.ts
│
public/ # Static files like images, favicon, etc.
