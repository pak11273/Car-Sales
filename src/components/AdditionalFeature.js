import React from "react";
import { addFeature } from "../actions/actions";
import { dispatch } from "react";

const AdditionalFeature = (props) => {
  const handleClick = (feature) => {
    dispatch(addFeature(feature));
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => handleClick(props.feature)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
