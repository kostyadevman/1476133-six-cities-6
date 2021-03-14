import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from "prop-types";
import SortItem from "../sort-item/sort-item";
import {changeSortType} from "../../store/action";


const SortList = ({isOpen, sortTypes}) => {
  const {sortType} = useSelector((state) => state.APP);

  const dispatch = useDispatch();
  const className = isOpen ?
    `places__options places__options--custom places__options--opened` :
    `places__options places__options--custom`;

  const handleChangeSortType = (type) => {
    dispatch(changeSortType(type));
  };

  return (
    <ul className={className}>
      {sortTypes.map((type, id) => (
        <SortItem
          key={`sort-item-${id}`}
          isActive={sortType === type}
          type={type}
          onChangeSortType={handleChangeSortType}
        />
      ))}
    </ul>
  );
};

SortList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  sortTypes: PropTypes.array.isRequired,
};

export default SortList;

