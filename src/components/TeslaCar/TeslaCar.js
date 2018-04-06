import React from 'react';
import './TeslaCar.css';
import PropTypes from 'prop-types';
const TeslaCar = (props) => (
  <div className="tesla-car">
    <div className="tesla-wheels">
      <div className={`tesla-wheel tesla-wheel--front tesla-wheel--${props.wheelsize}`}></div>
      <div className={`tesla-wheel tesla-wheel--rear tesla-wheel--${props.wheelsize}`}></div>
    </div>
  </div>
);
TeslaCar.checkPropTypes = {
  wheelsize: PropTypes.number
}
export default TeslaCar;
