import {SortTypes} from "../const";

const SortFuncMap = {
  [SortTypes.PRICE_INC]: (a, b) => a.price - b.price,
  [SortTypes.PRICE_DEC]: (a, b) => b.price - a.price,
  [SortTypes.TOP]: (a, b) => b.rating - a.rating
};


export const sortOffers = (offers, sortType) => {
  if (sortType === SortTypes.POPULAR) {
    return offers;
  }

  return offers.slice().sort(SortFuncMap[sortType]);
};
