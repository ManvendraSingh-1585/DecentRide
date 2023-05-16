import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import Axios from 'axios';
import logo from './../images/logo.png'

export default function Login() {
    const navigate=useNavigate()
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [selectedOption, setSelectedOption] = useState("");

    const login = (e) =>{
      e.preventDefault()
      Axios.post('http://localhost:8000/login', {
          username: usernameReg, password: passwordReg
      }).then((response) => {
        if(response.data.status){
          if(selectedOption === "Customer")
          {
            navigate("/login/customerpage")
          }
          else
          {
            navigate("/login/driverpage")
          }
        }
        else{

        }
        console.log(response);
      });
  };
  return (
    <div id="container">
      <nav id="navbar">
        <Link to="/"><img src={logo} alt="logo" title="DecentRIDE | Cool with CarPool"/></Link>
        <input type="checkbox" id="burger-toggle"/>
        <label id="burger" for="burger-toggle">
          <div></div>
        </label>
        <ul>
          <li>
            <Link to="/" class="shortcut">Home</Link>
          </li>
          <li>
            <Link to="/signup" class="shortcut">Sign Up</Link>
          </li>
          <li>
            <Link to="/login" class="shortcut">Log In</Link>
          </li>
        </ul>
      </nav>
      <section class="spread" style={{position: "fixed"}}>
        <h2>Log In</h2>
        <form>
          <input type="text" name="username" placeholder="Username" onChange={(e) => {
            setUsernameReg(e.target.value);
        }} required/>
          <input type="password" name="pin" placeholder="Password" minlength="8" onChange={(e) => {
            setPasswordReg(e.target.value);
        }} required/>
          <label>
            <input type="radio" name="option" value="Customer"
            checked={selectedOption === "Customer"}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          />
          Customer
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="Driver"
            checked={selectedOption === "Driver"}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          />
          Driver
        </label>
          <button type="submit" value="Login" class="pill" id="btn" onClick={login}>Login</button>
        </form>
        <p>Not yet registered, <Link to="/signup" class="shortcut">SignUp</Link> here!</p>
      </section>
    </div>
    
  )
}
