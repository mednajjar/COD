import React from 'react'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import axios from 'axios';
axios.defaults.withCredentials = true;

const CheckoutForm = ({price, onSuccessfulCheckout}) => {
    const stripe = useStripe();
    const elements = useElements();
const handleFormSubmit = async (e)=>{
    e.preventDefault();
    const billingDetails = {
        name: 'name',
        email: 'name@example.com',
        address:{
        city: 'casa',
        line1: 'bla bla bla',
        state: 'kjhk',
        postal_code: 432432,

        } 
    }
const price = 30;
const {data: clientSecret} = await axios.post('http://localhost:5000/api/payPack', {
    amount: price * 100
})
const cardElement = elements.getElement(CardElement)

const paymentMethodReq = await stripe.createPaymentMethod({
    type: 'card',
    card: cardElement,
    billing_details: billingDetails
});
const confirmedCardPayment = await stripe.confirmCardPayment(clientSecret,{
    payment_method: paymentMethodReq.paymentMethod.id
})
console.log('payment', confirmedCardPayment)
}
const cardElementOptions ={
    style:{
        base:{
            fontSize: '16px',
            color: '#000',
            "::placeholder":{
                color: 'gray'
            }
        },
        invalid:{
            color:'red',
            iconColor: 'red'
        }
    },
    hidePostalCode: true,
}
    return (
        <div>
        <form onSubmit={handleFormSubmit}>
            <div>
            <CardElement options={cardElementOptions}/>
            </div>
            <button type="submit">pay 30 MAD</button>
        </form>
        </div>
    )
}

export default CheckoutForm
