import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(6),
      display: 'inline-flex'
    },
    title: {
      flexGrow: 1,
    },
    toggleMenu:{
        marginTop: theme.spacing(6),

    },
    media:{
        width: '10%',
        height: 100,
        [theme.breakpoints.down('sm')]: {
          width: '30%',
          
        },
        
    },
    menu:{
      background: 'white',
      cursor: 'pointer'
    },
    space:{
      display: 'inline-flex',
      flexDirection: 'row',
      justifyContent: 'space-between'

    },
    btn:{
      color: 'black',
      fontSize: 40, 
      marginLeft: '30%'
    }
  }));