import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {CitiesMap} from "../../const";
import {MAP_SETTINGS} from "../../utils/place";
import "leaflet/dist/leaflet.css";
import {useSelector} from "react-redux";
import {getFilteredOffers} from "../../store/data/selectors";

const zoom = 12;

const Map = ({mapType}) => {
  const {locationCity, activeOffer} = useSelector((state) => state.APP);
  const offers = useSelector(getFilteredOffers);

  const mapRef = useRef();

  useEffect(() => {
    const center = CitiesMap[locationCity];
    mapRef.current = leaflet.map(`map`, {
      center,
      zoom,
      zoomControl: false,
      marker: true
    });

    mapRef.current.setView(center, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offers.forEach((offer) => {
      const customIcon = leaflet.icon({
        iconUrl: offer.id === activeOffer ? `img/pin-active.svg` : `img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet.marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(offer.title);


    });
    return () => {
      mapRef.current.remove();
    };
  }, [locationCity, offers, activeOffer]);

  return (
    <section
      id="map"
      className={MAP_SETTINGS[mapType].className}
    />
  );
};

Map.propTypes = {
  mapType: PropTypes.string.isRequired,
};

export default Map;

