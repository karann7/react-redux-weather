import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    console.log(this.state.term);
    this.setState({ term: event.target.value });
  }
  render() {
    return (
      <form className="input-group">
        <input 
        value={this.state.term}
        placeholder="Get a five-day forecast in your favorite cities"
        className="form-control"
        onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-success">Submit</button>
        </span>

      </form>
    );
  }
}