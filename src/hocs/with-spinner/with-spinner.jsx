import React from "react";
import PropTypes from "prop-types";
import Spinner from '../../components/spinner/spinner';

const withSpinner = (Component) => {
  const WithSpinner = ({isLoading, ...props}) => {

    return (
      isLoading
        ? <Spinner />
        : <Component {...props} />
    );
  };

  WithSpinner.propTypes = {
    isLoading: PropTypes.bool.isRequired
  };

  return WithSpinner;
};

export default withSpinner;
