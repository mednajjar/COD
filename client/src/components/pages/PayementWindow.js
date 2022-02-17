import React,{useState} from 'react'
import {DialogTitle,
 DialogContentText,
  DialogContent,
   DialogActions,
    Dialog,
     TextField,
      Button,
       Grid,
        Typography,
        Checkbox,
        FormControlLabel} from '@material-ui/core'
import {useDispatch} from 'react-redux';
import {packVendeur} from '../../redux/slices/vendeurSlice';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import axios from 'axios';
axios.defaults.withCredentials = true;

const PayementWindow = ({open, handleClose, handleClickOpen, pack, price, title}) => {
    const dispatch = useDispatch();
    const stripe = useStripe();
    const elements = useElements();
     const [billingDetails, setBillingDetails] = useState({
        name: '',
        email: '',
        city: '',
        line1: '',
        state: '',
        postal_code: 0,
    }) 

const handleFormSubmit = async (e)=>{
    e.preventDefault();
   
const {data: clientSecret} = await axios.post('http://localhost:5000/api/payPack', {
    amount: price * 100
})
const cardElement = elements.getElement(CardElement)
const BillingDetails = {
        name: billingDetails.name,
        email: billingDetails.email,
        address:{
        city: billingDetails.city,
        line1: billingDetails.line1,
        state: billingDetails.state,
        postal_code: billingDetails.postal_code,

        } 
    }
const paymentMethodReq = await stripe.createPaymentMethod({
    type: 'card',
    card: cardElement,
    billing_details: BillingDetails
});
console.log('payment', paymentMethodReq)
const confirmedCardPayment = await stripe.confirmCardPayment(clientSecret,{
    payment_method: paymentMethodReq.paymentMethod.id
})
if(confirmedCardPayment) dispatch(packVendeur({pack}))

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

console.log('card element', elements)
    return (
        <div>
     
      <Dialog open={open} onClose={handleClose}>
      {elements ? (
        <Grid component="form" validate onSubmit={handleFormSubmit} >
        <DialogTitle>{title} {pack}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally. {price}
          </DialogContentText>
            <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="name"
            variant="standard"
            onChange={(e)=>setBillingDetails({...billingDetails, name: e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            onChange={(e)=>setBillingDetails({...billingDetails, email: e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="line1"
            name="line1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e)=>setBillingDetails({...billingDetails, line1: e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(e)=>setBillingDetails({...billingDetails, city: e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={(e)=>setBillingDetails({...billingDetails, state: e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="postal_code"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(e)=>setBillingDetails({...billingDetails, postal_code: e.target.value})}
          />
        </Grid>
        <Grid item xs={12} style={{marginTop: '15px'}}>
            <CardElement options={cardElementOptions}/>
        </Grid>
      </Grid>
        </DialogContent>
        <DialogActions style={{marginTop: '20px'}}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>

        </Grid>
      ) : <Typography style={{padding: '10px'}}>Loading...</Typography>}
      
      </Dialog>
        </div>
    )
}

export default PayementWindow
