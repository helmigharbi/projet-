import movies from "../ListMovies/Movies";
import Description from "../Description/Description";
import React from "react";
import { Container, Row } from "react-bootstrap";
export default function Trailer({ match }) {
    const movie = movies().find((movi) => movi.id === Number(match.params.id));
    return (
        <div style={{ marginTop: "55px" }}>
            <div
                style={{
                    backgroundImage: `url(${movie.posterUrl})`,
                    filter: "blur(5px)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    position: "fixed",
                    top: "60px",
                    left: "0px",
                    height: "100%",
                    width: "100%",
                }}
            ></div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    position: "absolute",
                    top: "65px",
                    width: "100%",
                }}
            >
                <Container>
                    <Row>
                        <div
                            style={{
                                width: "23%",
                                maxWidth: "90%",
                                minWidth: "347px",
                                flexGrow: "1",
                                paddingGight: "15px",
                                paddingLeft: "15px",
                            }}
                        >
                            <img
                                src={movie.posterUrl}
                                alt={movie.title}
                                style={{
                                    width: "100%",
                                    minWidth: "330px",
                                    marginTop: "5px",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                width: "63%",
                                maxWidth: "90%",
                                minWidth: "347px",
                                flexGrow: "1",
                                paddingGight: "15px",
                                paddingLeft: "15px",
                            }}
                        >
                            <div>
                                <iframe
                                    style={{
                                        marginTop: "5px",
                                        minWidth: "330px",
                                        minHeight: "340px",
                                        width: "100%",
                                    }}
                                    src={movie.trailerUrl}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                <Description movie={movie} />
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
