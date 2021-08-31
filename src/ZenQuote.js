import React, { Component } from "react";
import axios from "axios";

export default class ZenQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/zen")
      .then((response) => this.setState({ quote: response.data }));
  }
  render() {
    return (
      <div className="ZenQuote">
        <p>{this.state.quote}</p>
      </div>
    );
  }
}