import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {SORT_TYPES} from "../../const";
import SortItem from "../sort-item/sort-item";
import {ActionCreator} from "../../store/action";


const SortList = ({isOpen, sortType, sortTypes, onChangeSortType}) => {
  const className = isOpen ?
    `places__options places__options--custom places__options--opened` :
    `places__options places__options--custom`;

  return (
    <ul className={className}>
      {sortTypes.map((type, id) => (
        <SortItem
          key={`sort-item-${id}`}
          isActive={sortType === type}
          type={type}
          onChangeSortType={onChangeSortType}
        />
      ))}
    </ul>
  );
};

SortList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  sortTypes: PropTypes.array.isRequired,
  sortType: PropTypes.oneOf(SORT_TYPES),
  onChangeSortType: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSortType(type) {
    dispatch(ActionCreator.changeSortType(type));
    // dispatch(ActionCreator.sort());
  }
});

export {SortList};
export default connect(mapStateToProps, mapDispatchToProps)(SortList);

