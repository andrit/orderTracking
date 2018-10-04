import React, {Component} from 'react';
import OrderStatusHeader from './OrderStatusHeader';
import OrderInfo from './OrderInfo';
import OrderTimeline from './OrderTimeline';
import OrderProducts from './OrderProducts';
//connect redux here so we can have all the state in global layer
import {connect} from 'react-redux';
import {loadTrackingData} from '../../../redux/actions';

class OrderStatus extends Component{
    componentDidMount=()=>{
        //get state from dispatch redux action
        this.props.loadTrackingData();
    }
    render(){
        return(
            <React.Fragment>
                <OrderStatusHeader trackingNumber={this.props.trackingNumber} />
                <OrderInfo 
                    trackerType={this.props.trackertype}
                    trackerAmt={this.props.trackerAmt}
                    trackerState={this.props.trackerState}
                    trackerCarrier={this.props.trackerCarrier}
                    trackerEndDate={this.props.trackerEndDate}
                    customerName={this.props.customerName}
                    customerTown={this.props.customerTown}
                    lastCheckedTimeStamp={this.props.lastCheckedTimeStamp}
                    trackerIcon={this.props.products.deliveryStage}
                    trackingNumber={this.props.trackingNumber}
                    />
                <OrderTimeline trackerState={this.props.products.deliveryStage} />
                <OrderProducts productsToList={this.props.products} />
            </React.Fragment>
            

        )
    }
}

const mapState = (state) => {
    return state;
}
const mapDispatch = (dispatch) => {
    return {
        loadTrackingData: () => dispatch(loadTrackingData()),
    };
}

export default connect(mapState, mapDispatch)(OrderStatus);