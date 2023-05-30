import React from 'react'

const SignUp = () => {
  return (
    <>
      <div className="signup-form">
        <div className="title">Signup</div>
        <form action="#">
            <div className="input-boxes">
                <div className="input-box">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Enter your password" required />
                </div>
                <div className="button input-box">
                    <input type="submit" value="Sumbit" />
                </div>
                <div className="text sign-up-text">Already have an account? <label >Login now</label></div>
                </div>
        </form>
    </div>
    </>
  )
}

export default SignUp
