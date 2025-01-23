import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  userData: "",
  allEvents: [],
};

const Slice = createSlice({
  name: "techkilla",
  initialState,
  reducers: {
    // user data
    UserDataReducer: (state, action) => {
      const data = {
        id: nanoid(),
        user: action.payload,
      };
      state.userData = data;
    },

    // all events
    AllEventsReducer: (state, action) => {
      const data = {
        id: nanoid(),
        allEvents: action.payload,
      };
      state.allEvents = data.allEvents;
    },
  },
});

export const { UserDataReducer, AllEventsReducer } = Slice.actions;
export default Slice.reducer;
