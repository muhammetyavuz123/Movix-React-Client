export default (state = {}, action) => {
  switch (action.type) {
    case "GET_MOVİE":
      return action.payload;

    default:
      return state;
  }
};
