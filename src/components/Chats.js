import React from 'react';
import Chat from './Chat';
import '../styles/Chats.css';


function Chats() {
    return <div className="chats">
<Chat 
name ="Mark"
message="Hey how are you doing"
timestamp="12 min ago"
profilePic="..." />
<Chat 
name ="Don Shipley"
message="Answer the phone"
timestamp="22 min ago"
profilePic="..." />
<Chat 
name ="Allah"
message="Do your prayers"
timestamp="50 minutes ago"
profilePic="..." />
    </div>
}

export default Chats;

