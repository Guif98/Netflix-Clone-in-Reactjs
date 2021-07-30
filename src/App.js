import React from 'react';
import Navbar from './Navbar';
import MovieList from './MovieList';
import Category from './Category';
import {data} from './categories';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      {data.map((category, index) => {
          return (
          <Category>{category}</Category>,
          <MovieList></MovieList>
      )})}
    </div>
  )
}

export default App