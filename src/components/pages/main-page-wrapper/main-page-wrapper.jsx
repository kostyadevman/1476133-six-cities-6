import React, {useEffect} from "react";
import MainPage from "../main-page/main-page";
import {CITIES, SORT_TYPES} from "../../../const";
import {useDispatch, useSelector} from "react-redux";
import {fetchOfferList} from "../../../store/api-actions";

const MainPageWrapper = () => {
  const isOfferListLoading = useSelector((state) => state.DATA.isOfferListLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOfferList());
  }, []);

  return (
    <MainPage
      isLoading={isOfferListLoading}
      locations={CITIES}
      sortTypes={SORT_TYPES}
    />
  );
};

export default MainPageWrapper;
