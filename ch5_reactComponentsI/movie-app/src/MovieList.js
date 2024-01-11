import React from "react";
import MovieCard from "./Moviecard.js";

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "The Avengers",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
          plot: "Earths mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          price: 199,
          stars: 0,
          rating: 8.9,
          fav: false,
          isInCart: false,
        },
        {
          title: "Alienoid",
          poster:
            "https://image.tmdb.org/t/p/w400/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg",
          plot: "The door of time opens between the swordsman who wants to seize the legendary divine sword at the end of the Goryeo Dynasty and those who chase after an alien prisoner imprisoned in a human body in 2022.",
          price: 199,
          stars: 0,
          rating: 6.2,
          fav: false,
          isInCart: false,
        },
        {
          title: "Hypnotic",
          poster: "https://image.tmdb.org/t/p/w400/3IhGkkalwXguTlceGSl8XUJZOVI.jpg",
          plot: " A detective investigates a mystery involving his missing daughter and a secret government program.",
          price: 199,
          stars: 0,
          rating: 6.4,
          fav: false,
          isInCart: false,
        },
        {
          title: "Berlin (Season 1)",
          poster: "https://image.tmdb.org/t/p/w500/qggpZOGHps82F80lXPxtvtf9HnL.jpg",
          plot: "Back to his golden age before the events of “Money Heist,” Berlin and a masterful gang gather in Paris to plan one of his most ambitious robberies ever.",
          price: 199,
          stars: 0,
          rating: 9.0,
          fav: false,
          isInCart: false,
        },
      ],
    };
  }

  render() {
    return (
      <>
        {this.state.movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </>
    );
  }
}

export default MovieList;