import React, { useState } from 'react'
import Map from './map'
export default function DriverPage() {
  return (
    <div id="container">
      <nav id="navbar">
        <a href="../"><img src="../images/rider-big.png" alt="rider-logo" title="Rider | Live, Ride, Share"/></a>
        <input type="checkbox" id="burger-toggle"/>
        <label id="burger" for="burger-toggle">
          <div></div>
        </label>
        <ul>
          <li>
            <a href="../" class="shortcut">Home</a>
          </li>
          <li>
            <a href="./create-ride-offer.html" class="shortcut">Offer Ride</a>
          </li>
          <li>
            <a href="./signup.html" class="shortcut">Sign Up</a>
          </li>
          <li>
            <a href="./login.html" class="shortcut">Log In</a>
          </li>
        </ul>
      </nav>
      <section class="spread">
        <h2>Available Ride(s)</h2>
        <ul id="rides">
          <li class="ride">
            <div>
              <ul>
                <li><strong>Departure: </strong>Lagos</li>
                <li><strong>Destination: </strong>Ikeja</li>
                <li><strong>Rider: </strong><a href="./rider-profile.html" class="shortcut">Kasmi Kleva</a></li>
              </ul>
              <button onClick={Map} class="pill">Rider Details</button>
            </div>
          </li>
          <li class="ride">
            <div>
              <ul>
                <li><strong>Departure: </strong>Lagos</li>
                <li><strong>Destination: </strong>Ikeja</li>
                <li><strong>Date: </strong>2018-06-29</li>
                <li><strong>Time: </strong>06:00 pm</li>
                <li><strong>Rider: </strong><a href="./rider-profile.html" class="shortcut">Kasmi Kleva</a></li>
              </ul>
              <a href="./ride-details.html" class="pill">ride details</a>
            </div>
          </li>
          <li class="ride">
            <div>
              <ul>
                <li><strong>Departure: </strong>Lagos</li>
                <li><strong>Destination: </strong>Ikeja</li>
                <li><strong>Date: </strong>2018-06-29</li>
                <li><strong>Time: </strong>06:00 pm</li>
                <li><strong>Rider: </strong><a href="./rider-profile.html" class="shortcut">Kasmi Kleva</a></li>
              </ul>
              <a href="./ride-details.html" class="pill">ride details</a>
            </div>
          </li>
          <li class="ride">
            <div>
              <ul>
                <li><strong>Departure: </strong>Lagos</li>
                <li><strong>Destination: </strong>Ikeja</li>
                <li><strong>Date: </strong>2018-06-29</li>
                <li><strong>Time: </strong>06:00 pm</li>
                <li><strong>Rider: </strong><a href="./rider-profile.html" class="shortcut">Kasmi Kleva</a></li>
              </ul>
              <a href="./ride-details.html" class="pill">ride details</a>
            </div>
          </li>
          <li class="ride">
            <div>
              <ul>
                <li><strong>Departure: </strong>Lagos</li>
                <li><strong>Destination: </strong>Ikeja</li>
                <li><strong>Date: </strong>2018-06-29</li>
                <li><strong>Time: </strong>06:00 pm</li>
                <li><strong>Rider: </strong><a href="./rider-profile.html" class="shortcut">Kasmi Kleva</a></li>
              </ul>
              <a href="./ride-details.html" class="pill">ride details</a>
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}