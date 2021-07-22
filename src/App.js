import React, { useState } from "react";
import "./App.css";
import MovieList from "./Component/MoviList/MoviList";
import Movies from "./Component/ListMovies/Movies";
import NavBar from "./Component/NavBar/NavBar";
import ModalList from "./Component/Modal/Modal";
import ControlledCarousel from "./Component/Carousel/Carousel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Trailre from "./Component/Trailer/Trailer";
import Modal from "./Component/Modal";
function App() {
  const [mov, setMov] = useState(Movies);
  const [titleadd, setTitleadd] = useState("");
  const [descriptionadd, setDescriptionadd] = useState("");
  const [posterUrladd, setPosterUrladd] = useState("");
  const [gifadd, setGifadd] = useState("");
  const [rateadd, setRateadd] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [filtertitle, setFiltertitle] = useState("");
  const [filtrerate, setFiltreRate] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMovie, setDialogMovie] = useState(null);
  function Title(et) {
    setTitleadd(et.target.value);
  }
  function Description(ed) {
    setDescriptionadd(ed.target.value);
  }
  function PosterUrl(ep) {
    setPosterUrladd(ep.target.value);
  }
  function Gif(eg) {
    setGifadd(eg.target.value);
  }
  function Rate(er) {
    setRateadd(er);
  }
  function AddMovie() {
    let newmovies = {
      title: titleadd,
      description: descriptionadd,
      posterUrl: posterUrladd,
      gif: gifadd,
      rat: rateadd,
    };
    setMov([...mov, newmovies]);
    setShow(false);
  }
  function FiltreTitle(ef) {
    setFiltertitle(ef.target.value);
  }
  function FiltreRate(efhh) {
    setFiltreRate(efhh);
  }
  function onDelete(id) {
    const newMovs = mov.filter((movie) => movie.id !== id);
    setMov(newMovs);
  }
  function onEdit(index) {
    setOpenDialog(true);
    setDialogMovie(mov[index]);
  }
  return (
    <Router>
      <div className="App">
        <NavBar
          handleShow={handleShow}
          FiltreTitle={FiltreTitle}
          FiltreRate={FiltreRate}
        />
        <Switch>
          <Route exact path="/">
            <>
              <ControlledCarousel movie={mov} />
              <MovieList
                movie={mov}
                filtertitle={filtertitle}
                filtrerate={filtrerate}
                onDelete={onDelete}
                onEdit={onEdit}
              />
              <ModalList
                show={show}
                handleClose={handleClose}
                Title={Title}
                Description={Description}
                PosterUrl={PosterUrl}
                Gif={Gif}
                Rate={Rate}
                AddMovie={AddMovie}
              />
              {dialogMovie && (
                <Modal
                  setOpen={setOpenDialog}
                  open={openDialog}
                  movie={dialogMovie}
                  setMov={setMov}
                />
              )}
            </>
          </Route>
          <Route path="/Trailer/:id" component={Trailre} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
