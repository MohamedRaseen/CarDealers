import { put, takeLatest, all } from 'redux-saga/effects';
import appConstants from '../static/static';

const carDealers = () => new Promise(resolve => setTimeout(resolve(appConstants.CAR_DEALERS_DATA), 2000));

function* getCarDetails() {
    let data = yield carDealers();
    yield put({ type: appConstants.UPDATE_CAR_DEALERS, data });
}

export default function* rootSaga() {
    yield all([
        yield takeLatest(appConstants.GET_CAR_DEALERS, getCarDetails)
    ]);
}