import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import LoginComponent from "./app/components/Login";
import RegisterComponent from "./app/components/Register";
import HomeComponent from "./app/components/Home";
import ProfileComponent from "./app/components/Profile";
import { logout } from "./app/actions/auth";



const App = () => {

const { user: currentUser } = useSelector((state) => state.auth);



const dispatch = useDispatch();



const logOut = () => {
  dispatch(logout());
};


return (
  <BrowserRouter>
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to = {"/"} className="navbar-brand">
          Scotts Tots
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to = {"/home"} className="nav-link">
              Home
            </Link>
          </li>
        </div>
        {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Register
                </Link>
              </li>
            </div>
          )}
      </nav>
      
      <div className="container mt-3">
            <Routes>
              <Route exact path ="/" element = { <HomeComponent/>}/>
              <Route exact path ="/home" element = { <HomeComponent/>}/>
              <Route exact path = "/login" element ={<LoginComponent/>}/>
              <Route exact path = "/register" element = {<RegisterComponent/>}/>
              <Route exact path = "/profile" element ={<ProfileComponent/>}/>
            </Routes>
      </div>
    </div>
  </BrowserRouter>
);
};


export default App;
