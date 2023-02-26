import React from 'react'
import '../Style/UserExpenses.css'

const UserExpenses = () => {
   return (
      <div className="user-expenses">

         {/* Header */}
         <div className="user-expenses-container">
            <h1> A detailed look at your expenses </h1>
            <p> Here is a summary of your expenses </p>
         </div>
         {/* January Expenses */}
         <div className='january-container' >
            <div className="january-header">
               <h1> January, 2023</h1>
               <button className='month-edit'>Add/Edit Category</button>
            </div>
            <div className="dashboard-page">
               <div class="card1">
                  <h3>Rent</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $2250</h5>
                     <p class="card-text" style={{ color: '#FFBF00' }}>Spent $2250</p>
                  </div>
               </div>
               <div class="card1">
                  <h3>Dining Out</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $1000</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1800</p>
                  </div>
               </div>
               <div class="card1">
                  <h3>Groceries</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $900</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1000</p>
                  </div>
               </div>
               <div class="card1">
                  <h3>Entertainment</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $500</h5>
                     <p class="card-text" style={{ color: 'green' }}>Spent $450</p>
                  </div>
               </div>
               <div class="card1">
                  <h3> Transportation </h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $300</h5>
                     <p class="card-text" style={{ color: 'green' }}>Spent $225</p>
                  </div>
               </div>
               <div class="card1">
                  <h3>Bills & Utilities </h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $1200</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1300</p>
                  </div>
               </div>
            </div>
         </div>

         <div className='january-container' >
            <div className="january-header">
               <h1> December, 2022 </h1>
               <button className='month-edit'>Add/Edit Category</button>
            </div>
            <div className="dashboard-page">
               <div class="card1">
                  <h3>Rent</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $2250</h5>
                     <p class="card-text" style={{ color: '#FFBF00' }}>Spent $2250</p>
                  </div>
               </div>
               <div class="card1">
                  <h3>Dining Out</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $1000</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1800</p>
                  </div>
               </div>
               <div class="card1">
                  <h3>Groceries</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $900</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1000</p>
                  </div>
               </div>
               <div class="card1">
                  <h3>Entertainment</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $500</h5>
                     <p class="card-text" style={{ color: 'green' }}>Spent $450</p>
                  </div>
               </div>
               <div class="card1">
                  <h3> Transportation </h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $300</h5>
                     <p class="card-text" style={{ color: 'green' }}>Spent $225</p>
                  </div>
               </div>
               <div class="card1">
                  <h3>Bills & Utilities </h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $1200</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1300</p>
                  </div>
               </div>
            </div>
         </div>

         <div className='january-container' >
            <div className="january-header">
               <h1> November, 2022 </h1>
               <button className='month-edit'>Add/Edit Category</button>
            </div>
            <div className="dashboard-page">
               <div class="card1">
                  <h3>Rent</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $2250</h5>
                     <p class="card-text" style={{ color: '#FFBF00' }}>Spent $2250</p>
                  </div>
               </div>
               <div class="card1">
                  <h3>Dining Out</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $1000</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1800</p>
                  </div>
               </div>
               <div class="card1">
                  <h3>Groceries</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $900</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1000</p>
                  </div>
               </div>
               <div class="card1">
                  <h3>Entertainment</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $500</h5>
                     <p class="card-text" style={{ color: 'green' }}>Spent $450</p>
                  </div>
               </div>
               <div class="card1">
                  <h3> Transportation </h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $300</h5>
                     <p class="card-text" style={{ color: 'green' }}>Spent $225</p>
                  </div>
               </div>
               <div class="card1">
                  <h3>Bills & Utilities </h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $1200</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1300</p>
                  </div>
               </div>
            </div>
         </div>


      </div>
   )
}

export default UserExpenses;