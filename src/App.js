import React from 'react'

const App = ()=>{
  return(
    <div className= 'container'>
      <h1> Increment/Decrement Counter </h1>
      <h4>Using React n Redux</h4>

      <div className='quantity'>
        <a className='quantity_minus' title='Decrement' href='#'><span>-</span></a>
        <input name='quantity' type='text' className='quantity_input'  />
        <a className='quantity_plus' title='increment' href='#'><span>+</span></a>
      </div>
    </div>
  )
}
export default App