import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from '../../store/action';
import LocationItem from "../location-item/location-item";
import {SortTypes} from "../../const";


const LocationList = ({locations, locationCity, onChangeLocation}) => {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((location, locationId) => (
        <LocationItem
          key={locationId}
          location={location}
          isActive={locationCity === location}
          onChangeLocation={onChangeLocation}
        />
      ))}
    </ul>
  );
};

LocationList.propTypes = {
  locations: PropTypes.array.isRequired,
  locationCity: PropTypes.string.isRequired,
  onChangeLocation: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  locationCity: state.locationCity
});


const mapDispatchToProps = (dispatch) => ({
  onChangeLocation(location) {
    dispatch(ActionCreator.changeLocation(location));
    dispatch(ActionCreator.changeSortType(SortTypes.POPULAR));
  }
});

export {LocationList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
