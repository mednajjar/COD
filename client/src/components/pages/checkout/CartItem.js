import React, { useState, useEffect } from 'react';
import { Grid, FormControlLabel, Checkbox, Typography, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";
import { useDispatch, useSelector } from 'react-redux';
import { orderProduct } from '../../../redux/slices/vendeurSlice'

import axios from 'axios';

const CartItem = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.authentification)
  const [check, setCheck] = useState(false);
  const {
    items,
    totalItems,
    cartTotal,
  } = useCart();

  const [cart, setCart] = useState({
    title: [],
    itemTotal: [],
    quantity: [],
    idProduct: [],
    idVendeur: []
  })

  const [data, setData] = useState({
    nom: "",
    prenom: "",
    address: "",
    ville: "",
    tel: "",
    email: "",
    title: cart.title,
    itemTotal: cart.itemTotal,
    quantity: cart.quantity,
    idProduct: cart.idProduct,
    idVendeur: cart.idVendeur,
    cartTotal: cartTotal,

  })

  const [authCart, setAuthCart] = useState({
    title: cart.title,
    itemTotal: cart.itemTotal,
    quantity: cart.quantity,
    idProduct: cart.idProduct,
    idVendeur: cart.idVendeur,
    cartTotal: cartTotal,
  }) 




  useEffect(() => {
    items && items.map(res => {
      cart.itemTotal.push(res.itemTotal)
      cart.quantity.push(res.quantity)
      cart.title.push(res.title)
      cart.idProduct.push(res.id)
      cart.idVendeur.push(res.idVendeur)
    })
  }, [items])

  console.log('quantity', data.quantity)
  console.log('itemTotal', data.itemTotal)
  console.log('total items', totalItems)
  console.log('cart total', cartTotal)
  console.log('idProduct', data.idProduct)






  const onchange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] })
    let valid;
    switch (e.target.id) {
      case "prenom":
        setData({ ...data, prenom: e.target.value })
        valid = data.prenom.toString().length > 1;
        !valid ? setPrenomHelper("Doit contenir au mois 3 lettres!") : setPrenomHelper("")
        break;
      case "nom":
        setData({ ...data, nom: e.target.value })
        valid = data.nom.toString().length > 1;
        !valid ? setNomHelper("Doit contenir au mois 3 lettres!") : setNomHelper("")
        break;
      case "ville":
        setData({ ...data, ville: e.target.value })
        valid = data.ville.toString().length > 1;
        !valid ? setVilleHelper("Ville obligatoire") : setVilleHelper("")
        break;
      case "address":
        setData({ ...data, address: e.target.value })
        valid = data.address.toString().length > 4;
        !valid ? setAddressHelper("Address obligatoire") : setAddressHelper("")
        break;
      case "email":
        setData({ ...data, email: e.target.value })
        valid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target.value);
        !valid ? setEmailHelper("Saisi un email valid!") : setEmailHelper("")
        break;
      case "tel":
        setData({ ...data, tel: e.target.value })
        valid = /^(\+\d{1,3}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(e.target.value);
        !valid ? setTelHelper("Saisi un numero valid!") : setTelHelper("")
        break;
      default:
        break;
    }

  }





  console.log('data', data)
  console.log('items', items)

  const handleChange = (event) => {
    setCheck(event.target.checked);
  };

  const checkTerms = async (e) => {

    if (check === false) {
      alert('terms and conditions not checked!')
    } else {
      e.preventDefault();

      try {
        if (isAuthenticated) {
          return await axios.post('http://localhost:5000/api/orderByClient', { authCart })

        } else {
          return dispatch(orderProduct({ data }));

        }
        // history.push('/vendeurDashboard/myStore')
      } catch (error) {
        if (error) console.log(error.response)
      }
    }
  }

  const [prenomHelper, setPrenomHelper] = useState("");
  const [nomHelper, setNomHelper] = useState("");
  const [addressHelper, setAddressHelper] = useState("");
  const [villeHelper, setVilleHelper] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [telHelper, setTelHelper] = useState("");




  return (

    <form className="d-flex justify-content-around mt-5 flex-wrap" onSubmit={checkTerms}>
      <Grid item xs={12} sm={6} md={5} className="p-5 m-2">
        {
          !isAuthenticated && (
            <>
              <Typography variant="h6" gutterBottom className="mb-3">
                Details
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    error={prenomHelper.length !== 0}
                    helperText={prenomHelper}
                    id="prenom"
                    name="prenom"
                    label="Prénom"
                    fullWidth
                    onChange={onchange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    error={nomHelper.length !== 0}
                    helperText={nomHelper}
                    id="nom"
                    name="nom"
                    label="Nom"
                    fullWidth
                    onChange={onchange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    error={addressHelper.length !== 0}
                    helperText={addressHelper}
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    onChange={onchange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    error={villeHelper.length !== 0}
                    helperText={villeHelper}
                    id="ville"
                    name="ville"
                    label="Ville"
                    fullWidth
                    onChange={onchange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    error={telHelper.length !== 0}
                    helperText={telHelper}
                    id="tel"
                    name="tel"
                    label="Tel"
                    fullWidth
                    onChange={onchange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    error={emailHelper.length !== 0}
                    helperText={emailHelper}
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    onChange={onchange}
                  />
                </Grid>
              </Grid>
            </>
          )
        }


      </Grid>
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
            control={<Checkbox color="secondary" name="saveAddress" value="yes" onChange={(e) => handleChange(e)} checked={check} />}
            label=""
          />
          <Typography className="mt-2">J'accept les <Link to="">termes et conditions.</Link></Typography>
        </Grid>
        <div className="d-flex justify-content-between mt-5">
          <Link to="/cart" className="btn btn-warning col-5 fw-bold ">Reteur</Link>
          <button className="btn col-5 text-white fw-bold" style={{ background: '#278BE3' }} type="submit" >Valider</button>
        </div>
      </Grid>
    </form>
  )
}

export default CartItem
