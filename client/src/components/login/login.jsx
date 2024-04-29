import { useState } from "react";
import "./login.css";
import Test from "../../test.jsx";
import {Link} from "react-router-dom";
import $ from "jquery";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  $(document).ready(()=>{
    $(".err-user").hide()
    $(".err-pwd").hide()
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleLogin({ username, password }); // Fixed typo in function name
  };

  const handleLogin = (cred) => { // Renamed function to follow camelCase convention
    fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify(cred),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res)
        if (res.ok) {
          setIsLoggedIn(true);
          alert("login successfull")
        } else {
          alert("login failed");
        }
      })
      .catch((error) => console.log(error));
  };

 
  // Check the login auth
  if (isLoggedIn) {
  sessionStorage.setItem("login",true)
  
  }

  if(sessionStorage.getItem("login")){
    return <Test />
  }
  return (
    <>
      <div className="login">
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <h1 style={{ color: "#898121" }}>Login</h1>
            <input
              type="text"
              id="user"
              placeholder="username"
              name="username"
              onChange={(e) => setUserName(e.target.value)}
            />

            <span className="err-user">Enter the username</span>
            <input
              type="password"
              id="pwd"
              placeholder="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="err-pwd">Enter the password</span>
            <span>Forgot password ?</span>
            <button type="submit">Login</button>
            {/* Use Link component instead of anchor tag */}
            <p>
              You don't have an account? <Link to="/signup">Signup</Link></p>
           
          </form>
        </div>
       
      </div>
    </>
  );
};

export default Login;
