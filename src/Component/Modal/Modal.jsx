import React from "react";
import ReactStars from "react-rating-stars-component";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
function ModalList({
    show,
    handleClose,
    Title,
    Description,
    PosterUrl,
    Gif,
    Rate,
    AddMovie,
}) {
    const rating = (newRating) => {
        Rate(newRating);
    };
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup size="sm" className="mb-3" onChange={Title}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">
                            Title :
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>
                <br />
                <InputGroup size="sm" className="mb-3" onChange={Description}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">
                            Description :
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>
                <br />
                <InputGroup size="sm" className="mb-3" onChange={PosterUrl}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">
                            PosterUrl :
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>
                <br />
                <InputGroup size="sm" className="mb-3" onChange={Gif}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">
                            GifUrl :
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>
                <br />
                <ReactStars
                    count={5}
                    onChange={rating}
                    size={24}
                    activeColor="#ffd700"
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={AddMovie}>
                    Add Movie
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalList;
