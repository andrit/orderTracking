import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router';
import createHistory from './createHistory';


import InvoiceLookupForm from './components/InvoiceLookupForm';
import OrderStatus from './components/OrderStatus';


const Routes = (props) => {
    return(  <Router history={createHistory}>
                <div>
                  <Route 
                    exact path="/" 
                    render={() => (
                      props.haveCustomerData ? (
                        <Redirect to="/order-status" />
                      ) : (
                        <InvoiceLookupForm />
                      )
                    )}
                    />
                    <Route path="/order-status" component={OrderStatus} />
                </div>
              </Router>
          );
  }

  /*
  <Route 
                    exact path="/" 
                    component={InvoiceLookupForm} />
                  <Route 
                    path="/order_status" 
                    component={OrderStatus} />
                    */
  
//try something like this for this.props.haveCustData
//to render InvoiceLookupForm if false and OrderStatus if true
//then wrap <Routes /> in <Layout/> in app.js
/*
 class ProtectedRoute extends Component {
  render() {
    const { component: Component, ...props } = this.props

    return (
      <Route 
        {...props} 
        render={props => (
          this.state.authenticated ?
            <Component {...props} /> :
            <Redirect to='/login' />
        )} 
      />
    )
  }
}

 const Routes = () => {
  return(  <Switch history={createHistory}>
              <div>
                <Route 
                  exact path="/" 
                  component={InvoiceLookupForm} />
                <Route 
                  path="/order_status" 
                  component={OrderStatus} />
              </div>
            </Switch>
        );
}
*/
  
export default Routes;
  