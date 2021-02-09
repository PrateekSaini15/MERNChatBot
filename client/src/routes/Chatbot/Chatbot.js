import Chatbot from "react-chatbot-kit";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ConditionallyRender } from "react-util-kit";

import ActionProvider from "../../BotChat/ActionProvider";
import MessageParser from "../../BotChat/MessageParser";
import config from "../../BotChat/config";
import Cart from "../../components/Cart/Cart";
import {
  isSelected,
  removeSelectedRestaurant,
  getAllRestaurant,
} from "../../redux/actions/restaurantMasterActions";

class ChatbotComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      showChatBot: false,
      showCart: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.getRestaurantDetails = this.getRestaurantDetails.bind(this);
    this.toggleChatbot = this.toggleChatbot.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
  }

  componentDidMount() {
    this.props.isSelected();
    this.props.getAllRestaurant();
    this.getRestaurantDetails();
  }

  handleClick() {
    this.props.removeSelectedRestaurant();
  }

  toggleChatbot() {
    this.setState({
      ...this.State,
      showChatBot: !this.state.showChatBot,
    });
  }

  toggleCart() {
    this.setState({
      ...this.State,
      showCart: !this.state.showCart,
    });
  }

  getRestaurantDetails() {
    const restaurants = this.props.restaurantList;
    const selectedRestaurant = restaurants.filter(
      (restaurant) => restaurant._id === this.props.selectedRestaurantId
    );
    this.setState({ ...this.state, restaurant: { ...selectedRestaurant[0] } });
  }

  render() {
    if (!this.props.isRestaurantSelected) {
      return <Redirect to="/" />;
    }
    if (this.props.restaurantList.length === 0) {
      return <h1>Loading</h1>;
    } else {
      const restaurant = this.state.restaurant;
      return (
        <Container>
          <Row>
            <Col>
              <h1>Welcome to {restaurant.RestaurantName}</h1>
            </Col>
            <Col sm={{ span: 4, offset: 10 }}>
              <Button onClick={this.handleClick}>
                Select a new Restaurant
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <ConditionallyRender
                ifTrue={this.state.showCart}
                show={<Cart />}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 6, offset: 10 }}>
              <ConditionallyRender
                ifTrue={this.state.showChatBot}
                show={
                  <Chatbot
                    config={config}
                    actionProvider={ActionProvider}
                    messageParser={MessageParser}
                  />
                }
              />
            </Col>
            <Col>
              <button onClick={this.toggleChatbot}>Show</button>
              <button onClick={this.toggleCart}>Cart</button>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

function mapStateToProps(store) {
  return {
    isRestaurantSelected: store.restaurantMaster.isRestaurantSelected,
    restaurantList: store.restaurantMaster.restaurantList,
    selectedRestaurantId: store.restaurantMaster.selectedRestaurantId,
  };
}

export default connect(mapStateToProps, {
  isSelected,
  removeSelectedRestaurant,
  getAllRestaurant,
})(ChatbotComponent);
