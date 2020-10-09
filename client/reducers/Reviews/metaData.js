import Redux from "redux";

const initialState = {
  ratings: {},
  characteristics: {
    Comfort: { id: 3, value: "1" },
    Fit: { id: 1, value: "1" },
    Length: { id: 2, value: "1" },
    Quality: { id: 4, value: "1" }
  },
  recommended: {}
};
const metaDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_META_DATA":
      return action.metaData;
    default:
      return state;
  }
};
export default metaDataReducer;
