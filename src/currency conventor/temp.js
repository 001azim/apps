import React, { useState } from 'react'

export default function Temp() {
    let [fromtemp,setfromtemp]=useState("celcius")
    let[totemp,settotemp]=useState("farenheit")
    let [degree,setdegree]=useState(0)
    let [output,setoutput]=useState(0)

 async function run(){
    
if(fromtemp&&totemp){
    

    if(fromtemp=="celcius" && totemp=="farenheit"){
        alert(1)
        let ans=(degree*9/5)+32
        setoutput(ans)
        console.log(output)
        
            }
    else if (fromtemp=="farenheit"&& totemp=="celcius"){
        alert(2)
        let ans = (degree-32)*5/9
        setoutput(ans)
       

    }
    else{
        alert(3)
           setoutput(degree)
    }

        
}
    

}

  return(
    <>
    <h1>From</h1>
 
    <label> select a currency</label>
    <select onChange={(e)=>setfromtemp(e.target.value)}>
<option>celcius</option>
<option>farenheit</option>

 </select>
 <h1> to</h1>
 <select onChange={(e)=>settotemp(e.target.value)}>
 <option>farenheit</option>
<option>celcius</option>


 </select>
 <input type="number"  onChange={(e)=>setdegree(e.target.value)}/>
 <input type="text" value={output} readOnly/>
 <button onClick={()=>run()}>convert</button>
 </>
  )
}
