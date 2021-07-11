import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


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
   
    width: '80%',
    margin: '0 auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
 
}));



 const itemData = [
    {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51qBHRNusSL._AC_SY350_.jpg',
    title: 'Image',
    author: 'author',
   },
   {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51qBHRNusSL._AC_SY350_.jpg',
    title: 'Image',
    author: 'author',
   },
    {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51qBHRNusSL._AC_SY350_.jpg',
    title: 'Image',
    author: 'author',
   },
   {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51qBHRNusSL._AC_SY350_.jpg',
    title: 'Image',
    author: 'author',
   },
    {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51qBHRNusSL._AC_SY350_.jpg',
    title: 'Image',
    author: 'author',
   },
   {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51qBHRNusSL._AC_SY350_.jpg',
    title: 'Image',
    author: 'author',
   },
 ];



const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
                
            <ImageList className={classes.imageList}>
               
                {itemData.map((item) => (
                <ImageListItem key={item.img} style={{width: 350,height: 'auto', margin: '2%'}}>
                    <img src={item.img} alt={item.title} style={{width: '100%'}} />
                    <ImageListItemBar
                    title={item.title}
                    subtitle={<span>by: {item.author}</span>}
                    actionIcon={
                        <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                        <InfoIcon />
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
