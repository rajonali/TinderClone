import React, {useState, useEffect} from 'react';
import '../styles/TinderCards.css';
import TinderCard from "react-tinder-card";

import database from "./firebase";


function TinderCards(){
    const [people, setPeople] = useState([]);


useEffect(() => {

const unsubscribe = database
.collection("people")
.onSnapshot(snapshot => (setPeople(snapshot.docs.map((doc) => doc.data()))
))

return () => {
    unsubscribe();
};

}, [])


return (

<div className="tinderCards__cardContainer">
{people.map((person) => (
    <TinderCard
    className="swipe"
    key={person.name}
    preventSwipe={['up', 'down']}
    >
        <div style={{ backgroundImage: `url(${person.url})` }}
            className="card">
                <div className="subtitles">
                <h3>{person.name}&nbsp;</h3>  
                <h3>{person.age}</h3>
                </div>
        </div>
        </TinderCard>
))}

    </div>
);
} 

export default TinderCards;