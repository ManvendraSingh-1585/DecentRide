import React from 'react'
import {Link} from 'react-router-dom'
import logo from './../images/logo.png';
export default function Home() {
  return (
    <div className="container">
        <nav id="navbar">
            <Link to='/'><img src={logo} alt="logo"/></Link>
            <input type="checkbox" id="burger-toggle"/>
            <label id="burger" htmlFor="burger-toggle">
            <div></div>
            </label>
            <ul>
            <li>
                <Link to="/" className="shortcut">Home</Link>
            </li>
            <li>
                <a href='#description-two' className="shortcut">About</a>
            </li>
            <li>
                <Link to="/signup" className="shortcut">Sign Up</Link>
            </li>
            <li>
                <Link to="/login" className="shortcut">Log In</Link>
            </li>
            </ul>
        </nav>
        <section id="wrap" >
            <main>
              <h1 >DecentRIDE</h1>
              <p>Carpooling shouldn't be that hard, right?</p>
            </main>
        </section>
        <section className="more">
            <h2>Why DecentRIDE?</h2>
            <div className="description" id="description-one">
              <div className="image-box"></div>
                <div className="word-box">
                    <p>With DecentRIDE, you get to optimize the use of your ride, save fuel, money, time and most of all: you get to share! <Link to="/signup" className="shortcut">Sign up</Link> now to see how easy carpooling can be. Seriously <Link to="/signup" className="shortcut">sign up</Link> now.</p>
                </div>
            </div>
        </section>
        <section className="more">
            <h2>About Us</h2>
            <div className="description" id="description-two">
              <div className="">
                <p>DecentRide is a carpooling web app that connects drivers and passengers for a more efficient and eco-friendly commute. Its advanced matching algorithm and user profiles make it easy to find compatible ride partners, and its focus on safety and trustworthiness creates a reliable community of users. </p>
                <p>Additionally, DecentRide uses blockchain technology for decentralized management and secure transactions, ensuring that users have full control over their data and payments.</p>
              </div>
            </div>
            <div id="btn-wrap">
              <Link to="/signup" className="pill">Sign up</Link>
              <Link to="/login" className="pill">Log in</Link>      
            </div>
        </section>
    </div>
  )
}
