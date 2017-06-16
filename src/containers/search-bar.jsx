import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};
  }
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    //makes the form not reload the whole page;
    event.preventDefault();
    //fetch weather with the input
    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
        <input
        autoFocus 
        value={this.state.term}
        placeholder="Get a five-day forecast in your favorite cities"
        className="form-control"
        onChange={this.onInputChange.bind(this)} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Submit</button>
        </span>

      </form>
    );
  }
}

function mapDispathToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispathToProps)(SearchBar);