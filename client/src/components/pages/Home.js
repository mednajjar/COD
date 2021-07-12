import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '1% auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '70%',
    margin: '0 auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      
    },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  itemBar: {
    height: '10vh'
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



const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
                
            <ImageList className={classes.imageList}>
               
                {itemData.map((item) => (
                <ImageListItem key={item.id} style={{width: 300, height: 'auto', margin: '2%'}}>
                  <Link to={`/product/${item.id}`} >
                    <img src={item.img} alt={item.title} style={{width: '100%'}} />
                  </Link>
                    <ImageListItemBar
                    className={classes.itemBar}
                    title={item.title}
                    subtitle={<><h3>Prix: {item.price} MAD</h3><br></br><span>by: {item.author}</span></>}
                    actionIcon={
                        <IconButton className={classes.icon}>
                        <ShoppingCartIcon />
                        </IconButton>
                    }
                    />
                </ImageListItem>
                ))}

             
            </ImageList>
        </div>
    )
}

export default Home
