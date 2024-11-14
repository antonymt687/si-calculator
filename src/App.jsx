import Button from '@mui/material/Button';
import './App.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {

  const [amount, SetAmount] = useState(0)
  const [year, SetYear] = useState(0)
  const [rate, SetRate] = useState(0)

  const [interest, SetInterest] = useState(0)

  const calculate=(e)=>{
    const output=(amount*year*rate/100)
    console.log(output);
    SetInterest(output)
  }
  const reset=(e)=>{
    SetAmount(0)
    SetYear(0)
    SetRate(0)
    SetInterest(0)
  }

  return (
    <>
      <div className="App">

        <div className="container">
          <div className="header">
            <h1>Simple-Interest-Calculator</h1>
            <p>Calculate your simple interest with us</p>
          </div>

          <div className="total">
            <h2>&#8377; {interest}</h2>
            <p>Your Total Interest</p>
          </div>

          <div className="form">
            <form className="input">
              <TextField id="outlined-basic" label="Amount" variant="outlined" value={amount||""} onChange={
                (e)=>SetAmount(e.target.value)} />
              <TextField id="filled-basic" label="Year" variant="filled" value={year||""} onChange={
                (e)=>SetYear(e.target.value)}/>
              <TextField id="standard-basic" label="Rate Of Interest" variant="standard" value={rate||""} onChange={
                (e)=>SetRate(e.target.value)}/>
            </form>
          </div>

          <div className="button">
            <Button variant="contained" color="success" onClick={e=>calculate(e)}>
              Calculate
            </Button>
            <Button variant="outlined" color="error" onClick={e=>reset(e)}>
              Reset
            </Button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
