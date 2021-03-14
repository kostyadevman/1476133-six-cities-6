import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {changeLocation, changeSortType} from '../../store/action';
import LocationItem from "../location-item/location-item";
import {SortTypes} from "../../const";


const LocationList = ({locations}) => {
  const {locationCity} = useSelector((state) => state.APP);

  const dispatch = useDispatch();

  const handleChangeLocation = (location) => {
    dispatch(changeLocation(location));
    dispatch(changeSortType(SortTypes.POPULAR));
  };

  return (
    <ul className="locations__list tabs__list">
      {locations.map((location, locationId) => (
        <LocationItem
          key={locationId}
          location={location}
          isActive={locationCity === location}
          onChangeLocation={handleChangeLocation}
        />
      ))}
    </ul>
  );
};

LocationList.propTypes = {
  locations: PropTypes.array.isRequired,
};


export default LocationList;

