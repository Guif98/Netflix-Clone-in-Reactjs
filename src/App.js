import React from 'react';
import MovieList from './MovieList';
import {data} from './categories';


function App() {
  return (
    <div>
      {data.map((category, index) => {
          return (
          <h2 key={index}>{category}</h2>,
          <MovieList></MovieList>
      )})}
    </div>
  )
}

export default App