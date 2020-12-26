import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class Payments extends Component {
    render(){
       
        return(
            <StripeCheckout
            name="Maily"
            description="Rs.5 for 5 email credits"
            amount={500}
            token={ token => this.props.handleToken(token)}
            stripeKey={ process.env.REACT_APP_STRIPE_KEY }>

               <Link><Button variant="dark">Add Credits</Button></Link>   


               
            </StripeCheckout>
        );
    }
}
export default connect (null,actions)(Payments); 