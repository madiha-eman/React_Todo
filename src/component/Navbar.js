import React from 'react'
import './style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Register from '../pages/Register';
import Product from '../pages/Product';

const Navbar = () => {
    return (

       
            <Router>
              <nav  className='link1'>
        <ul>
          <li >
        <Link className='link' to='/'>Home</Link>
        </li>
        <li>
        <Link className='link' to='/login'>Login</Link>
        </li>
        <li>
        <Link className='link' to='/cart'>Cart</Link>
        </li>
        <li>
        <Link className='link' to='/register'>Register</Link>
        </li>
        <li>
        <Link className='link' to='/Product'>Product</Link>
        </li>
        </ul>
        </nav>
        <Switch>
          <Route path='/Login'><Login /></Route>
          <Route path='/Cart'><Cart /></Route>
          <Route path='/Register'><Register /></Route>
          <Route path='/Product'><Product /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
      </Router>
       
       
    )
}

export default Navbar
