import { types } from "../types";

export function getUsers(users) {
  return {
    type: types.GET_USERS,
    payload: users,
  };
}
