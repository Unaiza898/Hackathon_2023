// import './App.css';
import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import About from "./Components/About"
import UserDashboard from "./Components/UserDashboard"
import UserExpenses from './Components/UserExpenses'
<<<<<<< HEAD
import Calculator from './Components/Calculator'
=======
import FinancialGoals from './Components/FinancialGoals';
>>>>>>> olivia-user-expenses


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
        <Route path='/userExpenses' element={<UserExpenses />}/>
<<<<<<< HEAD
        <Route path='/Calculator' element={<Calculator />}/>
=======
        <Route path='/financialGoals'element={<FinancialGoals />}/>
>>>>>>> olivia-user-expenses
      </Routes>
      </div>
    
   
     
  );
};

export default App;
