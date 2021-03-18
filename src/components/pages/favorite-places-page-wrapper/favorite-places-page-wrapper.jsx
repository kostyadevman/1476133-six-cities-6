import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

import FavoritePlacesPage from "../favorite-places-page/fevorite-places-page";
import {fetchFavorite} from "../../../store/api-actions";


const FavoritePlacesPageWrapper = () => {
  const favorites = useSelector((state) => state.DATA.favorites);
  const isFavoriteLoading = useSelector((state) => state.DATA.isFavoriteLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorite());
  }, []);

  return (
    <FavoritePlacesPage
      offers={favorites}
      isLoading={isFavoriteLoading}
    />
  );
};


export default FavoritePlacesPageWrapper;

