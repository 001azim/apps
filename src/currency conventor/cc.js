import React, { useState } from 'react'

function XCoventor() {

    const BASE_URL = 'https://api.exchangeratesapi.io/latest' 
let [fromcurrency,setfromcurrency]=useState("USD")
let [tocurrency,settocurrency]=useState("USD")
let [enteredvalue,setenteredvalue]=useState(0)
let [getvalue,setgetvalue]=useState(0)

function run(){
    console.log(fromcurrency)
    console.log(tocurrency)
    console.log(enteredvalue)
}


  return (
    <>
  <h1>From</h1>
     <label> select a currency</label>
  <select onChange={(e)=> setfromcurrency(e.target.value)}>
<option>INR</option>
<option>USD</option>
<option>DINAR</option>
<option>EURO</option>
  </select>

  <h1>to</h1>
     <label> select a currency</label>
  <select onChange={(e)=> settocurrency(e.target.value)}>
  <option>USD</option>
<option>INR</option>
<option>DINAR</option>
<option>EURO</option>
  </select>
  {console.log(fromcurrency)}
  {console.log(tocurrency)}
  <h1> enter amount</h1>
  <input type="number" onChange={(e)=>setenteredvalue(e.target.value)}/>
  {console.log(enteredvalue)}
  <input type='number' value={getvalue} readOnly/>
  <button onClick={()=>{run()}}>Convert</button>
    </>

   
  )
}

export default XCoventor