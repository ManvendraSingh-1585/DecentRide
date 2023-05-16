import React from 'react';
import {Link} from 'react-router-dom';

export default function Signup() {
  return (
    <div id="container">
      <nav id="navbar">
        <Link to="/"><img src="/images/logo.png" alt="logo" title="DecentRIDE | Cool with CarPool" /></Link>
        <input type="checkbox" id="burger-toggle" />
        <label id="burger" for="burger-toggle">
          <div></div>
        </label>
        <ul>
          <li>
            <Link to="/start" class="shortcut">Home</Link>
          </li>
          <li>
            <Link to="/about" class="shortcut">about</Link>
          </li>
          <li>
            <Link to="/login" class="shortcut">Profile</Link>
            {/* <Map/> */}
          </li>
        </ul>
      </nav>
      <section class="spread">
        <h2>Request for Driver</h2>
        <form action="#" method="POST">
          <input type="text" name="firstname" placeholder="Start-Point" required />
          <input type="email" name="mail" placeholder="Destination" required />
          <input type="submit" value="Enter" class="pill" />
        </form>
      </section>
    </div>
  )
}
