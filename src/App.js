import {useState, useEffect} from 'react';
import Login from './components/Login';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';
import Personal from './components/Personal';
import firebase from 'firebase'

const App = () => {

    const [user,
        setUser] = useState('');
    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');
    const [emailError,
        setEmailError] = useState('');
    const [passwordError,
        setPasswordError] = useState('');
    const [hasAccount,
        setHasAccount] = useState('');

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            })
    }

    const handleSignup = () => {
        clearErrors();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            })
    }

    const handleLogout = () => {
        firebase
            .auth()
            .signOut();
    }
    const authListener = () => {
        firebase
            .auth()
            .onAuthStateChanged(user => {
                if (user) {
                    clearInputs();
                    setUser(user);
                } else {
                    setUser("");
                }
            })
    }

    useEffect(() => {
        authListener();
    }, []);

    return (
        <div className="App">
            <Router>

                <Switch>
                    <Route path="/personal/settings">
                    <Header backButton="/"/>

                        {user ? (
                            <div>
                                <h1 style={{paddingTop:'5vw'}}>Settings</h1>
                                <br />
                            <button onClick={handleLogout}>Log out</button>
                            </div>

                        ):(

                            <Login
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleLogin={handleLogin}
                        handleSignup={handleSignup}
                        hasAccount={hasAccount}
                        setHasAccount={setHasAccount}
                        emailError={emailError}
                        passwordError={passwordError} />

                        )}
                    </Route>
                    <Route path="/personal">
                      {user ? (
                        <div>
                        <Header backButton="/"/>
                        <Personal />
                        </div>
                      ):
                      (<Login
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleLogin={handleLogin}
                        handleSignup={handleSignup}
                        hasAccount={hasAccount}
                        setHasAccount={setHasAccount}
                        emailError={emailError}
                        passwordError={passwordError} />)}
                    
                    </Route>
                    <Route path="/chat/:user">
                      {user ?
                       (
                         <div>
                       <Header backButton="/chat"/>
                       <ChatScreen/>
                       </div>
):
                      (
                        <Login
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleLogin={handleLogin}
                        handleSignup={handleSignup}
                        hasAccount={hasAccount}
                        setHasAccount={setHasAccount}
                        emailError={emailError}
                        passwordError={passwordError} />
                      )
                    }
                    </Route>
                    <Route path="/chat">
                        <Header backButton="/"/>
                        <Chats/>
                    </Route>
                    <Route path="/">
                        {user ? (
<div>
                        <Header />
                        <TinderCards />
                        <SwipeButtons />

                        </div>
                        ) : (<Login
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            handleLogin={handleLogin}
                            handleSignup={handleSignup}
                            hasAccount={hasAccount}
                            setHasAccount={setHasAccount}
                            emailError={emailError}
                            passwordError={passwordError} />)}

                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
