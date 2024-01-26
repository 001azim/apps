import React, { useState, useEffect } from 'react';
import Moviecard from './Moviecard';
function Movie() {
    const [searched,setsearch]=useState("")

  const [response, setresponse] = useState([]);

  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=bf24d2a1";

  const search = async (title) => {
  
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setresponse(data.Search);
  };
  useEffect(()=>{
    search("batman")
  },[])

  return (
    <>
      {console.log(response)}
      <h1>movie hub</h1>

      <input type="text" value={searched} onChange={(e) => setsearch(e.target.value)} />
      <button onClick={() => search(searched)}>search</button>

{
    response.length > 0 ? (<div>{response.map((item)=>(<Moviecard item={item}/>))}</div>) :(<div>
        <h2>no movies found</h2>
    </div>)
}
    </>
  );
}

export default Movie;
