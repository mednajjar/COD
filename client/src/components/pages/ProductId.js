import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {useParams} from 'react-router-dom';
import itemData from '../layouts/Data';
import {Link} from 'react-router-dom';
import { useCart } from "react-use-cart";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const useStyles = makeStyles((theme) => ({
    paper: {
        width: '80%',
        margin: '1% auto',
        paddingTop: '2%',
        paddingBottom: '2%',
        [theme.breakpoints.down('sm')]: {
          width: '100%', 
        },
       img:{
           border:'2px solid black',
           background: 'yellow',
       },
       related:{
           width: '10%',
           border: '1px solid black'
       }
      
      }
}))
const ProductId = () => {
    const classes = useStyles();
    const {id} = useParams();
    const { addItem } = useCart();

    return (
        <Paper className={classes.paper}>
            {
                itemData.map((item, index)=>
                    (item.id == id) && 
                    <>
        <Grid container lg={8} className="mx-auto bg-light">
                <Grid item xs sm className="p-3 col-6">
                    <ButtonBase className="col-12">
                    <img className="col-12" alt="complex" src={item.img} />
                    </ButtonBase>
                    <Grid item className="d-flex justify-content-between mt-2">
                        <ButtonBase className="border border-primary">
                            <img className="col-12" alt="complex" src={item.img} />
                        </ButtonBase>
                        <ButtonBase className="border">
                            <img className="col-12" alt="complex" src={item.img} />
                        </ButtonBase>
                        <ButtonBase className="border">
                            <img className="col-12" alt="complex" src={item.img} />
                        </ButtonBase>
                        <ButtonBase className="border">
                            <img className="col-12" alt="complex" src={item.img} />
                        </ButtonBase>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm container className="p-3">
                    <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                        {item.title} {item.id}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        {item.price} DH
                        </Typography>
                        <hr></hr>
                        <Typography variant="body2" color="textSecondary">
                        {item.description}
                        </Typography>
                    <div className="d-flex justify-content-between mt-5">
                        <Link to='/' className="btn btn-warning col-5 fw-bold ">Reteur</Link>
                        <button className="btn col-5 text-white fw-bold" style={{background: '#278BE3'}} onClick={()=>addItem(item)}>Ajouter <ShoppingCartIcon/></button>
                    </div>
                    </Grid>
                    </Grid>
                </Grid>
        </Grid>
        <Grid xs={11} sm={11} lg={8} className="mx-auto mt-4">
            <h4>Description</h4>
            <hr></hr>
            <Typography>
                {item.full_description}
            </Typography>
        </Grid>
        <Grid xs={11} sm={11} lg={8} className="mx-auto mt-4">
            <h4>Les produits peuvent intéresser</h4>
            
            <Grid className="border p-2 d-flex flex-wrap justify-content-between">
                <Grid xs={12} sm={12} md={3} lg={4} className="d-flex flex-column p-2">
                    <div className="border p-4">
                        <img className="col-12" alt="complex" src={item.img} />
                    </div>
                    <div className="text-start mt-2"><h5>{item.price} DH</h5><h5>{item.title}</h5></div>
                </Grid>
                <Grid xs={12} sm={12} md={3} lg={4} className="d-flex flex-column p-2">
                    <div className="border p-4">
                        <img className="col-12" alt="complex" src={item.img} />
                    </div>
                    <div className="text-start mt-2"><h5>{item.price} DH</h5><h5>{item.title}</h5></div>
                </Grid>
                <Grid xs={12} sm={12} md={3} lg={4} className="d-flex flex-column p-2">
                    <div className="border p-4">
                        <img className="col-12" alt="complex" src={item.img} />
                    </div>
                    <div className="text-start mt-2"><h5>{item.price} DH</h5><h5>{item.title}</h5></div>
                </Grid>
                
            </Grid>
        </Grid>
            </>
       )
   }
     

        </Paper>
    )
}

export default ProductId
