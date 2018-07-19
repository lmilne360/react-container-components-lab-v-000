
import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
+ `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = { searchTerm: '', reviews: []};
  }
  
  updateSearchTerm = e => {
    this.setState({searchTerm: e.target.value});
  }
  
  getMovies = e => {
    e.preventDefault();
    fetch(BASE_URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(reviews => this.setState({reviews}));
  }
  
  render () {
    return (
      <div className="searchable-movie-reviews">
       <form onSubmit={this.getMovies}>
       <input id='search-input' 
        type='text' 
        placeholder='Search Movie Reviews'
        onChange={this.updateSearchTerm} />
        <button type='submit'>Submit</button>
       </form>
       <MovieReviews reviews = {this.state.reviews} />
      </div>
      )
  }
}