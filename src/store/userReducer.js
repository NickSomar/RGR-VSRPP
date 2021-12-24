import { userActionsTypes } from "./userActions";

const initialState = {
  user: [null],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionsTypes.ADD_NEW_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
