import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {AuthorizationStatus, AppRoute} from "../../../const";
import {logout} from "../../../store/api-actions";

const logoutStyle = {
  marginLeft: `15px`
};

const Header = () => {
  const authorizationStatus = useSelector((state) => state.USER.authorizationStatus);
  const user = useSelector((state) => state.USER.user);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleLinkClick = (evt) => {
    evt.preventDefault();
    history.push(AppRoute.FAVORITES);
  };

  const handleLogoutClick = (evt) => {
    evt.preventDefault();
    dispatch(logout());
  };

  const handleLogoClick = (evt) => {
    evt.preventDefault();
    history.push(AppRoute.ROOT);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a
              className="header__logo-link header__logo-link--active"
              onClick={handleLogoClick}
            >
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
                    <span className="header__user-name user__name">{user.email}</span> :
                    <span className="header__login">Sign in</span>
                  }
                </a>
              </li>
              {authorizationStatus === AuthorizationStatus.AUTH &&
              <li className="header__nav-item" style={logoutStyle}>
                <a
                  className="header__nav-link"
                  onClick={handleLogoutClick}
                >
                  <span className="header__login">Logout</span>
                </a>
              </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
