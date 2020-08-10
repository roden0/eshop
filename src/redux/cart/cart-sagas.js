import { all, call, takeLatest, put } from 'redux-saga/effects';
import { emptyCart } from './cart-actions';
import UserActionTypes from '../user/user-types';

function* emptyUserCart(){
    yield put(emptyCart());
}

function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGNOUT_SUCCESS, emptyUserCart);
}

export function* cartSagas(){
    yield all([
        call(onSignOutSuccess)
    ])
}
