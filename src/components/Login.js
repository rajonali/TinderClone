import React from 'react';
import '../styles/Login.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    return (
        <section className="login">
            <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>
            <Card className="loginContainer">
                <h1 style={{textAlign:"left"}}>Username</h1>
                <input
                className="usernameInput"
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>

                <p className="errorMsg">{emailError}</p>
                <h1 style={{textAlign:"left"}}>Password</h1>
                <input
                                className="passwordInput"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount
                        ? (
                            <div className="loginForm">
                                <Button variant="secondary" size="lg" onClick={handleLogin}>Sign In</Button>
                                
                                <p><br />Don't have an account?
                                    <span onClick={() => setHasAccount(!hasAccount)}> Sign up</span>
                                </p>
                            </div>
                        )
                        : (
                            <div className="signUpForm">
                                <Button variant="secondary" size="lg" onClick={handleSignup}>Sign Up</Button>
                                <br />
                                <p><br />Already have an account?
                                    <span onClick={() => setHasAccount(!hasAccount)}> Sign in</span>
                                </p>
                            </div>
                        )}
                </div>
            </Card>
        </section>
    )
}

export default Login;
