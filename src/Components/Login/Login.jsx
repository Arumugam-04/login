import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "Sign Up" && (
                    <div className="input">
                        <input type="text" placeholder="Username" />
                    </div>
                )}
                <div className="input">
                    <input type="email" placeholder="Email" />
                </div> 
                <div className="input">
                    <input type="password" placeholder="Password" />
                </div>
                <div className="input">
                    <button type="submit">{action}</button>
                </div>
            </div>

            {action === "Login" && (
                <div className="forgot-password">
                    Lost Password? <span>Click Here</span>
                </div>
            )}

            <div className="submit-container">
                <div
                    className={action === "Login" ? "submit gray" : "submit"}
                    onClick={() => setAction("Sign Up")}
                >
                    Sign Up
                </div>
                <div
                    className={action === "Sign Up" ? "submit gray" : "submit"}
                    onClick={() => setAction("Login")}
                >
                    Login
                </div>
            </div>
        </div>
    );
};

export default Login;