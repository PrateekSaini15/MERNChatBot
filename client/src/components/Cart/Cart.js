import React from "react";
import { connect } from "react-redux";
import {
  clearCart,
  removeSelectedItemFromCart,
} from "../../redux/actions/cartActions";
class Cart extends React.Component {
  render() {
    const markup = this.props.items.map((item) => (
      <li key={item._id}>
        {item.ItemName}{" "}
        <button onClick={() => this.props.removeSelectedItemFromCart(item)}>
          remove
        </button>{" "}
      </li>
    ));
    return (
      <>
        <h2>Cart</h2>
        <ul>{markup}</ul>
        <button onClick={this.props.clearCart}>Clear Cart</button>
      </>
    );
  }
}

function mapStateToProps(store) {
  return { items: store.cart.items };
}

export default connect(mapStateToProps, {
  clearCart,
  removeSelectedItemFromCart,
})(Cart);
