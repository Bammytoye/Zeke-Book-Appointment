# 🗓️Zeke Smart Booking - Full Stack Booking System

A modern, professional booking management system with real-time availability, admin dashboard, and email notifications. Built with the MERN stack (MongoDB, Express, React, Node.js).


🗣️Features

**Customer Booking Portal**
- ✅ Multi-step booking option (Service → Date/Time → Details)
- 📅 Real-time availability calendar
- 🚫 Weekend blocking & past date prevention
- ⏰ 30-minute time slot intervals
- 📧 Instant email confirmation
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern gradient UI with animations

**Admin Page**
- 🔐 Secure JWT authentication
- 📊 Real-time statistics (Total, Pending, Approved, Cancelled)
- 🔍 View detailed booking information
- ✅ Approve/Cancel bookings with confirmation modals
- 🗑️ Delete bookings (with confirmation)
- 📧 Automated email notifications to customers
- 🔄 Live data updates
- 📱 Responsive table with mobile optimization

 **Backend**
- 🛡️ Input validation & sanitization
- 📧 Nodemailer email integration
- 🔒 JWT token authentication
- ⚡ Optimized MongoDB queries
- 🚦 RESTful API design
- 🔐 Admin-only protected routes

---

🏗️ Project Structure
smart-booking/
├── backend/           # Node.js + Express API
├── frontend/          # React customer booking portal
├── admin/            # React admin dashboard
└── README.md         # readMe

---

🚀 Quick Start

Prerequisites
- **Node.js** >= 18.0.0
- **MongoDB** >= 6.0 (local or MongoDB Atlas)
- **npm** or **yarn**

Installation

1. **Clone the repository**
git clone https://github.com/Bammytoye/Zeke-Book-Appointment.git
cd folder name
```

2. **Setup Backend**
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials
npm run dev
```

3. **Setup Frontend**
cd ../frontend
npm install
npm run dev
```

4. **Setup Admin Panel**
```bash
cd ../admin
npm install
npm run dev
```

### Access the Applications

- **Frontend**: http://localhost:5173
- **Admin Panel**: http://localhost:5174
- **Backend API**: http://localhost:5000

Default admin credentials:
- Username: `admin`
- Password: `admin123`

---

## 📖 Documentation

- [Backend Documentation](./backend/README.md)
- [Frontend Documentation](./frontend/README.md)
- [Admin Panel Documentation](./admin/README.md)

---

## 🛠️ Tech Stack

### **Frontend & Admin**
- React 18 + Vite
- React Router v6
- Tailwind CSS
- Date handling with native JS

### **Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT authentication
- Nodemailer for emails
- bcrypt for password hashing

---

## 🎨 Design Features

- **Responsive Design**: Works on mobile (320px), tablet (640px), and desktop (1024px+)
- **Dark Theme**: Modern dark gradient UI
- **Animations**: Smooth transitions and micro-interactions
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized bundle sizes and lazy loading

---

## 📧 Email Configuration

The system sends automated emails for:
- ✅ Booking confirmation (to customer)
- 📬 New booking notification (to admin)
- ✅ Status updates (approved/cancelled)

Configure email in `backend/.env`:
```env
EMAIL=your-email@gmail.com
EMAIL_PASS=your-app-password
```

> **Note**: For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833)

---

## 🔒 Security Features

- JWT token authentication with 8-hour expiration
- Password hashing with bcrypt
- Input validation and sanitization
- Protected admin routes
- CORS configuration
- MongoDB injection prevention
- XSS protection

---

## 📦 Deployment


### Backend (Render)
cd backend

# Set environment variables in hosting platform
# Deploy using Git or CLI
```

### Frontend & Admin (Vercel/Netlify)
```bash
# Build for production
cd frontend && npm run build
cd admin && npm run build

# Deploy dist/ folder to hosting platform
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License


## 👨‍💻 Author

**Your Name**
- GitHub: [@bammytoye](https://github.com/bammytoye)
- Email: bamigbalatoyese@gmail.com

---

## 🙏 Acknowledgments

- React community for amazing tools
- Tailwind CSS for utility-first CSS
- MongoDB for flexible database
- All contributors and users

---


**Made with ❤️ by the ZekeTech Team**