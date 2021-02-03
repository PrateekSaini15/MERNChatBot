import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  getAllRestaurant,
  selectRestaurant,
  isSelected,
} from "../../redux/actions/restaurantMasterActions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RestaurantId: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getAllRestaurant();
    this.props.isSelected();
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.selectRestaurant(this.state.RestaurantId);
  }

  render() {
    if (this.props.isRestaurantSelected) {
      return <Redirect to="/chatbot" />;
    }
    const restaurants = this.props.restaurants.map((restaurant) => (
      <option key={restaurant._id} value={restaurant._id}>
        {restaurant.RestaurantName}
      </option>
    ));
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              as="select"
              name="RestaurantId"
              required
              onChange={this.handleChange}
            >
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
      </Container>
    );
  }
}

function mapStateToProps(store) {
  return {
    restaurants: store.restaurantMaster.restaurantList,
    isRestaurantSelected: store.restaurantMaster.isRestaurantSelected,
  };
}

export default connect(mapStateToProps, {
  getAllRestaurant,
  selectRestaurant,
  isSelected,
})(Home);
