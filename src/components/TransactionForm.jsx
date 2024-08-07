import React from 'react'
import '../styles/TransactionFormStyles.css'

const TransactionForm = () => {
  return (
    <div className='transaction-form-container'>
      <p style={{width:'160px'}}>Enter transaction UUID: </p>
      <input id='transaction-uuid-search-box' placeholder='Transaction UUID...' type="text" name="transactionUuidSearchBox" />
      <button className='search-button'>Search</button>
    </div>
  )
}

export default TransactionForm