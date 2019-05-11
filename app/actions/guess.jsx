import { SET_GUESS } from "./types.jsx";

export const setGuessEven = () => {
   return { type: SET_GUESS, guess: "even" };
};
export const setGuessOdd = () => {
   return { type: SET_GUESS, guess: "odd" };
};
