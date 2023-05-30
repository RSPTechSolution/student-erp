const sendToken = (teacher, statusCode, res) => {
    const token = teacher.getJWTToken();

    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
        httpOnly: true
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        teacher,
        token
    })
}

export default sendToken;