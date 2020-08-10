import UserActionTypes from './user-types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action)=>{
    let newState;
    switch(action.type){
        case UserActionTypes.SIGNIN_SUCCESS:
            newState = {
                ...state,
                error: null,
                currentUser: action.payload
            }
        break;
        case UserActionTypes.SIGNOUT_SUCCESS:
            newState = {
                ...state,
                error: null,
                currentUser: null
            }
        break;
        case UserActionTypes.SIGNIN_ERROR:
        case UserActionTypes.SIGNOUT_ERROR:
        case UserActionTypes.SIGNUP_ERROR:
            newState = {
                ...state,
                error: action.payload
            }
        break;
        default:
            newState = state;
        break;
    }
    return newState;
};

export default userReducer;