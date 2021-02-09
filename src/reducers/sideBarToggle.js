// reducer to handle sidebar toggle action and return new state accordingly
const sideBarToggle = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
};

export default sideBarToggle;
