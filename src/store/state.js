import { createStore } from "redux";
import { userReducer } from "./userReducer";

const store = createStore(userReducer);

store.subscribe(() => console.log(store.getState().user));

export default store;
