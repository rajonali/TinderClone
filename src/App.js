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


function App() {
    return (
        <div className="App">
            <Router>

                <Switch>
                    <Route path="/personal">
                        <Header backButton="/"/>
                        <Personal />
                    </Route>
                    <Route path="/chat/:user">
                        <Header backButton="/chat"/>
                        <ChatScreen />
                    </Route>
                    <Route path="/chat">
                        <Header backButton="/"/>
                        <Chats />
                    </Route>
                    <Route path="/">
                        <Header/>
                        <TinderCards/>
                        <SwipeButtons/>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
