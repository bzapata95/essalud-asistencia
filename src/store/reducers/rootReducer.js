import authReducer from "./authReducer";
import personalReducer from "./personalReducer";
import searchReducer from "./searchReducer";

import { combineReducers } from "redux";

import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  personal: personalReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  search: searchReducer
});

export default rootReducer;
