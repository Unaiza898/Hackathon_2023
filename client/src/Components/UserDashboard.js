import React, { useState } from 'react'
import '../Style/UserDashboard.css'



function UserDashboard({ familyMembers, setFamilyMembers }) {

    return (
    <div className="dashboard-information">
      <div className="dashboard-welcome"> 
      <div className="text">
          <div className="introduction"> 
              <h5>Welcome to your dashboard, Kara!</h5>
              {/* <img className="avatar" src="./avatar1.png"/> */}
              This dashboard helps you compare your past spending patterns to current inflation rates, job security patterns and cyber security concerns.</div>
          <div className="introduction">
              <h6>Global Snapshot</h6>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </div>
      </div>

            
        <div className="economy-charts"> 
          <img className="charts-economy" src="./charts-economy.png"/>
        </div>

      </div>



      <div className="dashboard-page">
          <div className="card">
            <img className="card-img-top" src="./budget.jpg" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">MANAGE YOUR BUDGET</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/monthlyBudget" className="btn btn-primary">YOUR BUDGET</a>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src="./pigi-bank.jpg" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">SET UP YOUR GOALS</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/financialGoals" className="btn btn-primary">MY FINANCIAL GOALS</a>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src="./spending.jpg" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">EXPLORE YOUR SPENDINGS</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/userExpenses" className="btn btn-primary">EXPENSES HISTORY</a>
            </div>
        </div> 
      </div>

   </div>
    )
}

export default UserDashboard;
