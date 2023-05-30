import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const initailValue = {
    email : "",
    password : "",
}

const LoginForm = () => {
const [input, setInput] = useState(initailValue);
const Navigate = useNavigate();

const handleInput = (e) => {
    const {name, value} = e.target;
    setInput({...input, [name]:value});
}

const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:4001/api/v1/login', input);
        console.log(response);
        const {token} = response.data;
        if(token){
            sessionStorage.setItem('jwtToken', token);
            if(response.status === 200){
                Navigate('/home');
                toast.success("Login Successfully");
            }
        }
    } catch (error) {
        toast.error(error.response.data.error);
        console.log(error.response.data.error);
    }
   
}
  return (
    <>
        <div className="login-form">
            <div className="title">Login</div>
            <form onSubmit={handleSubmit} action="">
                <div className="input-boxes">
                    <div className="input-box">
                        <i className="fas fa-envelope"></i>
                        <input name ="email" type="text" placeholder="Enter your email" value={input.teachEmail} onChange={handleInput}  required />
                    </div>
                    <div className="input-box">
                        <i className="fas fa-lock"></i>
                        <input name ="password" type="password" placeholder="Enter your password" value={input.teachPassword} onChange={handleInput} required />
                    </div>
                    <div className="text"><a href="/">Forgot password?</a></div>
                    <div className="button input-box">
                        <input type="submit" value="Sumbit" />
                    </div>
                    <div className="text sign-up-text">Don't have an account? <label >Sigup now</label>
                    </div>
                </div>
            </form>
        </div> 
    </>
  )
}

export default LoginForm
