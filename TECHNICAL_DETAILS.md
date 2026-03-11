# Technical Implementation Details

## 🎨 Theme System Architecture

### CSS Variables (index.css)
```css
/* Dark Mode - Cosmic Theme */
--background: 222 47% 3%        /* Deep space blue */
--foreground: 213 31% 95%       /* Soft white text */
--primary: 244 63% 62%          /* Indigo-500 */

/* Light Mode - Corporate Theme */
--background: 0 0% 100%         /* Pure white */
--foreground: 222 47% 11%       /* Dark gray text */
--primary: 244 63% 62%          /* Indigo-500 */
```

### Cosmic Starry Background (Dark Mode)
- Multi-layer radial gradients for stars
- 6 different star sizes and opacities
- Animated twinkling (60s cycle)
- Professional low opacity (0.4-0.6)
- No performance impact (CSS-only)

### Light Mode Gradient
- Subtle white to light-gray gradient
- Corporate professional appearance
- High readability on all screen sizes

---

## 📐 Layout & Responsiveness

### Grid System
```css
/* Skills Section */
grid-cols-1              /* Mobile: 1 column */
md:grid-cols-2          /* Tablet: 2 columns */
lg:grid-cols-3          /* Desktop: 3 columns */
xl:grid-cols-4          /* Large: 4 columns */

/* Projects Section */
grid-cols-1              /* Mobile: 1 column */
md:grid-cols-2          /* Desktop: 2 columns */
```

### Container Widths
- Mobile: Full width with 6px padding
- Tablet: Full width with 12px padding
- Desktop: `max-w-7xl` (1280px)

### Typography Scale
```css
/* Headings */
h1: 2.5rem - 3.5rem (40px - 56px mobile to desktop)
h2: 2.25rem - 3rem (36px - 48px)
h3: 1.25rem - 1.5rem (20px - 24px)

/* Body */
base: 1rem (16px)
sm: 0.875rem (14px)
xs: 0.75rem (12px)

/* Line Height */
body: 1.75
headings: 1.2
```

---

## 🎭 Animation System

### Framer Motion Patterns

#### Scroll-triggered Reveals
```javascript
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-50px" }}
transition={{ duration: 0.5, delay: index * 0.1 }}
```

#### Hover Effects
```javascript
whileHover={{ 
  y: -5, 
  scale: 1.02,
  transition: { type: "spring", stiffness: 400, damping: 17 }
}}
```

#### Stagger Children
```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};
```

### Performance Optimizations
- `viewport={{ once: true }}` - Animate once only
- `will-change` avoided (handled by Framer Motion)
- `requestAnimationFrame` for scroll events
- Throttled scroll handlers

---

## 🎨 Color System

### Primary Palette (Indigo)
```javascript
50:  '#eef2ff'
100: '#e0e7ff'
200: '#c7d2fe'
300: '#a5b4fc'
400: '#818cf8'
500: '#6366f1'  // Primary
600: '#4f46e5'
700: '#4338ca'
800: '#3730a3'
900: '#312e81'
```

### Semantic Colors
```javascript
Success: Emerald (#10b981)
Warning: Amber (#f59e0b)
Error: Red (#ef4444)
Info: Blue (#3b82f6)
```

### Opacity Levels
```css
bg-opacity-10   /* 10% - Subtle backgrounds */
bg-opacity-20   /* 20% - Hover states */
bg-opacity-50   /* 50% - Cards/panels */
bg-opacity-90   /* 90% - Solid backgrounds */
```

---

## 🔒 Accessibility Implementation

### WCAG AA Compliance
- **Text Contrast**: Minimum 4.5:1 for normal text
- **Large Text Contrast**: Minimum 3:1 for 18px+ bold or 24px+ regular
- **Interactive Elements**: Minimum 3:1 contrast with surroundings

### Keyboard Navigation
```javascript
// All interactive elements support:
- Tab navigation
- Enter/Space activation
- Escape to close modals
- Arrow keys in menus
```

### Focus States
```css
*:focus-visible {
  outline: 2px solid theme('colors.indigo.500');
  outline-offset: 2px;
}
```

### Screen Reader Support
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`)
- ARIA labels on icon buttons
- Alt text on all images
- Proper heading hierarchy (h1 → h2 → h3)

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📊 Component Architecture

### Skills Component Structure
```
Skills.jsx
├── skillsData[] (8 categories)
│   ├── category: string
│   ├── description: string
│   ├── items: array
│   │   ├── name: string
│   │   └── level: number (0-100)
│   ├── icon: Component
│   └── accentColor: string (hex)
├── SkillBar Component
│   ├── Animated progress bar
│   └── Percentage display
└── Main Skills Grid
    └── Responsive cards (1→2→3→4 columns)
```

### Projects Component Structure
```
Projects.jsx
├── projects[] array
│   ├── title, description
│   ├── role, outcome
│   ├── tags[] (tech stack)
│   └── image, links
├── ProjectCard Component
│   ├── Image with overlay
│   ├── Role badge
│   ├── Impact indicator
│   ├── Tech stack badges
│   └── Action links
└── Projects Grid (1→2 columns)
```

---

## 🎯 SEO Implementation

### Meta Tags Structure
```html
<!-- Primary -->
<title>Dhivanujan | AI, Cloud, DevOps & Full-Stack Engineer</title>
<meta name="description" content="..." />
<meta name="keywords" content="AI Engineer, Cloud, DevOps..." />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
```

### Semantic HTML
```html
<html lang="en">
  <body>
    <nav aria-label="Primary navigation">
    <main>
      <section id="hero">
      <section id="about">
      <section id="skills">
      <section id="projects">
      <section id="experience">
      <section id="contact">
    </main>
    <footer>
  </body>
</html>
```

---

## ⚡ Performance Optimizations

### Code Splitting
- Automatic by Vite
- Each route lazy-loaded
- Vendor chunk separation

### Image Optimization
- Lazy loading with viewport detection
- Responsive images with srcset (recommended)
- WebP format (recommended)

### Font Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="..." rel="stylesheet">
```

### CSS Optimization
- Tailwind JIT (Just-In-Time) compilation
- Unused CSS purged in production
- Critical CSS inlined

### Bundle Size
```
Expected sizes:
- CSS: ~50-80 KB (gzipped)
- JS: ~150-200 KB (gzipped)
- Fonts: ~30-50 KB per weight
```

---

## 🔧 Tailwind Configuration

### Custom Utilities
```javascript
// Smooth scrolling
html { scroll-behavior: smooth; }

// Glow effects (dark mode)
.dark .heading-glow {
  text-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
}

// Glass morphism
.glass-card {
  @apply bg-slate-900/50 backdrop-blur-sm border border-slate-800;
}

// Minimal scrollbar
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-thumb {
  @apply bg-slate-700 rounded-full hover:bg-indigo-600;
}
```

### Extended Theme
```javascript
extend: {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    heading: ['Inter', 'system-ui', 'sans-serif'],
  },
  colors: {
    obsidian: '#0b0c15',
    charcoal: '#12141e',
    primary: '#6366f1',
  },
  animation: {
    'spin-slow': 'spin 30s linear infinite',
    'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  },
}
```

---

## 📱 Mobile Optimization

### Touch Targets
- Minimum 44x44px for all buttons
- Proper spacing between interactive elements
- No overlapping touch zones

### Mobile Menu
```javascript
// Features:
- Slide-in animation
- Backdrop blur
- Body scroll lock when open
- Smooth close animation
- Touch-friendly spacing
```

### Viewport Meta
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

## 🧪 Testing Checklist

### Browser Compatibility
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

### Screen Sizes
- ✅ Mobile (320px - 640px)
- ✅ Tablet (640px - 1024px)
- ✅ Desktop (1024px - 1920px)
- ✅ Large Desktop (1920px+)

### Accessibility
- ✅ Keyboard navigation
- ✅ Screen reader (NVDA/JAWS)
- ✅ Color contrast (WebAIM)
- ✅ Focus indicators
- ✅ Reduced motion

### Performance
- ✅ Lighthouse score (aim for 90+)
- ✅ First Contentful Paint < 2s
- ✅ Time to Interactive < 3.5s
- ✅ Total bundle size < 500 KB

---

## 🎯 Component Props Reference

### Section Component
```typescript
interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  delay?: number;
}
```

### SkillBar Component
```typescript
interface SkillBarProps {
  skill: {
    name: string;
    level: number; // 0-100
  };
  delay: number;
  accentColor: string; // hex
}
```

### ProjectCard Component
```typescript
interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    role: string;
    outcome: string;
    tags: string[];
    image: string;
    github: string;
    demo: string;
  };
  index: number;
}
```

---

## 📚 Dependencies

### Core
- React 18.x
- React Router DOM (if using routing)
- Vite 5.x

### UI/Animation
- Framer Motion 11.x
- Lucide React (icons)

### Styling
- Tailwind CSS 3.x
- PostCSS
- Autoprefixer

### Development
- ESLint
- Prettier (recommended)

---

## 🔐 Security Best Practices

### Form Handling
- Input sanitization (if implementing backend)
- CSRF protection (if implementing backend)
- Rate limiting (if implementing backend)

### External Links
```html
<a href="..." target="_blank" rel="noopener noreferrer">
```

### Environment Variables
- Store API keys in `.env`
- Never commit `.env` to Git
- Use `.env.example` for documentation

---

**This technical documentation provides the foundation for understanding and maintaining your upgraded portfolio.** All implementations follow industry best practices and modern web standards.
