# 🔐 Zeke Smart Booking - Admin Dashboard

Powerful admin interface for managing bookings. Built with React, Vite, and Tailwind CSS.

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Components](#components)
- [Deployment](#deployment)

---

## 🚀 Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables

Create a `.env` file:
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

App will open at `http://localhost:5174`

---

## 🔐 Default Credentials
```
Username: admin
Password: admin123
```

> ⚠️ **IMPORTANT**: Change these in `backend/.env` for production!

---

## 📖 Usage

### **Login**

1. Navigate to admin panel
2. Enter username and password
3. Click "Sign In"
4. Token stored in localStorage

### **Dashboard Overview**

**Stats Cards:**
- Total Bookings
- Pending (awaiting approval)
- Approved (confirmed)
- Cancelled (rejected)

**Filter Tabs:**
- All - Show everything
- Pending - Only pending bookings
- Approved - Only approved
- Cancelled - Only cancelled

### **Managing Bookings**

**View Details:**
1. Click "View" button on any booking
2. Modal shows full information
3. Can approve/cancel from modal

**Approve Booking:**
1. Click "Approve" button
2. Confirm in modal
3. Customer receives email notification

**Cancel Booking:**
1. Click "Cancel" button
2. Confirm in modal
3. Customer receives cancellation email

**Delete Booking:**
1. Click "Delete" button
2. Confirm permanent deletion
3. Cannot be undone

### **Logout**

Click "Sign Out" button in top right

---

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
# Build
npm run build

# Deploy dist/ folder
netlify deploy --prod --dir=dist
```

---

## 🔧 Project Structure
```
admin/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── AdminLogin.jsx
│   │   ├── Topbar.jsx
│   │   ├── StatCards.jsx
│   │   ├── BookingTable.jsx
│   │   ├── DetailModal.jsx
│   │   ├── ConfirmModal.jsx
│   │   ├── Avatar.jsx
│   │   ├── StatusBadge.jsx
│   │   ├── Toast.jsx
│   │   ├── Loader.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── AdminDashboard.jsx
│   ├── lib/
│   │   └── utils.js          # API utils & helpers
│   ├── App.jsx               # Routes & auth
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

## 🔒 Security Features

- ✅ JWT token in localStorage
- ✅ Token verification on app load
- ✅ Auto-logout on token expiration
- ✅ Protected API routes
- ✅ Confirmation modals for destructive actions
- ✅ Input sanitization

---

## 🐛 Troubleshooting

### Login Issues
```javascript
// Check backend is running
curl http://localhost:5000/api/auth/login

// Verify credentials in backend/.env
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

### Token Expired
- Tokens expire after 8 hours
- Just log in again
- Token stored in `localStorage.getItem('adminToken')`

### Bookings Not Loading
```javascript
// Check token in browser console
console.log(localStorage.getItem('adminToken'));

// Verify API URL
console.log(import.meta.env.VITE_API_URL);
```

### Email Notifications Not Sending
- Check backend email configuration
- Verify backend logs for errors
- Test emails manually via backend

---

## 📊 Dashboard Statistics

**Real-time Stats:**
- Updated after every action
- Uses `/bookings/stats` API endpoint
- Shows count for each status
- Displays today's bookings

**Calculation:**
```javascript
Total = Pending + Approved + Cancelled
Today = Bookings with date === today
```

---

## 🎯 Performance

- ✅ Optimized re-renders
- ✅ Lazy loading components
- ✅ Efficient state management
- ✅ Debounced API calls
- ✅ Cached statistics

---


## 🔑 Changing Admin Credentials

Edit `backend/.env`:
```env
ADMIN_USERNAME=your-new-username
ADMIN_PASSWORD=your-secure-password
```

Restart backend server.

---

**Made with ❤️ by the ZekeTech Team**