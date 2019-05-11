import { DECK, CARD_DRAW } from "./types.jsx";

export const fetchDeckSuccess = deckJson => {
   const { remaining, deck_id } = deckJson;
   return { type: DECK.FETCH_SUCCESS, remaining, deck_id };
};
export const fetchDeckError = error => {
   return { type: DECK.FETCH_ERROR, message: error.message };
};
export const fetchNewDeck = () => dispatch => {
   return fetch(
      "https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle",
   )
      .then(Response => {
         if (Response.status !== 200) {
            throw new Error("Unsuccessful request to deckofcardsapi.com");
         }
         return Response.json();
      })
      .then(json => dispatch(fetchDeckSuccess(json)))
      .catch(error => dispatch(fetchDeckError(error)));
};
export const fetchDrawCard = deck_id => dispatch => {
   return fetch(
      `https://deck-of-cards-api-wrapper.appspot.com/deck/${deck_id}/draw`,
   )
      .then(Response => {
         if (Response.status !== 200) {
            throw new Error("Unsuccessful request to deckofcardsapi.com");
         }
         return Response.json();
      })
      .then(json =>
         dispatch({
            type: CARD_DRAW.FETCH_SUCCESS,
            cards: json.cards,
            remaining: json.remaining,
         }),
      )
      .catch(error =>
         dispatch({
            type: CARD_DRAW.FETCH_ERROR,
            message: error.message,
         }),
      );
};
