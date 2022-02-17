import React,{useState} from 'react'
import {Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, Paper} from '@material-ui/core';
import {Link} from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './LoginStyles';
import {getLogin} from '../../redux/slices/authSlice';
import {useDispatch, useSelector} from 'react-redux';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Cash on delivery '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ email: '', password: '' })
    const {loginError} = useSelector(state => state.authentification)

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const onsubmit = async (e) => {
      e.preventDefault();
      dispatch(getLogin(formData))
    }
    return (
      <Paper className={classes.paperLogin}>

      
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={onsubmit}>
        {loginError && <p>{loginError}</p>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="!#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </Paper>
    )
}

export default Login
