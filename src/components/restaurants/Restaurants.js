import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    renderRestaurants = () => this.props.restaurants.map(restaurant =>
      <Restaurant restaurant={restaurant} key={restaurant.id} delete={this.props.delete} />)
    return(
      <ul>
        Restaurants Component
      </ul>
    );
  }
};

export default Restaurants;
