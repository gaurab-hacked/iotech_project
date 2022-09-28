import React from 'react'
import './LoginPage.css'
import Logo from '../photos/logo.jpg'

const LoginHTML = (props) => {
    const { inpFldChange, formVal, submitBtnClk } = props;
    return (
        <div id='FormTemplate'>
            <div className="form">
                <div id="logo">
                    <img src={Logo} alt="logo" />
                    <p>I.O Tech Nepal</p>
                </div>
                <form>
                    <p>Welcome Please Login</p>
                    <div className="field-group">
                        <input type="text" name="username" id="username" className="input-field" value={formVal.username} onChange={inpFldChange} placeholder="Enter Name" />
                        <label htmlFor="name" className="input-label">Username</label>
                    </div>
                    <div className="field-group">
                        <input type="password" name="password" id="password" className="input-field" value={formVal.password} onChange={inpFldChange} placeholder="Enter Name" />
                        <label htmlFor="name" className="input-label">Password</label>
                    </div>
                    <a href="#"><i className="fa-solid fa-lock"></i> <span> Forgot password? </span></a>
                    <button onClick={submitBtnClk}>Signin</button>
                </form>
            </div>
        </div>
    )
}

export default LoginHTML
