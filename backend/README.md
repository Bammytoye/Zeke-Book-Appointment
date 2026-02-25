# 🔧 Zeke Smart Booking - Backend API

RESTful API server for the Smart Booking system. Built with Node.js, Express, and MongoDB.

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Scripts](#scripts)
- [Deployment](#deployment)

---

## ✨ Features

- ✅ RESTful API design
- 🔐 JWT authentication for admin routes
- 📧 Email notifications (Nodemailer)
- ✅ Input validation & sanitization
- 🗄️ MongoDB with Mongoose ODM
- 🚦 Error handling middleware
- 📊 Real-time statistics
- 🔒 CORS configuration
- ⚡ Optimized queries

---

## 🚀 Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables

Create a `.env` file in the backend root:
```bash
cp .env.example .env
```

Edit `.env` with your credentials

### 3. Start MongoDB

**Local MongoDB:**
```bash
mongod
```

**OR use MongoDB Atlas** (cloud database)

### 4. Run Development Server
```bash
npm run dev
```

Server will start at `http://localhost:5000`

---

## 🔐 Environment Variables

Create a `.env` file with the following variables:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/(anyName)

# JWT Secret (use a strong random string)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Admin Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123

# Email Configuration (Gmail example)
EMAIL=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 📧 Email Setup (Gmail)

1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the 16-character app password in `EMAIL_PASS`

---

## 📡 API Documentation

### **Base URL**: `http://localhost:5000/api`

---

---

## 🚀 Deployment



1. Connect GitHub repository
2. Add environment variables in dashboard
3. Deploy automatically on push

### **Render**

1. Create new Web Service
2. Connect repository
3. Add environment variables
4. Deploy

---

## 🔧 Project Structure
```
backend/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   ├── authController.js     # Login & verification
│   └── bookingController.js  # Booking CRUD operations
├── middleware/
│   ├── errorHandler.js       # Global error handling
│   └── protectAdmin.js       # JWT authentication
├── models/
│   └── Booking.js            # Mongoose schema
├── routes/
│   ├── authRoutes.js         # Auth endpoints
│   └── bookingRoutes.js      # Booking endpoints
├── utils/
│   ├── mailer.js             # Email sending
│   └── validate.js           # Input validation
├── .env.example              # Environment template
├── .gitignore
├── package.json
├── server.js                 # Entry point
└── README.md                 # This file
```

---
## 📝 Validation Rules

### **Booking Validation:**

**Made with ❤️ by the ZekeTech Team**