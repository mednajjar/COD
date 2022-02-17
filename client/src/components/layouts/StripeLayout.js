import React from 'react'
import {Grid, Typography} from '@material-ui/core'

import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY)

const StripeLayout = ({title, children}) => {
    return (
        <Grid>
            <Typography>{title}</Typography>
            <Elements stripe={stripePromise}>
                {children}
            </Elements>
        </Grid>
    )
}

export default StripeLayout
