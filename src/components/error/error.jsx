import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const alertStyle = {
  position: `fixed`,
  zIndex: 2,
  padding: `20px`,
  backgroundColor: `#f44336`,
  color: `white`,
  width: `100%`
};

const closeBtnStyle = {
  marginLeft: `15px`,
  color: `white`,
  fontWeight: `bold`,
  float: `right`,
  fontSize: `22px`,
  lineHeight: `20px`,
  cursor: `pointer`,
  transition: `0.3s`,
};
const Error = ({errorMessage, removeMessage}) => {


  if (!errorMessage) {
    return null;
  }

  setTimeout(() => {
    removeMessage();
  }, 5000);

  const handleCloseClick = (evt) => {
    evt.preventDefault();
    removeMessage();
  };

  return (
    <div style={alertStyle} className="alert">
      <span style={closeBtnStyle} className="closebtn" onClick={handleCloseClick}>&times;</span>
      <strong>Error!</strong> {errorMessage}.
    </div>
  );
};

Error.propTypes = {
  errorMessage: PropTypes.string,
  removeMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  errorMessage: state.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
  removeMessage() {
    dispatch(ActionCreator.unsetErrorMessage());
  }
});

export {Error};
export default connect(mapStateToProps, mapDispatchToProps)(Error);
