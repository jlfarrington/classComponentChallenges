import React, { Component } from "react";
import { Input } from "reactstrap";

export default class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: [
        "pen",
        "marker",
        "eraser",
        "notebook",
        "pencil",
        "scissors",
        "highlighter",
        "stapler",
        "paper clip",
        "binder",
        "hole punch",
        "laminator",
        "laminating sheets",
        "protective sheets",
        "index cards",
      ],
      term: "",
      filteredThings: []
    };
  }

  searchFunction = (e) => {
    this.setState({ term: e.target.value })
    console.log(this.state.term)
    let filtered = this.state.things.filter((val) => {
      if (val.toLowerCase().includes(this.state.term.toLowerCase()))
      return val
    }
      )
    this.setState({ filteredThings: filtered })
    console.log(this.state.filteredThings)
  };

  render() {
    return (
      <div>
        <Input
          placeholder="Search Here"
          value={this.state.term}
          onChange={(e) => this.searchFunction(e)}
        />
        <h3>Results:</h3>
        {this.state.term === "" || this.state.filteredThings.length === 0
          ? this.state.things.map((thing, index) => {
              return <li key={index}>{thing}</li>;
            })
          : (this.state.filteredThings.map((thing, index) => {
            return <li key={index}>{thing}</li>
          }))}
      </div>
    );
  }
}
