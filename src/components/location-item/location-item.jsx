import React from 'react';
import PropTypes from 'prop-types';

const LocationItem = ({onChangeLocation, location, isActive}) => {
  const className = isActive ?
    `locations__item-link tabs__item tabs__item--active` :
    `locations__item-link tabs__item`;

  const handleLinkClick = () => {
    onChangeLocation(location);
  };

  return (
    <li className="locations__item">
      <a onClick={handleLinkClick} className={className}>
        <span>{location}</span>
      </a>
    </li>
  );
};

LocationItem.propTypes = {
  location: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onChangeLocation: PropTypes.func.isRequired
};

export default LocationItem;
