import React from 'react';
import '../Home/home.css';
import firestoreDB from '../../Firestore/Firestore';

export default function Items({text, id, index}) {

    function handleTrash(){
        // firestoreDB.database().ref('todos').child(getItems.id).remove();
        firestoreDB.collection("todoAuth").doc(id).delete();
        console.log(id);
    }

    return (
        <div className="card-body-container">
            <h5 className="item-index"> { index+1 } </h5>
            <p className="card-body-item">
                {text}
            </p>
            <button onClick={handleTrash} title="Delete" className="del-btn">
                <img className="btn-image" src="https://img.icons8.com/color/48/000000/trash--v2.png" alt="Trash"/>
            </button>
        </div>
    )
}
