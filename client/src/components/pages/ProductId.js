import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import {useParams} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '80%',
        margin: '1% auto',
        paddingTop: '2%',
        paddingBottom: '2%',
        [theme.breakpoints.down('sm')]: {
          width: '100%', 
        },
      }
}))
const ProductId = () => {
    const classes = useStyles();
    const {id} = useParams();
    return (
        <Paper className={classes.paper}>
            <h2 className="text-center">ProductId page</h2>
            <div className="d-flex justify-content-around mt-5">
            <div>
                <h1>product page id number {id}</h1>
            </div>
            </div>
        </Paper>
    )
}

export default ProductId
