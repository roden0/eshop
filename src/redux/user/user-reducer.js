const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action)=>{
    let newState;
    switch(action.type){
        case 'SET_CURRENT_USER':
            newState = {
                ...state,
                currentUser: action.payload
            }
        break;
        default:
            newState = state;
        break;
    }
    return newState;
};

export default userReducer;