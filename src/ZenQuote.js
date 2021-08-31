import React, { Component } from "react";
import axios from "axios";
import "./ZenQuote.css";

export default class ZenQuote extends Component {
  // Runs first
  // Note: it is convention to not set state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      isLoaded: false,
    };
  }

  // Runs third
  // Note: best fetch data here
  componentDidMount() {
    axios.get("https://api.github.com/zen").then((response) => {
      setTimeout(
        function () {
          this.setState({ quote: response.data, isLoaded: true });
        }.bind(this),
        3000
      );
    });
  }

  // Runs second
  render() {
    return (
      <div className="ZenQuote">
        {this.state.isLoaded ? (
          <p>{this.state.quote}</p>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    );
  }
}
