import {GET_TRACKING_DATA, LOAD_TRACKING_DATA} from '../types/index';
import { combineReducers } from 'redux';

const initState={
    haveCustData:false,
    products:[
        1 :{
            productName: 'Sony TV',
            productQuantity: 1,
            productPrice: "$399.99",
            deliveryStage: 'Ordered',
        },
        
    ],
    trackerType: 'Delivery',
    trackingNumber: 126542411,
    trackerAmt: '1 Delivery',
    trackerState: 'Scheduled',
    trackerCarrier: 'PCR',
    trackerEndDate: '7/8/18',
    customerName: 'Tony Stark',
    customerTown: 'New York, NY',
    lastCheckedTimeStamp: '11:46 am',

}
function invoiceDataReducer(state = initState, action) {
    switch(action.type) {
        case GET_TRACKING_DATA:
            return{
                state: action.data
            };
        case LOAD_TRACKING_DATA:
            return{
                state: action.data
            };
        default: return state;
    }
}

const rootReducer = combineReducers({
    invoiceDataReducer
  })
  
  export default rootReducer;
