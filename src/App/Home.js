import React from 'react'
import {Link} from 'react-router-dom'
import logo from './../images/logo.png';
export default function Home() {
  return (
    <div class="container">
        <nav id="navbar">
            <Link to='/'><img src={logo} alt="logo"/></Link>
            <input type="checkbox" id="burger-toggle"/>
            <label id="burger" for="burger-toggle">
            <div></div>
            </label>
            <ul>
            <li>
                <Link to="/" class="shortcut">Home</Link>
            </li>
            <li>
                <a href='#description-two' class="shortcut">About</a>
            </li>
            <li>
                <Link to="/signup" class="shortcut">Sign Up</Link>
            </li>
            <li>
                <Link to="/login" class="shortcut">Log In</Link>
            </li>
            </ul>
        </nav>
        <section id="wrap">
            <main>
              <h1>DecentRIDE</h1>
              <p>Carpooling shouldn't be that hard, right?</p>
            </main>
        </section>
        <section class="more">
            <h2>Why DecentRIDE?</h2>
            <div class="description" id="description-one">
              <div class="image-box"></div>
                <div class="word-box">
                    <p>With DecentRIDE, you get to optimize the use of your ride, save fuel, money, time and most of all: you get to share! <Link to="/signup" class="shortcut">Sign up</Link> now to see how easy carpooling can be. Seriously <Link to="/signup" class="shortcut">sign up</Link> now.</p>
                </div>
            </div>
        </section>
        <section class="more">
            <h2>About Us</h2>
            <div class="description" id="description-two">
              <div class="">
                <p>DecentRide is a carpooling web app that connects drivers and passengers for a more efficient and eco-friendly commute. Its advanced matching algorithm and user profiles make it easy to find compatible ride partners, and its focus on safety and trustworthiness creates a reliable community of users. </p>
                <p>Additionally, DecentRide uses blockchain technology for decentralized management and secure transactions, ensuring that users have full control over their data and payments.</p>
              </div>
            </div>
            <div id="btn-wrap">
              <Link to="/signup" class="pill">Sign up</Link>
              <Link to="/login" class="pill">Log in</Link>      
            </div>
        </section>
    </div>
  )
}
