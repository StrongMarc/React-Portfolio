import React, {useState, useContext} from 'react';
// import Movie from './Movie';


const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 23124
    },
    {
      name: 'Game of Thrones',
      price: '$10',
      id: 2566124
    },
    {
      name: 'Inception',
      price: '$10',
      id: 23524
    }
  ]);

  // const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
    {movies.map(movie => (
     <li>{movie.name}</li>
    ))}
    </div>
  )
}

export default MovieList;