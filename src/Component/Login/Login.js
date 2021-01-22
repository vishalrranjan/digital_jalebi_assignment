import React, { useState } from 'react';
import { auth } from '../../Firestore/Firestore'; 
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(e){
        let userEmail = e.target.value;
        setEmail(userEmail);
        console.log(userEmail);
    }

    function handlePasswordChange(e){
        let userPassword = e.target.value;
        setPassword(userPassword);
        console.log(userPassword);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // auth.auth().signInWithEmailAndPassword(email, password)
        auth.signInWithEmailAndPassword(email, password)
        .then(()=>{
            alert('Sign In successfully.');
            localStorage.setItem('isLoggedIn', true);
            window.location.replace('/home');
        })
        .catch((error)=>{
            alert('Someting is wrong ', error);
        });
        setEmail('')
        setPassword('')
    }


    return (
        <div className="login">
            <div className="wrapper">
                <div className="header">
                    <h1>LOGIN HERE</h1>                    
                </div>
                <form className="form-container" onSubmit={handleSubmit} method="POST">
                    <div className="input-group">
                        <input className="login-field" onChange={handleEmailChange} type="email" placeholder="Enter Your Email" value={email} />
                        <input className="login-field" onChange={handlePasswordChange} type="password" placeholder="Enter Your Password" value={password} />
                        <input className="login-btn" type="submit" value="LOGIN" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;