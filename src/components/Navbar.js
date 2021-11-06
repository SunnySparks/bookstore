import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import user from '../user.png';

const Navbar = () => (
  <nav className="navBar navbar-expand-lg p-4 border border-bottom bg-white">
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6 p-3">
                <span className="blu monB titl">Bookstore CMS</span>
              </div>
              <div className="col-sm-2 monR linkNav align-padding">
                <Link to="/">Book</Link>
              </div>
              <div className="col-sm-2 monR linkNav align-padding">
                <Link to="/categories">Categories</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 justify-content-end">
            <div className="circle-border pt-3">
              <img src={user} alt="user" className="userImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;

// <Link to="/">Book</Link>
// <Link to="/categories">Categories</Link>
