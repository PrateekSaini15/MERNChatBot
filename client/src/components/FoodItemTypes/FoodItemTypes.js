import React from "react";
import { connect } from "react-redux";
import { ConditionallyRender } from "react-util-kit";

import { getFoodItemTypesByRestaurant } from "../../redux/actions/foodItemTypesActions";
import Cart from "../../components/Cart/Cart";

class FoodItemTypes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
    };
    this.toggleCart = this.toggleCart.bind(this);
  }
  componentDidMount() {
    this.props.getFoodItemTypesByRestaurant();
  }

  toggleCart() {
    this.setState({ ...this.state, showCart: !this.state.showCart });
  }

  render() {
    const types = this.props.types;
    const markup = types.map((type) => (
      <button
        key={type._id}
        onClick={() => {
          this.props.setState((prevState) => ({
            ...prevState,
            currentType: type._id,
          }));
          this.props.actionProvider.showCategoriesOfType();
        }}
      >
        {type.Type}
      </button>
    ));
    return (
      <div>
        {markup} <button onClick={this.toggleCart}>Cart</button>
        <div>
          <ConditionallyRender ifTrue={this.state.showCart} show={<Cart />} />{" "}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ types: store.foodType.types });

export default connect(mapStateToProps, { getFoodItemTypesByRestaurant })(
  FoodItemTypes
);
