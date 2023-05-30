import ErrorHandler from "../utils/errorHandler.js";

export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "interval server error" ;

    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400);
    }
    res.status(err.statusCode).json({
        status: false,
        error : err.message, 
    })
}