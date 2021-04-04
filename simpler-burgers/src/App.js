import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { routes } from './util/RoutesHelper';
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact={true} path={routes.home} component={Home} />
        </Switch>
      </Router>
  );
}

export default App;
