export const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
export const PLACE_TYPE = [`apartment`, `room`, `house`, `hotel`];
export const SORT_TYPES = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];
export const MAX_RATING = 5;
export const RATINIG_INIT = 0;
export const REVIEW_LENGTH_MIN = 50;
export const REVIEW_LENGTH_MAX = 300;
export const VISIBLE_OFFERS_NEARBY_COUNT = 3;


export const SortTypes = {
  POPULAR: `Popular`,
  PRICE_INC: `Price: low to high`,
  PRICE_DEC: `Price: high to low`,
  TOP: `Top rated first`
};

export const CardType = {
  CITIES: `cities`,
  FAVORITES: `favorites`,
  NEAR: `near`
};

export const PlaceListType = {
  CITIES: `cities`,
  NEAR: `near`
};

export const MapType = {
  CITIES: `cities`,
  NEAR: `near`,
};
export const RatingMap = {
  1: `terribly`,
  2: `badly`,
  3: `not bad`,
  4: `good`,
  5: `perfect`,
};

export const INITIAL_LOCATION = `Paris`;

export const CitiesMap = {
  Amsterdam: [52.3833, 4.9044],
  Paris: [48.8589, 2.3469],
  Cologne: [50.9593, 6.9695],
  Brussels: [50.8552, 4.3753],
  Hamburg: [53.5503, 10.0006],
  Dusseldorf: [51.2387, 6.8143]
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  LOGIN: `/login`,
  ROOT: `/`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
  PAGE_NOT_FOUND: `/page-not-found`
};

export const APIRoute = {
  OFFERS: `/hotels`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  OFFER: `/hotels/:id`,
  COMMENTS: `/comments/:id`,
  NEARBY: `/hotels/:id/nearby`,
  FAVORITE: `/favorite`,
  FAVORITE_ITEM: `/favorite/:hotel_id/:status`
};

export const EMPTY_OFFER = {
  "city": {
    "name": `Paris`,
    "location": {
      "latitude": 0,
      "longitude": 0,
      "zoom": 0
    }
  },
  "previewImage": ``,
  "images": [],
  "title": ``,
  "isFavorite": false,
  "isPremium": false,
  "rating": 0,
  "type": `room`,
  "bedrooms": 0,
  "maxAdults": 0,
  "price": 0,
  "goods": [],
  "host": {
    "id": 0,
    "name": ``,
    "isPro": false,
    "avatarUrl": ``
  },
  "description": ``,
  "location": {
    "latitude": 0,
    "longitude": 0,
    "zoom": 0
  },
  "id": 0
};

export const EMPTY_USER = {
  "avatar_url": ``,
  "email": ``,
  "id": 1,
  "is_pro": false,
  "name": ``
};
