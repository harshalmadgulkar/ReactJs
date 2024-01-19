import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
    };
  }

  // Use the required lifecycle methods here
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((photos) => this.setState({ photos: photos }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    // Display loading status here
    if(this.state.loading){
      return <h3> Loading Please Wait... </h3>
    }
    return (
      <div className="App">
        {this.state.photos.map((photo) => {
          return <Image key={photo.id} photo={photo} />;
        })}
      </div>
    );
  }
}
