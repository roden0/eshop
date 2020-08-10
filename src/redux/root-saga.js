import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user-sagas';
import { cartSagas } from './cart/cart-sagas';
import { collectionsSagas } from './collections/collections-sagas';

export default function* rootSaga(){
    yield all([
        call(collectionsSagas),
        call(userSagas),
        call(cartSagas)
    ])
};