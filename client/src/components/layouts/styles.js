import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toggleMenu:{
        marginTop: theme.spacing(6),
        marginLeft: theme.spacing(1),
    },
    media:{
        width: '10%',
        height: 40,
    }
  }));