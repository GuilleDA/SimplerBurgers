import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { routes } from './util/RoutesHelper';
import Home from './pages/Home';
import Product from './pages/Product';
import HomeWithCart from './pages/HomeWithCart';
import Cart from './pages/Cart';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact={true} path={routes.home} component={Home} />
          <Route exact={true} path={routes.product} component={Product} />
          <Route exact={true} path={routes.homeWithCart} component={HomeWithCart} />
          <Route exact={true} path={routes.cart} component={Cart} />
          <Route exact={true} path={routes.editProduct} component={EditProduct} />
        </Switch>
      </Router>
  );
}

export default App;
