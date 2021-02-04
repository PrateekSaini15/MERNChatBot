import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCategories } from "../../redux/actions/foodCategoryActions";
import "./Options.css";

class Options extends Component {
  componentDidMount() {
    this.props.getAllCategories();
  }

  render() {
    const categories = this.props.categoriesList.map((category) => (
      <button
        key={category._id}
        onClick={() =>
          this.props.actionProvider.showItemsOfCategory(category.CategoryName)
        }
      >
        {category.CategoryName}
      </button>
    ));
    return (
      <div>
        {/* <button onClick={this.props.actionProvider.takeNewOrder}>
          New Order
        </button> */}
        {categories}
      </div>
    );
  }
}

function mapSatateToProps(store) {
  return { categoriesList: store.foodCategory.categoriesList };
}

export default connect(mapSatateToProps, { getAllCategories })(Options);
