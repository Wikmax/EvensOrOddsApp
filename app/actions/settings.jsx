import {SET_GAME_STARTED, SET_DESCRIPTION_EXPANDED} from './types.jsx';

export const startGame = () => {
    return { type: SET_GAME_STARTED, gameStarted: true };
}
export const cancelGame = () => {
    return { type: SET_GAME_STARTED, gameStarted: false }
}
export const expandDesciption = () => {
    return { type: SET_DESCRIPTION_EXPANDED, descriptionExpanded: true }
}
export const collapseDescription = () => {
    return { type: SET_DESCRIPTION_EXPANDED, descriptionExpanded: false }
}