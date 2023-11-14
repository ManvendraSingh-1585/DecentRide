import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import Axios from 'axios';
import logo from './../images/logo.png'

export default function Login() {
    const navigate=useNavigate()
    const [emailReg, setUseremailReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const login = (e) =>{
      e.preventDefault()
      Axios.post('http://localhost:8000/login', {
          user_email: emailReg, password: passwordReg
      }).then((response) => {
        if(response.data.status){
          localStorage.setItem('user', JSON.stringify(response.data[0]));
          sessionStorage.setItem('isLoggedIn', 'true');
          console.log(response.data[0].user_id);
          navigate("/login/Main_Dashboard")
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
          <input type="text" name="email" placeholder="user_email" onChange={(e) => {
            setUseremailReg(e.target.value);
        }} required/>
          <input type="password" name="pin" placeholder="Password" minlength="8" onChange={(e) => {
            setPasswordReg(e.target.value);
        }} required/>
          <button type="submit" value="Login" class="pill" id="btn" onClick={login}>Login</button>
        </form>
        <p>Not yet registered, <Link to="/signup" class="shortcut">SignUp</Link> here!</p>
      </section>
    </div>
    
  )
}
