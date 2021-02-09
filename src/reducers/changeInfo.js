// information object used to feed data into map's info state
const info = [
  {
    name: " India",
    currency: " INR",
    speed: " KMPH",
    distance: " Kilometre",
    volume: " Litre",
    timezone: " UTC +05:30",
  },
  {
    name: " United Kingdom",
    currency: " GBP",
    speed: " MPH",
    distance: " Mile",
    volume: " Gallon",
    timezone: " UTC +00:00",
  },
  {
    name: " United States",
    currency: " USD",
    speed: " MPH",
    distance: " Mile",
    volume: " Gallon",
    timezone: " UTC -05:00",
  },
];

// reducer to handle and return country information based on map loaded
const changeInfo = (state = info[0], action) => {
  switch (action.type) {
    case "INFO":
      if (action.payload === "india") return info[0];
      if (action.payload === "uk") return info[1];
      return info[2];
    default:
      return state;
  }
};

export default changeInfo;
