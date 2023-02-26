// import './App.css';
import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import About from "./Components/About"
import UserDashboard from "./Components/UserDashboard"
<<<<<<< HEAD
import Information from "./Components/Information"
=======
import MonthlyBudget from "./Components/MonthlyBudget"
>>>>>>> 62867285b8109feaeeb026439f0b577f4aaf6a8f


function App() {
    const[familyMembers, setFamilyMembers]=useState([])
    const[loggedIn, setLoggedIn]=useState(false)
  return (
    <div className='page-container'>
    
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path="/About" element={<About />} />
        <Route path="/userDashboard"  element={<UserDashboard familyMembers={familyMembers} setFamilyMembers={setFamilyMembers} />} />
<<<<<<< HEAD
        <Route path='/information' element={<Information />} />
=======
        <Route path="/monthlyBudget" element={<MonthlyBudget/>} />
>>>>>>> 62867285b8109feaeeb026439f0b577f4aaf6a8f
      </Routes>
      </div>
    
   
     
  );
};

export default App;
