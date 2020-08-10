import UserActionTypes from './user-types';

export const signUpStart = (credentials)=>({
    type: UserActionTypes.SIGNUP_START,
    payload: credentials
});

export const signUpSuccess = (userData)=>({
    type: UserActionTypes.SIGNUP_SUCCESS,
    payload: userData
});

export const signUpError = (err)=>({
    type: UserActionTypes.SIGNUP_ERROR,
    payload: err
});

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGNIN_START
});

export const emailSignInStart = credentials => ({
    type: UserActionTypes.EMAIL_SIGNIN_START,
    payload: credentials
});

export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGNIN_SUCCESS,
    payload: user
});

export const signInError = (err) => ({
    type: UserActionTypes.SIGNIN_ERROR,
    payload: err
});

export const checkUserSession = ()=> ({
    type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = ()=> ({
    type: UserActionTypes.SIGNOUT_START
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGNOUT_SUCCESS
});

export const signOutError = (err) => ({
    type: UserActionTypes.SIGNOUT_ERROR,
    payload: err
});