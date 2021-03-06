import React, { useState, useEffect } from 'react'
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useCart } from "react-use-cart";
import itemData from './localData/Data';
import Pagination from '@material-ui/lab/Pagination';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  content: {
    width: '80%',
    margin: '1% auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-between',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  imageList: {
    width: '100%',
    margin: '0% auto',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',

    },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  itemBar: {
    height: '12vh',
    padding: '1%',
    [theme.breakpoints.down('sm')]: {
      height: '16vh',
    },
  },


}));


const Products = () => {
  const classes = useStyles();
  const { addItem } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8)
  const indexOfPages = Math.ceil(itemData.length / productPerPage);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = itemData.slice(indexOfFirstProduct, indexOfLastProduct)

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };


  return (
    <>
      <ImageList className={classes.imageList}>
        {currentProduct.map((item) => (
          <ImageListItem key={item.id} style={{ width: 300, height: 'auto', margin: '2% 1%' }}>
            <Link to={`/product/${item.id}`} >
              <img src={item.img} alt={item.title} style={{ width: '100%' }} />
            </Link>
            <ImageListItemBar
              className={classes.itemBar}
              title={item.title}
              subtitle={<><h3>Prix: {item.price} MAD</h3><br></br><span>by: {item.author}</span></>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <ShoppingCartIcon onClick={() => addItem(item)} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Grid className="d-flex justify-content-center mt-4 mb-4">
        <Pagination count={indexOfPages} color="primary" page={currentPage} onChange={handleChange} />
      </Grid>
    </>
  )
}

export default Products
