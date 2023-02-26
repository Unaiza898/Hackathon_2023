import React from "react";
import '../Style/FinancialGoals.css'

const FinancialGoals = () => {
   return (
      <div className="financial-goals">
         <div className="financial-header">
            <h1> Set up your goals </h1>
            <p> Let's help you set up your goals</p>
         </div>
         <div className="financial-main-container">
            <div className="main-header">
               <h1>Choose your financial goal below or create your own</h1>
            </div>
            <div className="main-body">
               <div className="item1">
                  <h3 className="circle"> 1 </h3>
                  <p> Save for a home loan! </p>
                  <div>
                     <button className="item-button"></button>
                  </div>
               </div>
               <div className="item1">
                  <h3 className="circle"> 2 </h3>
                  <p> Build a robust retirement savings </p>
                  <div>
                     <button className="item-button"></button>
                  </div>
               </div>
               <div className="item1">
                  <h3 className="circle"> 3 </h3>
                  <p> Create a custom financial goal </p>
                  <div>
                     <button className="item-button"></button>
                  </div>
               </div>
               <button className="finance-button">Proceed with selected options</button>
            </div>
         </div>
      </div>
   )
}

export default FinancialGoals;