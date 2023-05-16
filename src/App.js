import React from 'react';
import './App.css';
import Home from './App/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './App/Login';
import Signup from './App/Signup';
import DriverPage from './App/DriverPage';
import CustomerPage from './App/CustomerPage';
import RideSharingApp from './App/map';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/login/driverpage' element={<DriverPage/>}/>
        <Route exact path='/login/customerpage' element={<CustomerPage/>}/> 
        <Route exact path='/login/driverpage/map' element={<RideSharingApp/>}/>
      </Routes>
    </div>
    </Router>
  );
}
export default App;