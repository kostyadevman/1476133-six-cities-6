import React, {useRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import Header from "../../layout/header/header";
import {login} from "../../../store/api-actions";
import {CITIES} from "../../../const";

const AuthPage = ({locationCity, onSubmit}) => {
  const loginRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  const handleLinkClick = (evt) => {
    evt.preventDefault();
    history.push(`/`);
  };

  return (
    <div className="page page--gray page--login">

      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="email">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  id="email"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="password">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#" onClick={handleLinkClick}>
                <span>{locationCity}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

AuthPage.propTypes = {
  locationCity: PropTypes.oneOf(CITIES).isRequired,
  onSubmit: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  locationCity: state.locationCity,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {AuthPage};
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);

