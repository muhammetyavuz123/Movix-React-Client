export default (state = [], action) => {
  switch (action.type) {
    case "GET_MOVİES":
      return action.payload;

    default:
      return state;
  }
};
