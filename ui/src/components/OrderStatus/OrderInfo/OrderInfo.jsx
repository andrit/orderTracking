import React, {Component} from 'react';

import './orderinfo.css';
import {RedTruck, BlueTruck, GreenTruck} from '../../TruckIcons'; 
import {Link} from '../../Link';

class OrderInfo extends Component{
    deliveryStageState=(delstage)=>{
        switch(delstage){
            case 'Ordered':
                return <RedTruck />
            case 'In Transit':
                return <BlueTruck />
            case 'Delivered':
                return <GreenTruck/>
            default:
                return <RedTruck />
        }
        
    }

    render(){
        return(
            <div className="row">
            {/* set a class on whole div based on state of trackerType (delivery, pickup) 
                and state of delivery(ordered, shipping, delivered)*/}
                <div className="col-xs-6">
                    <div className="type-amount-tracker">
                        <h3>{this.props.trackerType}</h3>
                        <p>{this.props.trackerAmt}</p>
                    </div>

                    <div className="trackerDesc">
                        <h2>{this.props.trackerType} {this.props.trackerState} with {this.props.trackerCarrier} on {this.props.trackerEndDate}</h2>
                    </div>

                    <div className="customerInfo">
                        <div className="col-xs-6">
                            <p>{this.props.customerName}</p>
                            <p>{this.props.customerTown}</p>
                        </div>
                        <div className="col-xs-6">
                            <Link 
                                title="view tracking info" 
                                href="#"
                                innerHtml="View Tracking Info" 
                                onClick={this.handleTrackingModal} />
                        </div>
                    </div>
                </div>

                <div className="col-xs-6">
                    <div className="last-checked-timestamp">Last Checked: {this.props.lastCheckedTimeStamp}
                     | <i className="fa fa-reset" onClick={this.rechecktrackerInfo}></i>
                     </div>

                    <div className="tracker-icon">{this.props.trackerIcon}</div>

                    <div className="tracking-number">Tracking Number: {this.props.trackingNumber}</div>
                </div>

            </div>
        )
    }
}

export default OrderInfo;