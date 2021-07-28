import React from 'react'
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useCart } from "react-use-cart";
const useStyles = makeStyles((theme) => ({
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
  root: {
    width: '66vw',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down(1389)]: {
      width: '59vw'
    },

    [theme.breakpoints.down(1191)]: {
      width: '57vw'
    },
    [theme.breakpoints.down(1087)]: {
      width: '55vw'
    },
    [theme.breakpoints.down(1000)]: {
      width: '52vw'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '2% auto'
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
  }

}));

const itemData = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51qBHRNusSL._AC_SY350_.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 30,
    author: 'author',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51qBHRNusSL._AC_SY350_.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 30,
    author: 'author',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51qBHRNusSL._AC_SY350_.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 30,
    author: 'author',
  },
  {
    id: 4,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51qBHRNusSL._AC_SY350_.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 30,
    author: 'author',
  },
  {
    id: 5,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51qBHRNusSL._AC_SY350_.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 30,
    author: 'author',
  },
  {
    id: 6,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51qBHRNusSL._AC_SY350_.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 30,
    author: 'author',
  },
];
const Products = () => {
  const classes = useStyles();
  const { addItem } = useCart();
  return (
    <ImageList className={classes.imageList}>
      {itemData.map((item) => (
        <ImageListItem key={item.id} style={{ width: 280, height: 'auto', margin: '2%' }}>
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
  )
}

export default Products
