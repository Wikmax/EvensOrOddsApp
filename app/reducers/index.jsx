import { combineReducers } from "redux";
import settingsReducer from "./settings.jsx";
import deckReducer from "./deck.jsx";
import gameStateReducer from "./gameState.jsx";
export default combineReducers({
   settings: settingsReducer,
   deck: deckReducer,
   gameState: gameStateReducer,
});
