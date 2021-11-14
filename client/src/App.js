import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './components/Routes';
import Menu from './components/layouts/UpBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { ifLoged } from './redux/slices/authSlice'


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ifLoged())
  }, [dispatch])
  return (
    <Router>
      <Route component={Menu} />
      <Routes />
    </Router>
  );
}

export default App;
