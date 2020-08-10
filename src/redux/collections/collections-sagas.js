import { takeLatest, call, put, all } from 'redux-saga/effects';
import CollectionsActionTypes from './collections-types';
import { fetchCollectionsSuccess, fetchCollectionsError } from '../../redux/collections/collections-actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export function* fetchCollectionsAsync() {
    try {
      const collectionRef = firestore.collection('collections');
      const snapshot = yield collectionRef.get();
      const collectionsMap = yield call(
        convertCollectionsSnapshotToMap,
        snapshot
      );
      yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
      yield put(fetchCollectionsError(error.message));
    }
  }
  
  export function* fetchCollectionsStart() {
    yield takeLatest(
        CollectionsActionTypes.FETCH_COLLECTIONS_START,
      fetchCollectionsAsync
    );
  }
  
  export function* collectionsSagas() {
    yield all([call(fetchCollectionsStart)]);
  }