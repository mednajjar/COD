import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    display: 'inline-flex',
  },
  title: {
    flexGrow: 1,
  },
  toggleMenu: {
    marginTop: theme.spacing(6),

  },
  media: {
    width: '12%',
    height: 100,
    [theme.breakpoints.down('sm')]: {
      width: '30%',
    },
  },
  menu: {
    width: '80%',
    margin: '0 auto',
    paddingTop: '1.5%',
    background: 'white',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  menu2: {
    width: '80%',
    margin: '0 auto',
    background: '#303F9F',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  space: {
    width: '100%',
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btn: {
    color: 'black',
    fontSize: 40,
    // marginLeft: '30%'
  },
  linkStyle: {
    color: "#D54E4E",
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  paperSideBar: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      height: '47vh',
    },
    [theme.breakpoints.down(1025)]: {
      height: '32vh',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  paperSideBar2: {
    width: '100%',
    height: '100%',
    padding: '3%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      height: '47vh',
    },
    [theme.breakpoints.down(1025)]: {
      height: '32vh',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  iconSpace: {
    margin: '3.1%',

  },
  mainMenu: {
    display: 'none',
    color: 'white',
    borderRadius: '4px',
    fontSize: 32,
    padding: '1%',
    border: '1px solid white',
    [theme.breakpoints.down('768')]: {
      display: 'block'
    },
  },
  carouselHeader:{
    width: '100%',
    height: 'auto'
  },
  panier:{
    display: 'flex',
    flexDirection: 'end',
  }
}));