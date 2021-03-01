export const ActionType = {
  CHANGE_LOCATION: `domain/changeLocation`,
  CHANGE_OFFERS: `domain/changeOffers`,
  RESET: `domain/reset`,
  CHANGE_SORT_TYPE: `sort/changeSortType`,
  SORT: `sort/Sort`,
  SET_ACTIVE_OFFER: `place-list/setActiveOffer`,
  LOAD_OFFERS: `data/loadOffers`
};

export const ActionCreator = {
  changeLocation: (location) => ({
    type: ActionType.CHANGE_LOCATION,
    payload: location
  }),

  changeOffers: (offers) => ({
    type: ActionType.CHANGE_OFFERS,
    payload: offers
  }),

  reset: () => ({
    type: ActionType.RESET
  }),

  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),

  setActiveOffer: (id) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: id
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  })
};
