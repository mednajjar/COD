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
    toggleMenu:{
        marginTop: theme.spacing(6),

    },
    media:{
        width: '12%',
        height: 100,
        [theme.breakpoints.down('sm')]: {
          width: '30%',  
        }, 
    },
    menu:{
      width: '80%',
      margin: '0 auto',
      paddingTop: '1.5%',
      background: 'white',
      [theme.breakpoints.down('sm')]: {
        width: '100%', 
      },
    },
    menu2:{
      width: '80%',
      margin: '0 auto',
      background: '#303F9F',
      [theme.breakpoints.down('sm')]: {
        width: '100%', 
      },
    },
    space:{
      width: '100%',
      display: 'inline-flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    btn:{
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
      width: 250,
      [theme.breakpoints.down('sm')]: {
        width: '100%', 
      },
    },
    iconSpace: {
      marginRight: '4%'
    }
  }));