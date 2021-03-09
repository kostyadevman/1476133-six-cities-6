import React, {useEffect} from "react";
import PropTypes from "prop-types";
import PlaceDetailPage from "../place-detail-page/place-detail-page";
import {fetchComments, fetchOffer, fetchOffersNearby} from "../../../store/api-actions";
import {ActionCreator} from "../../../store/action";
import {connect} from "react-redux";
import {propTypesPlace} from "../../../utils/place";
import {useParams} from "react-router-dom";
import {propTypesReview} from "../../../utils/review";

const PlaceDetailPageWrapper = ({offer, comments, offersNearby, isLoading, onLoadOffer, onLoadData, setIsLoading}) => {
  const {id} = useParams();

  useEffect(() => {
    setIsLoading(true);
    onLoadOffer(id)
      .then(() => setIsLoading(false));
    onLoadData(id);
  }, []);


  return (
    <PlaceDetailPage
      offer={offer}
      comments={comments}
      offersNearby={offersNearby}
      isLoading={isLoading}
    />
  );
};

PlaceDetailPageWrapper.propTypes = {
  offer: propTypesPlace.isRequired,
  comments: PropTypes.arrayOf(propTypesReview).isRequired,
  offersNearby: PropTypes.arrayOf(propTypesPlace).isRequired,
  isLoading: PropTypes.bool.isRequired,
  onLoadOffer: PropTypes.func.isRequired,
  onLoadData: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offer: state.offer,
  comments: state.comments,
  offersNearby: state.offersNearby,
  isLoading: state.isOfferLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffer(id) {
    return dispatch(fetchOffer(id));
  },
  onLoadData(id) {
    dispatch(fetchComments(id));
    dispatch(fetchOffersNearby(id));
  },
  setIsLoading(isOfferLoading) {
    dispatch(ActionCreator.setOfferLoading(isOfferLoading));
  }
});

export {PlaceDetailPageWrapper};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetailPageWrapper);
