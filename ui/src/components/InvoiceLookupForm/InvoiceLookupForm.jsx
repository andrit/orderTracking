import React, {Component} from 'react';
//import axios from 'axios';
//prop-types
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';


import './invoicelookupform.css';

import FormInput from '../FormInput';
import ButtonRed from '../ButtonRed';
import {invoicelookuproute, postCorsResObj} from '../../utilities/ajaxroutes';
import {loadJson} from '../../utilities/fetchItems';


let validationarr =[];
class InvoiceLookupForm extends Component{
    state={
        invnumber: null,
        email: null,
        phone: null,
        invoiceInvalid: false,
        emailInvalid: false,
        phoneInvalid: false,
        formValid: false,
        formInvalid: false,
        invoiceValid: false,
        //submitClicked: false
    }

    static propTypes={
        checkInvoiceValid: PropTypes.func,
        getInvoiceData: PropTypes.func
    }

    
    handleInvnumberUpdate=(inv)=>{
        this.setState({
            invnumber: inv,
            formInvalid: false,
            invoiceInvalid: false
        })
    }
    handleEmailUpdate=(email)=>{
        this.setState({
            email,
            formInvalid: false,
            emailInvalid: false
        })
    }
    handlePhoneUpdate=(phone)=>{
        this.setState({
            phone,
            formInvalid: false,
            phoneInvalid: false
        })
    }

    validateInvoice=(value)=>{
        console.log('validating invoice ', value);
        const invRegex = /^[0-9]{1}[-][0-9]{7}$/;
        if(this.state.invnumber !== null){
            console.log('validating invoice nullcheck', value);
            if(value.match(invRegex)){
                console.log('validating invoice regex match ', value);
                this.setState({
                    invoiceInvalid: false, 
                    invoiceValid: true
                });
               // validationarr.push('invoicegood');
            } else {
                console.log('validating invoice match fail ', value);
                this.setState({
                     invoiceInvalid: true
                });
            }
        } else {
            console.log('validating invoice nulcheck fail ', value);
                    this.setState({
                        invoiceInvalid: true
                    });
                }
                console.log('validated invnumber End state ', this.state.invnumber);
                console.log('validated invnumber End flag ', this.state.invoiceInvalid);
    }

    validateEmail=(value)=>{
        console.log('validating email ', value);
        const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(this.state.email !== null){
            if(value.match(emailRegex)){
                this.setState({
                    emailInvalid: false
                });
               // validationarr.push('emailgood');
            } else {
                this.setState({
                    emailInvalid: true
                });
            }
        } else {
            this.setState({
                emailInvalid: true
            });
        } 
        console.log('validated email state ', this.state.email);     
        console.log('validated email flad ', this.state.emailInvalid);     
    }

    validatePhone=(value)=>{
        console.log('validating phone ', value);
        const phoneRegex = /^[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if(this.state.phone !== null){
            if(value.match(phoneRegex)){
                this.setState({
                     phoneInvalid:false
                });
               // validationarr.push('phonegood');
            } else {
                this.setState({
                    phoneInvalid:true
                });
            }
        } else {
            this.setState({
                phoneInvalid:true
            });
        }
        console.log('validated phone state ', this.state.phone);
        console.log('validated phone flag ', this.state.phoneInvalid);
        
    }

    startValidation = () =>{
        let invnum = this.state.invnumber;
        let emailstate= this.state.email;
        let phonestate= this.state.phone;

        console.log('startValidation');
        this.validateInvoice(invnum);
        this.validateEmail(emailstate);
        this.validatePhone(phonestate);
        

        console.log('in startValidation invoice: ', this.state.invoiceInvalid);
        console.log('in startValidation email: ', this.state.emailInvalid);
        console.log('in startValidation phone: ', this.state.phoneInvalid);

    }

    checkFormValidated = () => {
     
            console.log('Form Validation');
            console.log('in Form Validation, validation arr', validationarr);
            console.log('in Form Validation, validation arr length', validationarr.length);
            if(validationarr.length = 3){
                this.setState({
                    formValid: true
                })
            } else {
                console.log('Form Validation in Fail');
                console.log('Form Validation in Fail invoiceflag: ', this.state.invoiceInvalid);

                this.setState({
                    formValid:false
                })
            }
       
        }

    /*sendDataPromise = () => {
            console.log('in send data validation arr', validationarr);
            console.log('in send data validation arr length', validationarr.length);
            console.log('sendData Start', this.state.formValid);
            //invoke redux actions
            //this.props.checkInvoiceValid()  //if form comes back valid, go next() and let the saga get us the data...

            let invalid = this.state.invoiceValid;
            
            //any need for this? if we ccheck and it passes...
            //set it to validate onChange of form fiel and enable the button
            //finish the check with server
            if(this.state.invoiceValid){
            //if(this.state.formValid){
                console.log('sendData Pass');
                //just a lookup with a boolean response along with 
                //identifying data for invoice, 
                //like the invoice back again, with customer name?
                let ajaxurl = invoicelookuproute || 'http://localhost:3000';

                loadJson(ajaxurl, postCorsResObj)
                    .then(data => {
                        //let results = response.json();
                        console.log(data);
                        //return user name or userinvoice to the parent element to 
                        //run the ajax look up on it and get all info
                       // this.props.fillInCustomerData(data.name);
                    })
                    .then(() => {
                        console.log('redirecter');
                        withRouter(
                            ({history}) => {
                                history.push("/order_status");
                            }
                        )
                        
                    })
                    .catch((error) => {
                       // this.props.checkHaveCustData('false');
                        console.log(error);
                    });
            } else {
                console.log('invoicevalid state fail', invalid);
               
                this.setState({
                    formInvalid: true
                })
            }

    }*/

    sendDataPromise = () => {

            let ajaxurl = invoicelookuproute || 'http://localhost:3000';

            loadJson(ajaxurl, postCorsResObj)
                .then(data => {
                    console.log('ajax data: ', data);
                    this.props.getInvoiceData(data)
                })
                .then( this.props.checkInvoiceValid(true))
                .catch((error) => {
                    console.log(error);
                });

}

    handleButtonSubmit=()=>{
        console.log('buttonClicked');
        const buttonSubmit = new Promise((res, rej) => {
            try{
               /* this.setState({
                    submitClicked: true
                })*/
                this.startValidation()
            }
            catch(err){
                rej(err)
            }
        });

        buttonSubmit
           // .then(this.checkFormValidated())
            .then(this.sendDataPromise());
    }

    render(){
        
        return(
            <React.Fragment>
            <form className="invoice-lookup-form">
                <header className="form-header">  
                    <h1>Check Your Order Status</h1>
                    <h3>Check the status, information and tracking for your order</h3>
                </header>
                <FormInput 
                    updateField = {this.handleInvnumberUpdate} 
                    fieldValue={this.state.invnumber} 
                    id="value"
                    name="Order/Invoice Number" 
                    hasInfoToolTip="false"
                    inputHasError={this.state.invoiceInvalid} />
                   
                <FormInput 
                    updateField = {this.handleEmailUpdate} 
                    fieldValue={this.state.email} 
                    id="email"
                    name="Email" 
                    hasInfoToolTip="false"
                    inputHasError={this.state.emailInvalid}/>
                <FormInput 
                    updateField = {this.handlePhoneUpdate} 
                    fieldValue={this.state.phone} 
                    id="phone"
                    name="Phone"   
                    hasInfoToolTip="false"
                    inputHasError={this.state.phoneInvalid}/>

                <ButtonRed 
                    handleButtonSubmit={this.handleButtonSubmit}>
                        Get Order Status</ButtonRed>
                
                {this.state.formInvalid && <p className="error-msg">Sorry there was a problem with what you entered into the form. Please check your info and resubmit.</p> }
            </form>
            </React.Fragment>

        )
    }
}

export default InvoiceLookupForm;