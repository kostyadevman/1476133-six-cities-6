import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {unsetErrorMessage} from "../../store/action";

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

const Error = () => {
  const {errorMessage} = useSelector((state) => state.APP);

  const dispatch = useDispatch();

  if (!errorMessage) {
    return null;
  }

  setTimeout(() => {
    dispatch(unsetErrorMessage());
  }, 5000);

  const handleCloseClick = (evt) => {
    evt.preventDefault();
    dispatch(unsetErrorMessage());
  };

  return (
    <div style={alertStyle} className="alert">
      <span style={closeBtnStyle} className="closebtn" onClick={handleCloseClick}>&times;</span>
      <strong>Error!</strong> {errorMessage}.
    </div>
  );
};


export default Error;
