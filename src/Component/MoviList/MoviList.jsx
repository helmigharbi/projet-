import React from "react";
import MovieCard from "../MoviCard/MovieCard";
import "./MoviList.css";
function MovieList({ movie, filtertitle, filtrerate, onDelete, onEdit }) {
  console.log(movie);
  return (
    <div className="MoviList">
      {movie
        .filter(
          (element) =>
            element.rat >= filtrerate &&
            element.title.toLowerCase().includes(filtertitle)
        )
        .map((element, index) => (
          <MovieCard
            movie={element}
            key={index}
            index={index}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
    </div>
  );
}
export default MovieList;
