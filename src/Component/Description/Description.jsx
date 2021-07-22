import { Button } from "react-bootstrap";
export default function Description1({ movie }) {
    return (
        <>
            <p
                style={{
                    minWidth: "330px",
                    width: "100%",
                    padding: "5px",
                    backgroundColor: "rgba(0,0,0, 0.4)",
                    color: "white",
                }}
            >
                {movie.description}
            </p>
            <Button variant="dark" href="/">
                Home
            </Button>
        </>
    );
}
