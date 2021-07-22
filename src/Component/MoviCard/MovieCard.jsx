import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import "./MoviCard.css";
function MovieCard({ movie, onDelete, onEdit, index }) {
  let start = "★";
  return (
    <Card
      className="MoviCard"
      data-tip
      data-for={movie.title}
      style={{ minWidth: "340px" }}
    >
      <Card.Img variant="top" src={movie.posterUrl} alt={movie.title} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
      </Card.Body>
      <h3 style={{ color: "#ffd700" }}>{start.repeat(movie.rat)}</h3>
      <Button variant="primary" href={"/Trailer/" + movie.id}>
        trailer
      </Button>
      <ReactTooltip id={movie.title}>
        <img src={movie.gif} alt={movie.title} style={{ height: "100px" }} />
      </ReactTooltip>
      <div className="btns-action">
        <Button variant="light" onClick={() => onEdit(index)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => onDelete(movie.id)}>
          Remove
        </Button>
      </div>
    </Card>
  );
}
export default MovieCard;
