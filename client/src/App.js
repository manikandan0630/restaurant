import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import Signup from "./components/signup/Signup";
import Contact from "./contact.jsx";
import Menu from "./menu.jsx";
import About from "./about.jsx";
import Home from "./home.jsx";

function App() {
  //check the session to check the authentication login or not
  let isAuthenticated = false;
  isAuthenticated = sessionStorage.getItem("login");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={isAuthenticated ? <Home   /> : <Login />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/about" element={isAuthenticated ? <About /> : <Login />}></Route>
        <Route path="/contact" element={isAuthenticated ? <Contact /> : <Login />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
