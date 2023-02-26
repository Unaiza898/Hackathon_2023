import React from "react";
import "../Style/Monthly.css";
import Charts from "./chart.js";
function MonthlyBudget() {
  return (
    <div>
      <div className="card">
        <h4>Manage your Budget</h4>
        <p>
          {" "}
          Managing your personal finances can be challenging, but it's an essential part of achieving financial stability and independence. Are you tired of living paycheck to paycheck, struggling with debt, or feeling like you can't make ends meet? If so, it's time to take control of your finances and start managing your money wisely, with quick and clear explanations to everyone!
By creating a budget, tracking your expenses, and setting financial goals, you can gain a better understanding of your finances and make informed decisions about your money. Whether you're saving for a down payment on a home, paying off student loans, or planning for retirement, managing your personal finances is the first step toward achieving your financial dreams.{" "}
        </p>
      </div>

        <div className="chartcard">
   
            <h3>January 2023</h3>
            <a className="date" href="">
              {" "}
              change dates range
            </a>

         
          </div>
          <Charts />
         
 
</div>

  );
}

export default MonthlyBudget;
