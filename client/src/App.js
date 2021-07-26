import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './components/Routes';
import Menu from './components/layouts/UpBar';

function App() {
  return (
    <Router>
      <Route component={Menu} />
      <Routes />
    </Router>
  );
}

export default App;
