import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCategories } from "../../redux/actions/foodCategoryActions";

import "./Options.css";

class Options extends Component {
  componentDidMount() {
    console.log(this.props.currentType);
    this.props.getAllCategories(this.props.currentType);
  }

  render() {
    const categories = this.props.categoriesList.map((category) => (
      <button
        key={category._id}
        onClick={() => {
          this.props.setState((prevState) => ({
            ...prevState,
            currentCategory: category._id,
          }));
          this.props.actionProvider.showItemsOfCategory(category.CategoryName);
        }}
      >
        {category.CategoryName}
      </button>
    ));
    return <div>{categories}</div>;
  }
}

function mapSatateToProps(store) {
  return {
    categoriesList: store.foodCategory.categoriesList,
  };
}

export default connect(mapSatateToProps, { getAllCategories })(Options);
