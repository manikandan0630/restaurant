import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import Login from '../login/login';

const Signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //form validation

        
        const cred = { username, email, mobile, password };
        handleSignup(cred);
    };

    const handleSignup = (cred) => {
        fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cred),
        }).then((data) => {
              if(data.ok){
              //the signup is success then show the login page
                    (<Login />)
              }
            })
            .catch((error) => {
                console.error('Error:', error);
               
            });
    };


  
    return (
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <h1 style={{color:"#898121"}}>Signup</h1>
                <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" name="mobile" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Signup</button>
                <p>
                    Already have an account?<Link to="/" >Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;
