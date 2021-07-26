import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paperLogin:{
      width: '80%',
      margin: '1% auto',
      paddingTop: '2%',
      paddingBottom: '2%',
      [theme.breakpoints.down('sm')]: {
        width: '100%', 
      },

    },
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    
  }));