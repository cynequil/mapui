// reducer to change map's state for changing map's view
const changeMap = (state = "india", action) => {
  switch (action.type) {
    case "CHANGE":
      return action.payload;
    default:
      return state;
  }
};

export default changeMap;
