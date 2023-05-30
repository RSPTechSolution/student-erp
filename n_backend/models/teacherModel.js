import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';

const teacherSchema = mongoose.Schema({
    teachUsername: {
        type: String,
        required: [true, "Please Enter Your Teacher username Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
        unique: true,
        trim: true,
        lowercase: true,
    },
    teachName: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [3, "Name should have more than 4 characters"],
    },
    teachEmail: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    teachPassword: {
        type: String,
        required: true,
        select: false,
    },
    teachPhone: {
        type: String,
    },
    role: {
        type: String,
        default: "teacher",
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },

});

// SAVE PASSWORD IN HASH VALUE
teacherSchema.pre('save', async function(next) {
    if (!this.isModified('teachPassword')) {
        return next();
    }
    if (!this.teachPassword) {
        // Handle the case when teachPassword is not set
        return next(new Error('teachPassword is not set.'));
    }
    try {
        this.teachPassword = await bcrypt.hash(this.teachPassword, 10);
        next();
    } catch (error) {
        next(error);
    }
});

// GET JWT TOKEN
teacherSchema.methods.getJWTToken = function() {
    console.log(this._id);
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}
// COMPARE PASSWORD
teacherSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.teachPassword);
}


const Teacher = mongoose.model('teacher', teacherSchema);
export default Teacher;