import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  renderRestaurants = () =>
    this.props.restaurants.map(restaurant =>
      <Restaurant restaurant={restaurant} key={restaurant.id} delete={this.props.delete} />)

  render() {
    return(
      <ul>
        Restaurants Component
      </ul>
    );
  }
};

export default Restaurants;
