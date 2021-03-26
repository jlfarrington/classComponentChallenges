import React, { Component } from "react";
import { Button } from "reactstrap";

export default class DogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
        imgUrl: "",
        isFetching: true
    };
  }


  componentDidMount() {
    this.fetchFunction()
  }

  async fetchFunction() {
    const fetchUrl = "https://dog.ceo/api/breeds/image/random"
    const response = await fetch(fetchUrl);
    const imgData = await response.json();
    this.setState({ imgUrl: imgData.message })
    this.setState({ isFetching: false })
  }


  render() {
    return (
      <div>
        {
        this.state.isFetching ? 
        <h2>fetching pup</h2> : 
        <>
        <img src={this.state.imgUrl} style={{ width: '30%' }}/> 
        <br />
        <Button onClick={() => this.fetchFunction()}>Fetch a new pupper</Button></>
        }

          
      </div>
    );
  }
}
