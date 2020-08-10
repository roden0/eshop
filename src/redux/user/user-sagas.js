import { takeLatest, all, call, put } from 'redux-saga/effects';
import { signInSuccess, 
    signInError, 
    signOutSuccess, 
    signOutError,
    signUpSuccess,
    signUpError } from './user-actions';
import UserActionTypes from './user-types';

import { 
    auth, 
    googleProvider, 
    createUserProfileDocument, 
    checkAuth } from '../../firebase/firebase.utils';

function* getUserSnapFromAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(
        createUserProfileDocument,
        userAuth,
        additionalData
        );
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInError(error));
    }
}

function* checkSession(){
    try {
        const userAuth = yield checkAuth();
        if (!userAuth) return;
        yield getUserSnapFromAuth(userAuth);
    } catch (error) {
        yield put(signInError(error));
    }
}


function* signOutUser(){
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutError(error));
    }
}

export function* signInWithGoogle(){
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getUserSnapFromAuth(user);
    } catch (error) {
        yield put(signInError(error));
    }
}

export function* signInWithEmail({payload:{email,password}}){
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getUserSnapFromAuth(user);
    } catch (error) {
        yield put(signInError(error));
    }
}

function* signUpUser({payload:{email, password, displayName}}){
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({
            user,
            additionalData: { displayName }
        }));
    } catch (error) {
        yield put(signUpError(error));  
    }
}

function* setSignedUpUser({ payload: { user, additionalData } }){
    yield getUserSnapFromAuth(user, additionalData)
}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGNUP_SUCCESS, setSignedUpUser)
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGNUP_START, signUpUser)
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle)
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail)
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkSession)
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGNOUT_START, signOutUser)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(checkSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}
