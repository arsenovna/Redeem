import { EDIT_PERK } from '../constants/action-types';

const initialState = {
    perk: {}
}

function rootReducer(state = initialState, action){
    if(action.type === EDIT_PERK){
        return Object.assign({}, state, {
            perk: {...state.perk, ...action.payload}
        })
    }
    return state;
}

export default rootReducer;