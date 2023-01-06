import { combineReducers } from "@reduxjs/toolkit";
import users from "./users";

const rootReducer = combineReducers({
  users:users,
});

export default rootReducer;
