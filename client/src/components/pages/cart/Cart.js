import React from 'react'
import { useCart } from "react-use-cart";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import {Paper, makeStyles} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

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
const Cart = () => {
    const history = useHistory();
    const classes = useStyles();
    const {
        isEmpty,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
      } = useCart();
    
      if (isEmpty) return <h5 className="text-center mt-5">Votre Panier est Vide!</h5>;
    return (
        <Paper className={classes.paper}>
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
        
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {
                                items.map((item, index)=>{
                                    return(
                                        <tr key={index} className="lh-lg">
                                            <td>
                                                <img src={item.img} alt="product" style={{height: '6rem'}} />
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>{item.title}</td>
                                                </tr>
                                                <tr>
                                                    <tr><b>Price:</b>&nbsp; {item.price} DH</tr>
                                                    <tr><b>Quantity:</b>&nbsp; {item.quantity}</tr>
                                                </tr>
                                            </td>
                                            <td>
                                                <button className="btn btn-info ms-2 mt-2" style={{background: '#278BE3'}} onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}><RemoveCircleIcon style={{color: 'white'}}/></button>
                                                <button className="btn btn-info ms-2 mt-2" style={{background: '#278BE3'}} onClick={()=>updateItemQuantity(item.id, item.quantity + 1)}><AddCircleIcon style={{color: 'white'}}/></button>
                                                <button  className="btn btn-danger ms-2 mt-2" onClick={()=>removeItem(item.id)}><DeleteForeverIcon/></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="d-flex mt-2 justify-content-end">
                    <div className="d-flex flex-column col-auto bg-light p-3 shadow-sm">
                    <div className="col-auto">
                        <h6><span className="fw-bold">Total items:</span> {totalItems}</h6>
                        <h6><span className="fw-bold">Total Price:</span> {cartTotal} DH</h6>
                    </div>
                    <div className="col-auto d-flex ">
                        <div className="d-flex col-12 justify-content-between">
                            <button className="btn btn-danger m-2" onClick={()=>emptyCart()}>Clear Cart</button>
                            <button className="btn m-2 text-white" style={{background: '#278BE3'}} onClick={()=>history.push('/checkout')}>Checkout</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </Paper>
    )
}

export default Cart
