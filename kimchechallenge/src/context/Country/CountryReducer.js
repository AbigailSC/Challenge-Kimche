import { GET_COUNTRY } from "../countries.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_COUNTRY:
      return {
        ...state,
        country: payload
      }
    default:
      return state;
  }
}