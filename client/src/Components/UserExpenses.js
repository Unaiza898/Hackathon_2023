import React from 'react'
import '../Style/UserExpenses.css'

const UserExpenses = () => {
   return (
      <div className="user-expenses">

         {/* Header */}
         <div className="user-expenses-container">
            <h1 style={{fontSize: '37px'}}> A detailed look at your expenses </h1>
            <p> Here is a summary of your expenses </p>
         </div>
         {/* January Expenses */}
         <div className='january-container' >
            <div className="january-header">
               <div className='jan-head'>
                  <h1 className='jan-title'> January, 2023</h1>
                  <h6 className='date-range'> Change Date Range </h6>
               </div>
               <div>
                  <h5 style={{color: 'red', fontSize: '17px'}}>Total Spent: $7564</h5>
                  <h5 style={{fontSize: '17px'}}>Budgeted: $6450 </h5>
               </div>
            </div>
            <div className="month-container">
               <div class="card1">
                  <h3 className='card-name'>Rent</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $2250</h5>
                     <p class="card-text" style={{ color: '#FFBF00' }}>Spent $2250</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'>Dining Out</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $1000</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1800</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'>Groceries</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $900</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1000</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'>Entertainment</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $500</h5>
                     <p class="card-text" style={{ color: 'green' }}>Spent $450</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'> Transportation </h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $300</h5>
                     <p class="card-text" style={{ color: 'green' }}>Spent $225</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'>Bills & Utilities </h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $1200</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1300</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'>Gifts & Donations </h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $200</h5>
                     <p class="card-text" style={{ color: 'green' }}>Spent $180</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name-add'> Create Your Own Category </h3>
                  <div class="card-body">
                     <p> Add or edit categories here </p>
                     {/* <p class="card-text" style={{ color: 'red' }}>Spent $1300</p> */}
                     <button className='month-edit'>Add/Edit Category</button>
                  </div>
               </div>
            </div>
         </div>


         <div className='january-container' >
            <div className="january-header">
               <div className='jan-head'>
                  <h1 className='jan-title'> December, 2022</h1>
                  <h6 className='date-range'> Change Date Range </h6>
               </div>
               <div>
                  <h5 style={{ color: 'red', fontSize: '17px' }}>Total Spent: $7564</h5>
                  <h5 style={{ fontSize: '17px' }}>Budgeted: $6450 </h5>
               </div>
            </div>
            <div className="month-container">
               <div class="card1">
                  <h3 className='card-name'>Rent</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $2250</h5>
                     <p class="card-text" style={{ color: '#FFBF00' }}>Spent $2250</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'>Dining Out</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $1000</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1800</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'>Groceries</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $900</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1000</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'>Entertainment</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $500</h5>
                     <p class="card-text" style={{ color: 'green' }}>Spent $450</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'> Transportation </h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $300</h5>
                     <p class="card-text" style={{ color: 'green' }}>Spent $225</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'>Bills & Utilities </h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $1200</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1300</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'>Gifts & Donations </h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $200</h5>
                     <p class="card-text" style={{ color: 'green' }}>Spent $180</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name-add'> Create Your Own Category </h3>
                  <div class="card-body">
                     <p> Add or edit categories here </p>
                     {/* <p class="card-text" style={{ color: 'red' }}>Spent $1300</p> */}
                     <button className='month-edit'>Add/Edit Category</button>
                  </div>
               </div>
            </div>
         </div>


         <div className='january-container' >
            <div className="january-header">
               <div className='jan-head'>
                  <h1 className='jan-title'> January, 2023</h1>
                  <h6 className='date-range'> Change Date Range </h6>
               </div>
               <div>
                  <h5 style={{ color: 'red', fontSize: '17px' }}>Total Spent: $7564</h5>
                  <h5 style={{ fontSize: '17px' }}>Budgeted: $6450 </h5>
               </div>
            </div>
            <div className="month-container">
               <div class="card1">
                  <h3 className='card-name'>Rent</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $2250</h5>
                     <p class="card-text" style={{ color: '#FFBF00' }}>Spent $2250</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'>Dining Out</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $1000</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1800</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'>Groceries</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $900</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1000</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'>Entertainment</h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $500</h5>
                     <p class="card-text" style={{ color: 'green' }}>Spent $450</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'> Transportation </h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $300</h5>
                     <p class="card-text" style={{ color: 'green' }}>Spent $225</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'>Bills & Utilities </h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $1200</h5>
                     <p class="card-text" style={{ color: 'red' }}>Spent $1300</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name'>Gifts & Donations </h3>
                  <div class="card-body">
                     <h5 class="card-title">Budget $200</h5>
                     <p class="card-text" style={{ color: 'green' }}>Spent $180</p>
                  </div>
               </div>
               <div class="card1">
                  <h3 className='card-name-add'> Create Your Own Category </h3>
                  <div class="card-body">
                     <p> Add or edit categories here </p>
                     {/* <p class="card-text" style={{ color: 'red' }}>Spent $1300</p> */}
                     <button className='month-edit'>Add/Edit Category</button>
                  </div>
               </div>
            </div>
         </div>



         
         


      </div>
   )
}

export default UserExpenses;