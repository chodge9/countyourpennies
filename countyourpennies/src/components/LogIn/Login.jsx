import React from 'react'
import "../LogIn/login.css"

function Login() {
  return (
    <div className="container">
        <form className="insideContainer">
            <div className="insideContent">
                <h3 className="LogIn">Log In</h3>
                    <div className="form">
                        <label> Email address </label>
                        <input
                            type="email"
                            className="form"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form">
                        <label> Password </label>
                        <input
                            type="password"
                            className="form"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="Submit">
                        <button type="submit" class="btn">
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password">
                    <a href="#">Forgot password?</a>
                    </p>
            </div>
        </form>
    </div>
  )
}

export default Login