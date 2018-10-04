import React, {Component} from 'react';

import './orderstatusheader.css';

class OrderStatusHeader extends Component {

    handleViewReceipt=(e)=>{
        e.preventDefault();
        this.props.handleViewReceipt();
    }
    handleStartReturn=(e)=>{
        e.preventDefault();
        this.props.handleStartReturn();
    }
    render(){
        return(
            <div className="row">
                <header className="col-xs-12">
                    <div className="col-sm-9">
                        <h1>Order #{this.props.orderNum}</h1>
                    </div>
                    <div className="col-sm-3">
                        <nav>
                            <ul>
                                <li className="col-xs-6"
                                    onClick={this.handleViewReceipt}>
                                    View Receipt</li>
                                <li className="col-xs-6"
                                    onClick={this.handleStartReturn}
                                >Start Return</li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
    
}

export default OrderStatusHeader;