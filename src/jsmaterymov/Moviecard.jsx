import React from 'react'

function Moviecard({item}) {
  return (
    <div className='container' key={item.imdbID}>
    <div className='movie'>
      <div>
      <p>{item.Year}</p>
    </div>
    <div className='image'>
      <img src={item.Poster != "N/A" ? item.Poster : "https://via.placeholder.com/400"} alt={`Poster for ${item.Title}`} />
    </div>

    <div>
      <span> {item.Type}</span>
      <h3> {item.Title}</h3>
    </div>
  </div>
  </div>
  )
}

export default Moviecard