import mongoose from "mongoose";
import validator from "validator";


const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, "Name is required"],
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
            validate: [validator.isEmail, "Please provide a valid email address"]
        },
        mobile: {
            type: String,
            trim: true,
            required: [true, "Mobile number is required"],
            match: [/^\d{10}$/, "Please provide a valid 10-digit mobile number"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password must be at least 6 characters long"],
            select: false, // prevent password from being returned in queries
        },
        role: {
            type: String,
            trim: true,
            required: true,
            default: 'user',
            enum: ['admin', 'adminUser', 'company', 'companyUser', 'agent']
        },
        isVerified: {
            type: Boolean,
            default: false,
            required: true
        },

    },
    {
        timestamps: true,
    }
);


const User = mongoose.model("User", userSchema);

export default User;