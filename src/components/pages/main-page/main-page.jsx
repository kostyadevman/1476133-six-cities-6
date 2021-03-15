import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import Header from "../../layout/header/header";
import {MY_ONLY_USER} from "../../../mocks/users";
import {getFilteredSortedOffers} from "../../../store/data/selectors";
import Main from "../../main/main";
import MainEmpty from "../../main-empty/main-empty";


const MainPage = ({locations, sortTypes}) => {
  const {locationCity} = useSelector((state) => state.APP);
  const offers = useSelector(getFilteredSortedOffers);

  return (
    <div className="page page--gray page--main">

      <Header userName={MY_ONLY_USER}/>

      {(offers.length > 0) ?
        <Main offers={offers} locationCity={locationCity} sortTypes={sortTypes} locations={locations} /> :
        <MainEmpty locations={locations} locationCity={locationCity} />
      }
    </div>
  );
};

MainPage.propTypes = {
  locations: PropTypes.array.isRequired,
  sortTypes: PropTypes.array.isRequired
};

export default MainPage;
