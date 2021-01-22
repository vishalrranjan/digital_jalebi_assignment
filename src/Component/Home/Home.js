import React, { useEffect, useState } from 'react';
import  { Link } from 'react-router-dom'
import firestoreDB, { auth } from '../../Firestore/Firestore';


import firebase from 'firebase';
import './home.css'
import Items from '../Items/Items';

const Home = () => {

    // will fetched from firebase
    const [getItems, setGetItems] = useState([]);
    const [textfield, setTextfield] = useState('');

    useEffect(()=>{
        // getting Items
       firestoreDB.collection("todoAuth").onSnapshot(function(querySnapshot) {
           setGetItems(
               querySnapshot.docs.map((doc) => ({
                   id: doc.id,
                   text: doc.data().text,
                }))
           );
       })
       console.log(getItems.indexOf(getItems.id));

    },[]);

    const handleLogOut = () => {
        
        auth.signOut()
        .then(()=>{
            alert('sign-out successfully');
            localStorage.setItem('isLoggedIn', false);
        })
        .catch((err)=>{
            alert('something wrong.');
            console.log(err);
        });
    }

    function handleTextarea(e){
        let textfieldValue = e.target.value;
        setTextfield(textfieldValue);
    }

    function handleClear(){
        setTextfield('');
    }

    function handleAdd(){
        if(textfield === ""){
            alert('Ahh ! You forgot to fill the textfield...');
        } else{
            // firestoreDB.auth().onAuthStateChanged((user)=>{
            //     user ? alert('user Signed In') : alert('user not Signed In')
            // });
    
            firestoreDB.collection("todoAuth").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                text: textfield,
            })
            setTextfield('');
        }
    }

    return (
        <div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" onClick={handleLogOut}> LOGOUT </Link>
                        </li>
                    </ul>
                </nav>
                <div className="card-wrapper">
                    <div className="card-head">
                        <textarea className="input-area" onChange={handleTextarea} value={textfield} placeholder="Enter text ..." cols="30" rows="7" />
                        <div className="card-control">
                            <input className="card-control-btn" onClick={handleAdd} type="button" value="Add +" />
                            <input className="card-control-btn" onClick={handleClear} type="button" value="Clear" />
                        </div>
                    </div>
                    <div className="card-body">
                        {
                            getItems.map( (item, index) => (
                                <Items key={item.id} text={item.text} id={item.id} index={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;