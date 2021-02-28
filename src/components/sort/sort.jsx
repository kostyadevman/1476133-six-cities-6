import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {CITIES, SORT_TYPES} from "../../const";
import SortList from "../sort-list/sort-list";


const Sort = ({sortType, sortTypes, locationCity}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sortMenuClickHandler = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [sortType, locationCity]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={sortMenuClickHandler} className="places__sorting-type" tabIndex="0">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <SortList isOpen={isMenuOpen} sortTypes={sortTypes} />
    </form>
  );
};

Sort.propTypes = {
  sortType: PropTypes.oneOf(SORT_TYPES).isRequired,
  sortTypes: PropTypes.array.isRequired,
  locationCity: PropTypes.oneOf(CITIES).isRequired
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
  locationCity: state.locationCity
});

export {Sort};
export default connect(mapStateToProps, null)(Sort);
