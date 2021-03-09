import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {AuthorizationStatus, AppRoute} from "../../../const";

const Header = ({userName, authorizationStatus}) => {
  const history = useHistory();

  const handleLinkClick = (evt) => {
    evt.preventDefault();
    history.push(AppRoute.FAVORITES);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#"
                  onClick={handleLinkClick}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {authorizationStatus === AuthorizationStatus.AUTH ?
                    <span className="header__user-name user__name">{userName}</span> :
                    <span className="header__login">Sign in</span>
                  }
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  userName: PropTypes.string,
  authorizationStatus: PropTypes.string.isRequired
};


const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});


export {Header};
export default connect(mapStateToProps)(Header);
