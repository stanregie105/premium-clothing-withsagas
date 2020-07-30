import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const stripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_egdbTuXQ99E4PbSZa72aqfQH00MlRAxXFD';


    const onToken=token=>{
        axios({
           url: 'payment',
           method: 'post',
           data:{
               amount: priceForStripe,
               token: token
           }
        }).then(response=>{
            alert('payment successful')
        }).catch(error=>{
            console.log('paymeny error:', JSON.parse(error));
            alert('there was an issue with your payment, please ensure you use the actual credit card');
            
        })
    };
    return (
        <StripeCheckout
         label='Pay Now'
         name='Premium Clothing Ltd.'
         billingAdress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your Total is:$${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
        />
    );

}

export default stripeCheckoutButton;