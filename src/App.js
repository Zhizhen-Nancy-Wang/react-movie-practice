import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./components/customCard/CustomCard";
import { Header } from "./components/header/Header";
import { SearchForm } from "./components/searchForm/SearchForm";
import { fetchMovie } from "./components/helper/AxiosHelper";

function App() {
  const [searchMovie, setSearchMovie] = useState("");
  // const [movieList, setMovieList] = useState([searchMovie]);

  const getMovie = async (search) => {
    const { data } = await fetchMovie(search);
    // console.log(data);
    setSearchMovie(data);
    // setMovieList([...movieList, searchMovie]);
  };
  console.log(searchMovie.results);
  const movieList = searchMovie.results;
  // console.log(movieList[1].title);

  return (
    <div className="wrapper">
      <Container>
        <Header />
        <SearchForm getMovie={getMovie} />
        <CustomCard searchMovie={searchMovie} movieList={movieList} />
      </Container>
    </div>
  );
}

export default App;
