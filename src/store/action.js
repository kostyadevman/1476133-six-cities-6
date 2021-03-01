export const ActionType = {
  CHANGE_LOCATION: `main/changeLocation`,
  CHANGE_OFFERS: `main/changeOffers`,
  RESET: `main/reset`,
  REDIRECT_TO_ROUTE: `main/redirectToRoute`,
  CHANGE_SORT_TYPE: `sort/changeSortType`,
  SORT: `sort/Sort`,
  SET_ACTIVE_OFFER: `place-list/setActiveOffer`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
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
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  })
};
