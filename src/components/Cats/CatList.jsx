import React, { Component } from "react";

export default class CatList extends Component {
  render() {
    return (
      <div>
        {this.props.cats.map((cat, index) => {
          return <li key={index}>{cat}</li>;
        })}
      </div>
    );
  }
}
