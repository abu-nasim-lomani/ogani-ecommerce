import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./component/Home/Home";

export const  UserContext=createContext();
function App() {
  
  const [loggedInUser, setLoggedInUser]=useState([]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Home/>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
