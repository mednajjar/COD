import React, {useState} from 'react'
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
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '80%',
        margin: '1% auto',
        paddingTop: '2%',
        paddingBottom: '2%',
        [theme.breakpoints.down('sm')]: {
          width: '100%', 
        },
      
      
      },
      img:{
        border:'2px solid black',
        background: 'yellow',
    },
    related:{
        width: '10%',
        border: '1px solid black'
    },
    imgSize:{
        width: '100px',
        height: '100px',
        [theme.breakpoints.down('sm')]: {
            width: '70px', 
            height: '70px',
          },
    }
}))
const ProductId = () => {
    const classes = useStyles();
    const {id} = useParams();
    const { addItem } = useCart();
    const [selected, setSelected] = useState("https://images-na.ssl-images-amazon.com/images/I/51qBHRNusSL._AC_SY350_.jpg")
    return (
        <Paper className={classes.paper}>
            {
                itemData.map((item, index)=>
                    (item.id == id) && 
                    <>
        <Grid container lg={8} className="mx-auto bg-light">
                <Grid item xs sm className="p-3 col-6">
                    <ButtonBase className="col-12">
                        <Zoom>
                            <img
                            alt="product"
                            src={selected}
                            width="100%"                     
                            />
                        </Zoom>
                    </ButtonBase>
                    <Grid item className="d-flex justify-content-between mt-2">
                        <ButtonBase className="border">
                            <img className={classes.imgSize} style={{border: selected === "https://images-na.ssl-images-amazon.com/images/I/51qBHRNusSL._AC_SY350_.jpg" ? "2px solid orange" : "none"}} 
                            alt="complex" 
                            src="https://images-na.ssl-images-amazon.com/images/I/51qBHRNusSL._AC_SY350_.jpg"
                            onClick={()=>setSelected("https://images-na.ssl-images-amazon.com/images/I/51qBHRNusSL._AC_SY350_.jpg")} 
                            />
                        </ButtonBase>
                        <ButtonBase className="border">
                            <img className={classes.imgSize} style={{border: selected === "https://sc04.alicdn.com/kf/Hc8c5d0d14f574450a8797e678841a9deU.jpg" ? "2px solid orange" : "none"}} 
                            alt="complex" 
                            src="https://sc04.alicdn.com/kf/Hc8c5d0d14f574450a8797e678841a9deU.jpg"
                            onClick={()=>setSelected("https://sc04.alicdn.com/kf/Hc8c5d0d14f574450a8797e678841a9deU.jpg")} 
                            />
                        </ButtonBase>
                        <ButtonBase className="border">
                            <img className={classes.imgSize} style={{border: selected === "https://m.media-amazon.com/images/I/71hzYEQJftL._AC_SX466_.jpg" ? "2px solid orange" : "none"}} 
                            alt="complex" 
                            src="https://m.media-amazon.com/images/I/71hzYEQJftL._AC_SX466_.jpg"
                            onClick={()=>setSelected("https://m.media-amazon.com/images/I/71hzYEQJftL._AC_SX466_.jpg")} 
                            />
                        </ButtonBase>
                        <ButtonBase className="border">
                            <img className={classes.imgSize} style={{border: selected === "https://i5.walmartimages.com/asr/fbbdea99-387a-4775-9e84-6c67de1a6681.6b070a7b22523d1ee8318efd6dcc9cb5.jpeg" ? "2px solid orange" : "none"}} 
                            alt="complex" 
                            src="https://i5.walmartimages.com/asr/fbbdea99-387a-4775-9e84-6c67de1a6681.6b070a7b22523d1ee8318efd6dcc9cb5.jpeg"
                            onClick={()=>setSelected("https://i5.walmartimages.com/asr/fbbdea99-387a-4775-9e84-6c67de1a6681.6b070a7b22523d1ee8318efd6dcc9cb5.jpeg")} 
                            />
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
                <Grid xs={12} sm={4} md={4} lg={4}>
                    <ButtonBase className="d-flex flex-column p-2">
                        <div className="border p-4">
                            <img className="col-12" alt="complex" src={item.img} />
                        </div>
                        <div className="text-start mt-2"><h5>{item.price} DH</h5><h5>{item.title}</h5></div>
                    </ButtonBase>
                </Grid>
                <Grid xs={12} sm={4} md={4} lg={4}>
                    <ButtonBase className="d-flex flex-column p-2">
                        <div className="border p-4">
                            <img className="col-12" alt="complex" src={item.img} />
                        </div>
                        <div className="text-start mt-2"><h5>{item.price} DH</h5><h5>{item.title}</h5></div>
                    </ButtonBase>
                </Grid>
                <Grid xs={12} sm={4} md={4} lg={4}>
                    <ButtonBase className="d-flex flex-column p-2">
                        <div className="border p-4">
                            <img className="col-12" alt="complex" src={item.img} />
                        </div>
                        <div className="text-start mt-2"><h5>{item.price} DH</h5><h5>{item.title}</h5></div>
                    </ButtonBase>
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
