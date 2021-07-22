import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
function ControlledCarousel({ movie }) {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            style={{ maxHeight: "475px", marginTop: "47px" }}
        >
            {movie.map((element, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={element.gif}
                        alt="First slide"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
export default ControlledCarousel;
