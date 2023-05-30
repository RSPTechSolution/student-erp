import Teacher from "../models/teacherModel.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import sendToken from "../utils/jwtToken.js";


//REGISTER TEACHER
export const registerTeacher = catchAsyncError(async (req, res, next) => {
    const teacher = await Teacher.create(req.body);
    res.status(201).json({
        status: "success",
        data: teacher
        });
});


//GET ALL TEACHER
export const getTeachers = catchAsyncError(async(req, res, next) => {
    const teachers = await Teacher.find();
    if(!teachers){
        return next(new ErrorHandler("No teachers found", 404));
    }
    res.status(200).json({
        status: "success",
        data: teachers
    });
});

//LOGIN WITH TEACHER
export const loginTeacher = catchAsyncError(async(req, res, next) => {
    const {email, password} = req.body;
    //checking
    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email & Password", 400));
    }
    const teacher = await Teacher.findOne({teachEmail: email}).select("teachPassword"); 
    
    if(!teacher){
        return next(new ErrorHandler("Invalid Email or Password", 401))
    }
    const isPasswordMatched = await teacher.comparePassword(password);
    
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }
    // const token = teacher.getJWTToken();
    // console.log("Token: "+token);
    sendToken(teacher, 200, res);
});

//LOGOUT USER
export const logout = catchAsyncError(async(req, res, next) => {

    res.cookie("token", null,{
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        status: "success",
        message: "Logged Out Successfully"
    });
})