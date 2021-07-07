import { ADD_BOOK } from "./enum";

let initialState = {
  data: [
    {
      first_name: "Vinay",
      last_name: "Rajput",
      phone_number: "8888999988"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
