import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {useParams} from 'react-router-dom';
import itemData from '../layouts/localData/Data';
import {Link} from 'react-router-dom';
import { useCart } from "react-use-cart";
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import pro1 from '../../assets/images/pro-1.png';
import pro2 from '../../assets/images/pro-2.jpg';
import pro3 from '../../assets/images/pro-3.jpg';
import pro4 from '../../assets/images/pro-4.jpg';
import pro5 from '../../assets/images/pro-5.jpg';


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
    const { category, allProducts } = useSelector(state => state.vendeur)

    const { addItem } = useCart();
    const [selected, setSelected] = useState()
    const [data, setdata] = useState([])
    useEffect(()=>{
        allProducts && allProducts.map((item, index)=>{
            if(item._id == id){
                setSelected(item.imgPrincipal) 
            } 
        })
    },[allProducts])


    console.log('img', selected)
    console.log('images', data)

    return (
        <Paper className={classes.paper}>
            {
                allProducts && allProducts.map((item, index)=>
                    (id === item.id) &&
                    <>
        <Grid container lg={8} className="mx-auto bg-light">
                <Grid item xs sm className="p-3 col-6">
                    <ButtonBase className="col-12">
                        <Zoom>
                            <img
                            alt="product"
                            src={__dirname + selected}
                            width="100%"                     
                            />
                        </Zoom>
                    </ButtonBase>
                    <Grid item className="d-flex justify-content-between mt-2">
                    <ButtonBase className="border">
                            <img className={classes.imgSize} style={{border: selected === item.imgPrincipal ? "2px solid orange" : "none"}} 
                            alt="complex" 
                            src={__dirname + item.imgPrincipal}
                            onClick={()=>setSelected(item.imgPrincipal)} 
                            />
                        </ButtonBase>
                        {
                            item.images && item.images.map((res, i)=>(
                            <ButtonBase className="border">
                                <img className={classes.imgSize} style={{border: selected === res.filePath ? "2px solid orange" : "none"}} 
                                alt="complex" 
                                src={__dirname + res.filePath}
                                onClick={()=>setSelected(res.filePath)} 
                                />
                            </ButtonBase>
                            ))
                        }
                        
                        {/* <ButtonBase className="border">
                            <img className={classes.imgSize} style={{border: selected === pro3 ? "2px solid orange" : "none"}} 
                            alt="complex" 
                            src={pro3}
                            onClick={()=>setSelected(pro3)} 
                            />
                        </ButtonBase>
                        <ButtonBase className="border">
                            <img className={classes.imgSize} style={{border: selected === pro4 ? "2px solid orange" : "none"}} 
                            alt="complex" 
                            src={pro4}
                            onClick={()=>setSelected(pro4)} 
                            />
                        </ButtonBase>
                        <ButtonBase className="border">
                            <img className={classes.imgSize} style={{border: selected === pro5 ? "2px solid orange" : "none"}} 
                            alt="complex" 
                            src={pro5}
                            onClick={()=>setSelected(pro5)} 
                            />
                        </ButtonBase> */}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm container className="p-3">
                    <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                        {item.title} 
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        {item.price} DH
                        </Typography>
                        <hr></hr>
                        <Typography variant="body2" color="textSecondary">
                        {item.shortD}
                        </Typography>
                    <div className="d-flex justify-content-between mt-5">
                        <Link to='/store' className="btn btn-warning col-5 fw-bold ">Roteur</Link>
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
                {item.longD}
            </Typography>
        </Grid>
            </>
       )
   }
        <Grid xs={11} sm={11} lg={8} className="mx-auto mt-4">
            <h4>Les produits peuvent intéresser</h4>
            
            <Grid className="border p-2 d-flex flex-wrap justify-content-between">
                <Grid xs={12} sm={4} md={4} lg={4}>
                    <ButtonBase className="d-flex flex-column p-2">
                        <div className="border p-4">
                            <img className="col-12" alt="complex" src={""} />
                        </div>
                        <div className="text-start mt-2"><h5>{} DH</h5><h5>{}</h5></div>
                    </ButtonBase>
                </Grid>
                {/* <Grid xs={12} sm={4} md={4} lg={4}>
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
                </Grid>  */}
            </Grid>
        </Grid>

        </Paper>
        
        )
    }
    export default ProductId
    