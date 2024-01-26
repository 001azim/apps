import './App.css'
import { useState } from "react"
import Movie from './jsmaterymov/movie';


function App() {
let [items,setitems]=useState([
    {
     id: 1,
     checked:true,
     item:"read"   
    },
    {
        id: 2,
        checked:false,
        item:"listen"   
       },
       {
        id: 3,
        checked:true,
        item:"write"   
       },
   
   
])
let [newitems,setnewitems]=useState('')

  return (
<Movie/>
  )
 
}

export default App;
