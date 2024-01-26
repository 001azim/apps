import { useState,useEffect  } from "react"
import { Button } from "react-bootstrap"


function Timer(){
let [starttimer,settimerstart]=useState(true)
    let [timer,settimer]=useState(0)

    useEffect(()=>{
        if(starttimer){
            settimer(timer+1)
        }
       

    },[timer,starttimer])



    return(
<>

<code style={{marginTop:'300px'}}> {timer}</code>
<Button varient="primary" onClick={()=>settimerstart(!starttimer)}> {starttimer?'stop':'start'}</Button> {' '}
{/* <Button varient="primary" onClick={()=>settimerstart(false)} > stop</Button> */}
<Button varient="primary" onClick={async ()=> { await settimerstart(false);settimer(0)}}> reset </Button>
{/* <Button varient="primary" onClick={()=>settimerstart(true)} > start</Button> */}
</>  

)



}
export default Timer