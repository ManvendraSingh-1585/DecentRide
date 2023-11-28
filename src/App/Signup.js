import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import Axios from 'axios';
import logo from './../images/logo.png'

export default function Signup() {
  const navigate=useNavigate()
    const [usernameReg, setUsernameReg] = useState('')
    const [emailReg, setEmailReg] = useState('')
    const [Phone_number, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const signup = (e) =>{
        e.preventDefault()
        Axios.post('http://localhost:8000/signup', {
            username: usernameReg, email: emailReg, phone_number: Phone_number, password:password
        }).then((response) => {
          if (response.data.status) {
            try {
                navigate("/login");
            } catch (error) {
                console.error("Error storing user data in local storage:", error);
                // Handle the error, e.g., show a user-friendly message
            }
        }else{
              alert("Insufficient Entry! Please try again");
            }
            
        });
    };
  return (
    <div id="container">
      <nav id="navbar">
        <Link to="/"><img src={logo} alt="logo" title="DecentRIDE | Cool with CarPool" /></Link>
        <input type="checkbox" id="burger-toggle" />
        <label id="burger" htmlFor="burger-toggle">
          <div></div>
        </label>
        <ul>
          <li>
            <Link to="/" className="shortcut">Home</Link>
          </li>
          <li>
            <Link to="/signup" className="shortcut">Sign Up</Link>
          </li>
          <li>
            <Link to="/login" className="shortcut">Log In</Link>
          </li>
        </ul>
      </nav>
      <section className="spread" style={{position: "fixed"}}>
        <h2>Sign Up</h2>
        <form>
          <input type="text" name="name" placeholder="Name" onChange={(e) => {
            setUsernameReg(e.target.value);
          }} required />
          <input type="email" name="mail" placeholder="Email address" onChange={(e) => {
            setEmailReg(e.target.value)
          }} required />
          <input type="text" name="Phone_number" placeholder="Phone Number" onChange={(e) => {
            setPhone(e.target.value)
          }} required />
          <input type="password" name="password" placeholder="Password" onChange={(e) => {
            setPassword(e.target.value)
          }} required />
          <input type="submit" value="Sign up" className="pill" onClick={signup} />
        </form>
        <p className= "spread">Already registered, <Link to="/login" className="shortcut">LogIn</Link> here!</p>
      </section>
    </div>
  )
}


