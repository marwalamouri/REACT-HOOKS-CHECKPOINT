import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import data from "./data";
import AddMovie from "./Components/AddMovie";
import Filter from "./Components/Filter";

const App = () => {
  const [movies, setMovies] = useState(data);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  const moviesHandler = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div>
      <div className="d-flex mt-2">
        <Filter setSearch={setSearch} setRating={setRating} />
        <AddMovie moviesHandler={moviesHandler} />
      </div>
      <MovieList
        data={movies.filter(
          (el) =>
            el.title.trim().toLocaleLowerCase().includes(search) &&
            el.rating >= rating
        )}
      />
    </div>
  );
};

export default App;
