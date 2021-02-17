import React from "react";
import { addFeature } from "../actions/actions";
import { connect } from "react-redux";

const AdditionalFeature = (props) => {
  const { name, price } = props.feature;
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => props.addFeature(props.feature)}
      >
        Add
      </button>
      {name} + {price}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    features: state.feature,
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
