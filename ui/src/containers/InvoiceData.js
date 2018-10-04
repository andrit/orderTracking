import React from 'react';
import {connect} from 'react-redux';

import {loadInvoiceData, checkInvoiceValid } from '../redux/actions';

const Order = (props) => {
    return (
    <React.Fragment>
        {props.children}
    </React.Fragment>
    );
};

const mapState = (state) => {
    return state;
}
const mapDispatch = (dispatch) =>  (
        {
            loadInvoiceData: () => dispatch(loadInvoiceData()),
            checkInvoiceValid: () => dispatch(checkInvoiceValid())
        }
    );      

const FormContainer = connect(mapState, mapDispatch)(Order);

export default FormContainer;