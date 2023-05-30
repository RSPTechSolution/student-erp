import React from 'react';
import './Home.css';
import image from '../../images/home.jpg';
import SignUp from '../../components/Forms/SignUp';
import LoginForm from '../../components/Forms/LoginForm';

const Home = () => {
  return (
    <>
       <div className="container">
            <input type="checkbox" id="flip" />
            <div className="cover">
                <div className="front">
                    <img src={image} alt="" />
                    <div className="text">
                    <span className="text-1">Login As a teacher<br/> Or an Admin</span>
                    <span className="text-2">Let's connected with you students</span>
                    </div>
                </div>
                <div className="back">
                    <div className="text">
                        <span className="text-1">Complete miles of journey <br/> with one step</span>
                        <span className="text-2">Let's get started</span>
                    </div>
                </div>
            </div>
            <div className="forms">
                <div className="form-content">
                    <LoginForm/>
                    <SignUp/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
