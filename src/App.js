import './css/classless-tiny.css';
import Product from './components/Product';
import ProductList from './components/ProductList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/product/:key">
          <Product />
        </Route>

        <Route path="/">
          <h1>Product List</h1>
          <ProductList />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
