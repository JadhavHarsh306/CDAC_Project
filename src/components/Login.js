import React, { useState } from 'react';
import '../style/Login.css';  // Make sure the styles are in place
import Register from './Register';
import ForgetPassword from './ForgetPassword';

const Login = ({ isOpen, closePopup }) => {
  const [reg,setreg]=useState(false);
  const [forg,setforg]=useState(false);
  if (!isOpen) {
    return null;  // If isOpen is false, do not render the popup
  }
  const refresh=(event)=>{
    event.preventDefault();
  }

  const OpenRegister=(event)=>{
    event.preventDefault();
    setreg(true);
  }
  const off=()=>{
    setreg(false);
  }
  const forget=(event)=>{
    event.preventDefault();
    setforg(true);
  }
  const nofrog=()=>{
    setforg(false);
  } 

  return (
    <div className="popup-overlay">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={refresh}>
          <div className="input-group">
            <label>Username:</label>
            <input type="text" placeholder="Enter your username" />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="forgot-password">
            <a href="#" onClick={forget}>Forgot Password?</a>
            <ForgetPassword isVisible={forg} onClose={nofrog} />
          </div>
          <div className="register-link">
            <p>Not a user yet?</p>
            <a href="#" onClick={OpenRegister}>Register Here</a>
           <Register isActive={reg} notActive={off}/>
          </div>
          <button onClick={closePopup} className='btn'>Login In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
