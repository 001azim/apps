import React, { useState } from 'react'
import { namelist } from './test'


function Searchlist() {

 

const [searchitem,setitem]=useState('')




  return (<>
   
  <div>Searchlist</div>
  <label htmlFor='search'>search</label>
    <input type='text' id='search' required  role='searchbox'  placeholder='Enter customer name' onChange={(e)=>setitem(e.target.value)}/>




{

<table>
<thead>
  <tr>
    <th> idAccount</th>
    <th> country</th>
    <th> gender</th>
    <th> name</th>
  </tr>
</thead>
<tbody>

{namelist.filter((item)=>{return item.name.toLowerCase().includes(searchitem)}).map((item)=> <tr>
<td>{item.idAccount}</td>
<td>{item.country}</td>
<td>{item.gender}</td>
<td>{item.name}</td>


  </tr>)}
</tbody>

</table>

}

 

</>
  )

}

export default Searchlist




