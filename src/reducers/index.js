// import { combineReducers } from 'redux';
import settingsReducer from "./settings";
import deckReducer from "./deck";

export default {
  deck: deckReducer,
  settings: settingsReducer,
};
