import React, {Component} from 'react';

import './orderproducts.css';

import {RedTruck, BlueTruck, GreenTruck} from '../../TruckIcons'; 

class OrderProducts extends Component{
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
        let productList = this.props.productsToList;

        return(
            <React.Fragment>
                {productList.map((product, i) => {
                        <div className="product-listing row" key={i}>
                            <div className="col-sm-2 prod-image"></div>
                            <div className="col-sm-4">
                                <h3>{product.productName}</h3>
                                <p>Qty: {product.productQuantity}</p>
                                <p className="link-style" onClick={this.viewGuide}>View Manual/Guides</p>
                            </div>
                            <div className="col-sm-3">
                                <p className="product-price">{product.productPrice}</p>
                            </div>
                            <div className="col-sm-3">
                                <p>{this.deliveryStageState(product.deliveryStage)}</p>
                                <p>{product.deliveryStage}</p>
                            </div>
                        </div>
                    })
                }

            </React.Fragment>
    )
    }
}

export default OrderProducts;