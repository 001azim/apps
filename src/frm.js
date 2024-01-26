import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DEF() {
    let [sdata,setsdata]=useState([])
    let [loading,setloading]=useState(false)
    const API_DATA="https://jsonplaceholder.typicode.com/posts"

    useEffect(()=>{
        const getdata =async ()=>{
            setloading(true)
            try{
        let response=  await axios.get(API_DATA)
      if(response.status!=200)throw Error("Data not found")
console.log(response)
setsdata(response.data)
setloading(false)
               }  catch (error){
                console.log(error)

               } }
    
    
               setTimeout(() => {
                (async ()=> await  getdata())()
              
            }, 5000)
                    },[])

    

  return (
    <>
      {loading ? (
        <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" alt="Loading..." />
      ) : (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>userId</th>
            </tr>
          </thead>
          <tbody>
            {sdata.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
export default DEF