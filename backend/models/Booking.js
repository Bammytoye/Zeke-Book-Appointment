import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true, 
            trim: true, 
            minlength: 2, 
            maxlength: 100 
        },
        email: { 
            type: String, 
            required: true, 
            lowercase: true, 
            trim: true, 
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
            
        },
        phone: { 
            type: String, 
            trim: true, 
            default: "" 
            
        },
        notes: { 
            type: String, 
            trim: true, 
            default: "", 
            maxlength: 1000 
            
        },
        service: { 
            type: String, 
            required: true, 
            enum: ["consultation", "strategy", "review", "onboarding"] 
            
        },
        date: { 
            type: String, 
            required: true, 
            match: /^\d{4}-\d{2}-\d{2}$/ 
            
        },
        time: { 
            type: String, 
            required: true, 
            match: /^\d{2}:\d{2}$/ 
            
        },
        status: { 
            type: String, 
            enum: ["pending", "approved", "cancelled"], default: "pending" 
            
        },
    },
    { timestamps: true }
);

bookingSchema.index({ date: 1, time: 1 }, { unique: true });

export default mongoose.model("Booking", bookingSchema);