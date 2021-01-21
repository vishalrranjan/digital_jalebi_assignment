import React, { useState } from 'react';
import  { Link } from 'react-router-dom'
import firestore from '../../Firestore/Firestore'
import './home.css'

const Home = () => {

    // will fetched from firebase
    const [items, setItems] = useState(
            [
                "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.",
                "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.",
                "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.",
            ]
        );
    const [textfield, setTextfield] = useState('');

    const handleSubmit = () => {
        firestore.auth().signOut()
        .then(()=>{
            alert('sign-out successfully');
            localStorage.setItem('isLoggedIn', false);
        })
        .catch((err)=>{
            alert('something wrong.');
            console.log(err);
        });

        // firestore.auth().onAuthStateChanged((user)=>{
        //     user ? alert('user Signed In') : alert('user not Signed In')
        // });
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
            setItems([...items, textfield])
            setTextfield('');
        }
    }

    function handleTrash(e){
        let deleteItem = e.target;
        setItems()
    }


    return (
        <div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" onClick={handleSubmit}> LOGOUT </Link>
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
                            items.map( (item) => (
                                <div key="item.index" className="card-body-container">
                                    {/* <h5 className="item-index">{items.findIndex(item)}</h5> */}
                                    <h5 className="item-index">1</h5>
                                    <p className="card-body-item">
                                        {item}
                                    </p>
                                    <button onClick={handleTrash} title="Delete" className="del-btn">
                                        <img className="btn-image" src="https://img.icons8.com/color/48/000000/trash--v2.png" alt="Trash"/>
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;