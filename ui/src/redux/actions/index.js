import {LOAD_TRACKING_DATA, GET_TRACKING_DATA, CHECK_INVOICE_VALID} from '../types/index';

import { call, put, take, actionChannel } from 'redux-saga/lib/effects';

//call, take, race, all 
//put, select, throttle, fork, spawn, cancel are all async event

//list data for view
export function loadTrackingData(data) {
    return {
        type: LOAD_TRACKING_DATA, 
        data
    };
}
//get data from server and put it into state
export function getTrackingData(data) {
    return {
        type: GET_TRACKING_DATA, 
        data
    };
}
export function checkInvoiceValid(truth) {
    return {
        type: CHECK_INVOICE_VALID,
        truth
    };
}


export function* takeAll() {
    const checkIt = yield actionChannel(CHECK_INVOICE_VALID);

    //can we use this to check that it is good call first, then use the call below to gather the data
   /* const chan = yield actionChannel(TYPES.QUEUE_CHANNEL_REQUESTS)


    for(let i =1; i>=1; i++){
        yield take(chan);
        yield call(api, 'https://swapi.co/api/people');
        yield put({type: TYPES.FETCH_STAR_WARS_SUCCESS, data: i})
    }
    */
   yield;
}