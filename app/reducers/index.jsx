import { SET_GAME_STARTED, SET_DESCRIPTION_EXPANDED } from '../actions/types.jsx';

const DEFAULT_SETTINGS = {
    gameStarted: false,
    descriptionExpanded: false
};

const rootReducer = (state = DEFAULT_SETTINGS, action) => {
    switch (action.type) {
        case SET_GAME_STARTED:
            return { ...state, gameStarted: action.gameStarted };
        case SET_DESCRIPTION_EXPANDED:
            return {
                ...state, descriptionExpanded: action.descriptionExpanded
            };
        default:
            return state;
    }
};

export default rootReducer;