import React from 'react';
import Navbar from './Navbar';
import MovieList from './MovieList';
import Header from './Header';
import Category from './Category';
import {categories} from './categories';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
      <Header header="Favoritos da crítica" description="Aprovados por quem entende de filme. Esses dramas policiais, comédias românticas, suspenses e documentários premiados estão entre os queridinhos dos críticos."></Header>
      {categories.map((item, index) => {
        console.log(item)
          return (
          <Category cat={item}></Category>,
          <MovieList></MovieList>
      )})}
      </main>
    </div>
  )
}

export default App