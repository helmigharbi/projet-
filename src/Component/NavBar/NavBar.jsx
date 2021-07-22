import { InputGroup, FormControl, Nav, Navbar, Form } from "react-bootstrap";
import React from "react";
import ReactStars from "react-rating-stars-component";
function NavBar({ handleShow, FiltreTitle, FiltreRate }) {
    const ratingChanged = (newRating) => {
        FiltreRate(newRating);
    };
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            fixed="top"
        >
            <Navbar.Brand onClick={handleShow}>Add New Movie</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
                <Form inline style={{ textAlign: "center" }}>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <InputGroup
                        size="sm"
                        onChange={FiltreTitle}
                        style={{ margin: "8px" }}
                    >
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">
                                Filtre by title :
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavBar;
