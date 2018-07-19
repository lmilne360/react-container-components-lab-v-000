import React, { Component } from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor () {
    super()
    this.state = { reviews: []};
  }
  
  componentWillMount() {
    fetch(URL)
    .then(res => res.json())
    .then(reviews => this.setState({reviews}))
    .catch(error => console.log(error));
  }
  
  render() {
    return (
      <div className="latest-movie-reviews">
       <MovieReviews reviews={this.state.reviews} />
      </div>
      )
  }
}