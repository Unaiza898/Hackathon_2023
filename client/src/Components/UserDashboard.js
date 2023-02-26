import React, {useState} from 'react'
import '../Style/UserDashboard.css'


function UserDashboard({familyMembers, setFamilyMembers}) {

    return (
      <div className="dashboard-information">
      <div className="dashboard-welcome"> 
          <h3>Welcome to your dashboard, Kara!</h3>
          {/* <img className="avatar" src="./avatar1.png"/> */}
          <div>This dashboard helps you compare your past spending patterns to current inflation rates, job security patterns and cyber security concerns.</div>
      </div>
      <div className="economy-info">
          <div className=""></div>
          <div className=""></div>
      </div>
      <div className="dashboard-page">
          <div class="card">
            <img class="card-img-top" src="./budget.jpg" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">MANAGE YOUR BUDGET</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/monthlyBudget" class="btn btn-primary">YOUR BUDGET</a>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src="./pigi-bank.jpg" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">SET UP YOUR GOALS</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">MY FINANCIAL GOALS</a>
            </div>
        </div>
        <div class="card">
            <img class="card-img-top" src="./spending.jpg" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">EXPLORE YOUR SPENDINGS</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="" class="btn btn-primary">EXPENSES HISTORY</a>
            </div>
        </div>
      </div>
      </div>
    )
}

export default UserDashboard