import React from "react";
import { connect } from "react-redux";

import { getFoodItemTypesByRestaurant } from "../../redux/actions/foodItemTypesActions";

class FoodItemTypes extends React.Component {
  componentDidMount() {
    this.props.getFoodItemTypesByRestaurant();
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
    return <div>{markup}</div>;
  }
}

const mapStateToProps = (store) => ({ types: store.foodType.types });

export default connect(mapStateToProps, { getFoodItemTypesByRestaurant })(
  FoodItemTypes
);
