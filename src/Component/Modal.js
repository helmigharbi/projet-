import { useRef, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Modal as BootstrapModal,
} from "react-bootstrap";

const Modal = ({ movie, open, setOpen, setMov }) => {
  const { title, description, rat } = movie;
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const rateRef = useRef(null);
  const [editableMovie, setEditableMovie] = useState({
    title,
    description,
    rat,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "rat") {
      if (value > 5) return;
    }
    setEditableMovie({
      ...editableMovie,
      [name]: value,
    });
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let editedMovie = movie;
    editedMovie.title = editableMovie.title;
    editedMovie.description = editableMovie.description;
    editedMovie.rat = editableMovie.rat;

    setMov((curr) => {
      let movies = curr;
      movies[movie] = editableMovie;
      return (curr = movies);
    });
    setOpen(false);
  };

  return (
    <BootstrapModal show={open}>
      <Form onSubmit={handleSubmit}>
        <BootstrapModal.Header closeButton onHide={handleClose}>
          <BootstrapModal.Title>{movie.title}</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          <FormGroup>
            <Form.Label>Movie Title</Form.Label>
            <Form.Control
              ref={titleRef}
              name="title"
              type="text"
              placeholder="Movie Title"
              value={editableMovie.title}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Movie Description</Form.Label>
            <Form.Control
              rows={3}
              ref={descriptionRef}
              name="description"
              as="textarea"
              placeholder="Movie Description"
              value={editableMovie.description}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Movie Rate</Form.Label>
            <Form.Control
              ref={rateRef}
              name="rat"
              type="number"
              value={editableMovie.rat}
              onChange={handleChange}
            />
          </FormGroup>
        </BootstrapModal.Body>
        <BootstrapModal.Footer>
          <Button variant="light" onClick={handleClose}>
            CANCEL
          </Button>
          <Button type="sumbit">SUBMIT</Button>
        </BootstrapModal.Footer>
      </Form>
    </BootstrapModal>
  );
};

export default Modal;
