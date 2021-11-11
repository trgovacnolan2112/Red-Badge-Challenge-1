import React, { Component } from "react";
import DogDisplay from "./DogDisplay";

export default class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
    };
  }

  componentDidMount = () => {
    console.log("Component Mounted! ;)");
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .catch(err => console.log(err))
      .then((data) => 
        this.setState({
          img: data.message,
        }),
      );
  }
  render() {
    return (
      <div>
        <h2>Random Dog Photo</h2>
        <DogDisplay url={this.state.img} />
        <button onClick={this.componentDidMount}>New Puppers</button>
      </div>
    );
  }
}
