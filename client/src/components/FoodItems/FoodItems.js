import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems } from "../../redux/actions/foodItemActions";

class FoodItems extends Component {
  constructor(props) {
    super(props);
    this.getItems = this.getItems.bind(this);
    this.state = {
      itemList: [],
    };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    this.props.getItems({
      categoryId: this.props.currentCategory,
      type: this.props.currentType,
    });
  }

  render() {
    console.log(this.props.itemList);
    return (
      <div>
        {this.props.itemList.map((item) => (
          <button key={item._id}>{item.ItemName}</button>
        ))}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    itemList: store.foodItem.itemList,
  };
}

export default connect(mapStateToProps, { getItems })(FoodItems);
