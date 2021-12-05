// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import authSlice from "./auth";

// export const INCREMENT = 'increment'

const store = configureStore({
  // reducer: counterSlice.reducer,
  reducer: { counter: counterSlice, auth: authSlice },
});

export default store;

// only use redux

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       show: state.show,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.payload,
//       show: state.show,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       show: state.show,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       show: !state.show,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
