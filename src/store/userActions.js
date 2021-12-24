export const userActionsTypes = {
  ADD_NEW_USER: "USERS.ADD_NEW_USER",
};

export const userActions = {
  addNewUser: (data) => ({
    type: userActionsTypes.ADD_NEW_USER,
    payload: data,
  }),
};
