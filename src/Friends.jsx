import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend';
export default function Friends () {

    const [FriendsStore , setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setFriends(data))
    },[])

    return (
        <div className = "Box">
            <h2>Friends : {FriendsStore.length}</h2>
            {
                FriendsStore.map(friend => <Friend Prop={friend}></Friend>)
            }
        </div>
    )
}