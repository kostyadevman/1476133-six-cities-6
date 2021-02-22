import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {MAP_SETTINGS, propTypesPlace} from "../../utils/place";
import "leaflet/dist/leaflet.css";

const zoom = 12;
const city = [52.38333, 4.9];

const Map = ({offers, mapType}) => {

  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    mapRef.current.setView(city, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offers.forEach((offer) => {
      const customIcon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet.marker({
        lat: offer.city.location.latitude,
        lng: offer.city.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(offer.city.name);

      return () => {
        mapRef.current.remove();
      };
    });
  }, []);

  return (
    <section
      id="map"
      className={MAP_SETTINGS[mapType].className}
      ref={mapRef} />
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(propTypesPlace).isRequired,
  mapType: PropTypes.string.isRequired
};

export default Map;
