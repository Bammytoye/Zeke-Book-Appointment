# 🎨 Zeke Smart Booking - Customer Portal

Modern, responsive booking interface for customers. Built with React, Vite, and Tailwind CSS.

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Components](#components)
- [Deployment](#deployment)

---

## ✨ Features

- 🎯 **3-Step Booking Wizard**
  - Step 1: Choose service type
  - Step 2: Select date and time
  - Step 3: Enter contact details

- 📅 **Smart Calendar**
  - Real-time availability checking
  - Weekend blocking
  - Past date prevention
  - Visual feedback for available/taken slots

- ⏰ **Time Slot Selection**
  - 30-minute intervals (9 AM - 5 PM)
  - Strikethrough for booked slots
  - Easy-to-tap mobile buttons

- 📧 **Email Confirmation**
  - Instant confirmation emails
  - Booking summary

- 📱 **Fully Responsive**
  - Mobile-first design
  - Tablet optimization
  - Desktop enhancements

- 🎨 **Modern UI**
  - Dark gradient theme
  - Smooth animations
  - Loading states
  - Error handling

---

## 🚀 Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables

Create a `.env` file in the frontend root:
```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Run Development Server
```bash
npm run dev
```

App will open at `http://localhost:5173`

---

## 🔐 Environment Variables
```env
# Backend API URL
VITE_API_URL=http://localhost:5000/api

# For production:
# VITE_API_URL=https://your-backend.herokuapp.com/api
```

---

## 🎨 Styling

### **Tailwind Configuration**

Custom breakpoints:
```javascript
{
  sm: '640px',   // Tablet portrait
  md: '768px',   // Tablet landscape
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
}
```

### **Color Palette**
```css
Primary: Violet (#8B5CF6) to Fuchsia (#D946EF)
Background: Dark slate (#0f172a, #1e293b)
Text: White to Slate
Accents: Violet, Fuchsia, Pink
```

---

## 📜 Scripts
```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

---

## 🚀 Deployment

### **Vercel** (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variable
vercel env add VITE_API_URL
```

### **Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### **Manual Build**
```bash
# Build
npm run build

# dist/ folder contains production files
# Upload to any static host
```

---

## 🌐 Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📱 Responsive Design

### **Mobile (< 640px)**
- Stacked layout
- Larger touch targets
- Simplified navigation
- Compact service cards

### **Tablet (640px - 1024px)**
- 2-column grids
- Side-by-side elements
- Expanded navigation

### **Desktop (1024px+)**
- Multi-column layouts
- Hover effects
- Full navigation
- Large visuals

---

## 🔧 Project Structure
```
frontend/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── booking/
│   │   │   ├── StepIndicator.jsx
│   │   │   ├── ServiceStep.jsx
│   │   │   ├── DateTimeStep.jsx
│   │   │   ├── DetailsStep.jsx
│   │   │   ├── SuccessScreen.jsx
│   │   │   ├── ServiceSelector.jsx
│   │   │   ├── CalendarPicker.jsx
│   │   │   ├── TimeSlotPicker.jsx
│   │   │   ├── BookingSummaryCard.jsx
│   │   │   ├── Field.jsx
│   │   │   └── Input.jsx
│   │   ├── AnimatedBackground.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Services.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── BookingPage.jsx
│   ├── lib/
│   │   └── utils.js          # API utils & helpers
│   ├── App.jsx               # Routes
│   ├── main.jsx              # Entry point
│   └── index.css             # Tailwind imports
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md                 # This file
```

---

## 🐛 Troubleshooting

### API Connection Issues
```javascript
// Check API URL in .env
console.log(import.meta.env.VITE_API_URL);

// Verify backend is running
curl http://localhost:5000/api/bookings/availability?date=2024-02-20
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Try build again
npm run build
```

### Calendar Not Working
- Check date format is YYYY-MM-DD
- Ensure backend returns correct availability data
- Verify no JavaScript errors in console

---

## 🎯 Performance Optimization

- ✅ Lazy loading components
- ✅ Optimized images
- ✅ Code splitting
- ✅ Tailwind CSS purging
- ✅ Vite build optimization

---

**Made with ❤️ by the ZekeTech Team**