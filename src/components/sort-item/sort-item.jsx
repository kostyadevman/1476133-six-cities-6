import React from 'react';
import PropTypes from 'prop-types';
import {SORT_TYPES} from "../../const";

const SortItem = ({isActive, type, onChangeSortType}) => {
  const className = isActive ?
    `places__option places__option--active` :
    `places__option`;
  const itemClickHandler = () => {
    onChangeSortType(type);
  };

  return (
    <li onClick={itemClickHandler} className={className} tabIndex="0">{type}</li>
  );
};

SortItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(SORT_TYPES).isRequired,
  onChangeSortType: PropTypes.func.isRequired
};

export default SortItem;
