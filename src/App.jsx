import (BrowserRouter as Router, Route, Routes, NavLink) from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';
import {ChessList} from './ChessList';

export const App=()=> {
  return (
    <Router>
      <nav className="navbar narbar-exprand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className="nav-link" to="/">Sakkozók</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path= "/" element = (<ChessList />) />
      </Routes>      
      <Router/>
  );
}

