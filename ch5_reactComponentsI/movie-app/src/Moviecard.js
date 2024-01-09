import React from "react";

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      poster:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      plot: "Earths mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      price: 199,
      stars: 0,
      rating: 8.9,
      fav: false,
      isInCart: false,
    };
  }

  addStar = () => {
    if (this.state.stars >= 5) {
      return;
    }
    // form I
    this.setState({
      stars: (this.state.stars += 0.5),
    });

    // form II
    // this.setState((prevState)=>({
    //   stars : prevState.stars+0.5
    // }))

    // this.state.stars+=0.5;
    // console.log("this.state.stars", this.state.stars);
  };

  reduceStar = () => {
    if (this.state.stars <= 0) {
      return;
    }
    this.setState((prevState) => ({
      stars: prevState.stars - 0.5,
    }));
  };

  handleFav = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };

  handleAddToCart=()=>{
    this.setState({
      isInCart: !this.state.isInCart
    })
  }

  render() {
    const { title, poster, plot, price, stars, rating, fav, isInCart } = this.state;
    return (
      <div className="main">
        {/**Movie Card */}
        <div className="movie-card">
          {/**Left section of Movie Card */}
          <div className="left">
            <img
              alt="poster"
              src={poster}
            />
          </div>

          {/**Right section Movie Card */}
          <div className="right">
            {/**Title, plot, price of the movie */}
            <div className="title"> {title} </div>
            <div className="plot"> {plot} </div>
            <div className="price">Rs. {price}</div>

            {/**Footer starts here with ratings, stars and buttons */}
            <div className="footer">
              <div className="rating"> {rating} </div>

              {/**Star image with increase and decrease buttons and star count */}
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="Decrease"
                  src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                  onClick={this.reduceStar}
                />
                <img
                  className="stars"
                  alt="stars"
                  src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                />
                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                  onClick={this.addStar}
                />
                <span className="starCount"> {stars} </span>
              </div>

              {/**Favourite button */}
              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={this.handleFav}
              >
                {fav ? "Un-Favourite" : "Favourite"}
              </button>

              {/**add to cart button */}
              <button
                className={isInCart ? "remove-from-cart-btn" : "add-to-cart-btn"}
                onClick={this.handleAddToCart}
              >
                {isInCart ? "Delete" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;