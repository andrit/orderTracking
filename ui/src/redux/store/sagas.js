import { takeEvery} from 'redux-saga/lib/effects';
//takeLatest will overwrite exiting with latest, takeEvery will not
import * as TYPES from '../types';

import {/*fetchPerson, fetchPlanets*/ takeAll } from '../actions';

function* mySaga() {
   /* yield all([
        takeEvery(TYPES.FETCH_STAR_WARS_REQUEST, fetchPerson),
        takeEvery(TYPES.FETCH_STAR_WARS_PLANET_REQUEST, fetchPlanets)
    ]);*/
    yield takeEvery(TYPES.LOAD_INVOICE_DATA, takeAll)
}

export default mySaga;
