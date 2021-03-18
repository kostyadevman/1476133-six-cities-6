import React, {useEffect} from "react";
import PlaceDetailPage from "../place-detail-page/place-detail-page";
import {fetchComments, fetchOffer, fetchOffersNearby} from "../../../store/api-actions";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getOffersNearbyVisible} from "../../../store/data/selectors";

const PlaceDetailPageWrapper = () => {
  const {id} = useParams();

  const offer = useSelector((state) => state.DATA.offer);
  const isOfferLoading = useSelector((state) => state.DATA.isOfferLoading);
  const comments = useSelector((state) => state.DATA.comments);
  const offersNearby = useSelector(getOffersNearbyVisible);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchComments(id));
    dispatch(fetchOffersNearby(id));
  }, []);


  return (
    <PlaceDetailPage
      offer={offer}
      comments={comments}
      offersNearby={offersNearby}
      isLoading={isOfferLoading}
    />
  );
};


export default PlaceDetailPageWrapper;
