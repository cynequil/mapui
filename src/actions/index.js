// file containing all the actions available to dispatch
export const toggle = () => {
  return {
    type: "TOGGLE",
  };
};

export const changeMap = (payload) => {
  return {
    type: "CHANGE",
    payload,
  };
};

export const changeInfo = (payload) => {
  return {
    type: "INFO",
    payload,
  };
};
