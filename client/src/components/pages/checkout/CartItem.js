import React, {useState} from 'react';
import {Grid, FormControlLabel, Checkbox, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { useCart } from "react-use-cart";

const CartItem = () => {
    const [check, setCheck] = useState(false);
    const {
        items,
        totalItems,
        cartTotal,
      } = useCart();
      const handleChange = (event) => {
        setCheck(event.target.checked);
      };
    const checkTerms = () =>{
        if(check === false){
            alert('terms and conditions not checked!') 
        }else{
            alert('checkbox is checked');
            console.log(items)
        }
    }
    return (
        <Grid item xs={12} sm={6} md={4} className="p-5 bg-light m-2">
            <div>
                <div className="d-flex justify-content-between"><h5>Total Items : </h5><span className="fs-5">{totalItems}</span></div>
                <div className="d-flex justify-content-between"><h5>TVA : </h5><span className="fs-5">0</span></div>
                <div className="d-flex justify-content-between"><h5>Total Price : </h5><span className="fs-5">{cartTotal}</span></div>
            </div>
            <hr />
            <div className="d-flex justify-content-between"><h5>TTC</h5><span className="fw-bold fs-5">{cartTotal} DH</span></div>
            <Grid item xs={12} className="d-flex align-items-start mt-3">
                <FormControlLabel
                    control={<Checkbox color="secondary" name="saveAddress" value="yes" onChange={(e)=>handleChange(e)} checked={check}  />}
                    label=""
                />
                <Typography className="mt-2">Je confirme avoir pris connaissance des <Link to="">termes et conditions.</Link></Typography>
            </Grid>
            <div className="d-flex justify-content-between mt-5">
                <Link to="/cart" className="btn btn-warning col-5 fw-bold ">Reteur</Link>
                <button className="btn col-5 text-white fw-bold" style={{background: '#278BE3'}} onClick={()=>checkTerms()}>Valider</button>
            </div>
        </Grid>
    )
}

export default CartItem
