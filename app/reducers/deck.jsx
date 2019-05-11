import { DECK, CARD_DRAW } from "../actions/types.jsx";
import fetchStates from "./fetchStates.jsx";
const DEFAULT_DECK = {
   deck_id: "",
   remaining: 0,
   fetchStates: "",
   message: "",
   cards: [],
};

const deckReducer = (state = DEFAULT_DECK, action) => {
   let remaining, deck_id, cards;
   switch (action.type) {
      case DECK.FETCH_SUCCESS:
         ({ remaining, deck_id } = action);
         return {
            ...state,
            remaining,
            deck_id,
            fetchStates: fetchStates.success,
         };
      case DECK.FETCH_ERROR:
         return {
            ...state,
            message: action.message,
            fetchStates: fetchStates.error,
         };
      case CARD_DRAW.FETCH_SUCCESS:
         ({ cards, remaining } = action);
         return {
            ...state,
            remaining,
            cards,
            fetchStates: fetchStates.success,
         };
      case CARD_DRAW.FETCH_ERROR:
         return {
            ...state,
            message: action.message,
            fetchStates: fetchStates.error,
         };
      default:
         return state;
   }
};

export default deckReducer;
