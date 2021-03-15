import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

import FavoritePlacesPage from "../favorite-places-page/fevorite-places-page";
import {fetchFavorite} from "../../../store/api-actions";


const FavoritePlacesPageWrapper = () => {
  const {favorite, isFavoriteLoading} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchFavorite());
  }, []);

  return (
    <FavoritePlacesPage
      offers={favorite}
      isLoading={isFavoriteLoading}
    />
  );
};


export default FavoritePlacesPageWrapper;

