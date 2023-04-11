import React, { useState } from 'react';
import data from './data';
function App() {

  const [textArray, setTextArray] = useState([]);
  const [amount, setAmount] = useState(0);
  
  const handleSubmit = (event) => {
    let index = 0;
    if (amount <= 0) {
      index = 1;
    } else if (amount > 8) {
      index = 8;
    } else {
      index = amount; 
    }
    const array = data.slice(0,index);
    setTextArray(array);
    event.preventDefault();
  }

  return (
  <section className='section-center'>
    <h3>tired of boring lorem ipsum?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>paragraphs:</label>
      <input 
        type='number' 
        name='amount' 
        id='amount'
        value={amount}
        onChange={(event) => {setAmount(event.target.value)}}
      ></input>
      <button className='btn' type='submit'>generate</button>
    </form>
    <article className='lorem-text'>
      {textArray.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </article>
  </section>
    )
}

export default App;
