import React, { Component } from 'react';
//import { Route, Redirect } from 'react-router';
//import createHistory from './createHistory';

import './App.css';
import Layout from './components/Layout';
//import InvoiceLookupForm from './components/InvoiceLookupForm';
//import OrderStatus from './components/OrderStatus';
import FormContainer from './containers/InvoiceData'; 
import Routes from './Routes';
import {deliverydataroute, postCorsResObj} from './utilities/ajaxroutes';
import {loadJson} from './utilities/fetchItems';


class App extends Component {
/*
  state={
    haveCustData: false,
    customer:{
      customerName: null,
      customerStreetName: null,
        OrderInfo: {
          invoicenumber: null,

        },
    },
  }

  fillInCustomerData = (data) => {
      let ajaxurl = deliverydataroute + '?' + data;

      loadJson(ajaxurl, postCorsResObj)
          .then((items) => {

            // data.map((item, i) => {

              // return( 
                  this.setState({
                    customer:{
                      customerName: items.custname,
                      customerStreetName: items.custstreet,
                      OrderInfo:{
                        invoiceNumber:items.invnum,
                      },
                    },
                  })
              // );

              //});

          })
          .catch(err => alert(err));
    
  }*/
  
  /*checkHaveCustData = (status) => {
      this.setState({
        haveCustData: status
      }); 
  }*/
  render() {
    return (
      <Layout>
        <FormContainer>
          <Routes></Routes>
        </FormContainer>
      </Layout>
    );
  }
}




export default App;
