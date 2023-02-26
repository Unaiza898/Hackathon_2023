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
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable{" "}
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
