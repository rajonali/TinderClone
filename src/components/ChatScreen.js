import React, {useState} from "react";
import '../styles/ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';
import '../styles/ChatScreen.css';

function ChatScreen() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'ellen',
            image: '...',
            message: 'whatsup'
        }, {
            name: 'ellen',
            image: '...',
            message: 'answer me'
        }, {
            message: 'stop texting me'
        }
    ])

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput("");
    };

    return (
        <div className="chatScreen">
            <p className="chatScreen__matchedMessage">YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {messages.map((message) => message.name ? (
                <div className="chatScreen__message">

                    <Avatar className="chatScreen__image"
                    alt={message.name}
                    src={message.image} />
                    <div className="chatScreen__text">{message.message}</div>
                </div>
            ):
            (
                <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
            )
            
            
            )}


                <form className="chatScreen__input">
                    <input type="text" onChange={(e) => setInput(e.target.value)} value={input} className="chatScreen__inputField" placeholder="Type a message <3" />
                    <button type="submit" onClick={handleSend} className="chatScreen__inputButton">SEND</button>
                    </form> 
        </div>
    );
}

export default ChatScreen;