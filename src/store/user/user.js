import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, setUser} from "../action";
import {AuthorizationStatus, EMPTY_USER} from "../../const";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: EMPTY_USER
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setUser, (state, action) => {
    state.user = action.payload;
  });
});
export {user};
