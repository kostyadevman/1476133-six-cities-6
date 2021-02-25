export const ActionType = {
  CHANGE_LOCATION: `domain/changeLocation`,
  CHANGE_OFFERS: `domain/changeOffers`,
  RESET: `domain/reset`
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
  })
};
