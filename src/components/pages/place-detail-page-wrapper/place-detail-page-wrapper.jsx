import React, {useEffect} from "react";
import PropTypes from "prop-types";
import PlaceDetailPage from "../place-detail-page/place-detail-page";
import {fetchComments, fetchOffer, fetchOffersNearby} from "../../../store/api-actions";
import {connect} from "react-redux";
import {propTypesPlace} from "../../../utils/place";
import {useParams} from "react-router-dom";
import {propTypesReview} from "../../../utils/review";

const PlaceDetailPageWrapper = ({offer, comments, offersNearby, isLoading, onLoadOffer, onLoadData}) => {
  const {id} = useParams();

  useEffect(() => {
    onLoadOffer(id);
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
};

const mapStateToProps = (state) => ({
  offer: state.offer,
  comments: state.comments,
  offersNearby: state.offersNearby,
  isLoading: state.isOfferLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffer(id) {
    dispatch(fetchOffer(id));
  },
  onLoadData(id) {
    dispatch(fetchComments(id));
    dispatch(fetchOffersNearby(id));
  },
});

export {PlaceDetailPageWrapper};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetailPageWrapper);
