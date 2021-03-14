import {NameSpace} from '../root-reducer';

export const getLocationCity = (state) => state[NameSpace.APP].locationCity;
export const getSortType = (state) => state[NameSpace.APP].sortType;
export const getActiveOffer = (state) => state[NameSpace.APP].activeOffer;
export const getErrorMessage = (state) => state[NameSpace.APP].errorMessage;
