import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getAllRestaurant } from "../../redux/actions/restaurantMasterActions";

class Home extends Component {
  componentDidMount() {
    this.props.getAllRestaurant();
  }

  render() {
    const restaurants = this.props.restaurants.map((restaurant) => (
      <option key={restaurant._id} value={restaurant.RestaurantName}>
        {restaurant.RestaurantName}
      </option>
    ));
    return (
      <>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control as="select" required>
              <option key={0} value="">
                --Select a Restaurant
              </option>
              {restaurants}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>{" "}
      </>
    );
  }
}

function mapStateToProps(store) {
  return {
    restaurants: store.restaurantMaster.restaurantList,
  };
}

export default connect(mapStateToProps, { getAllRestaurant })(Home);
