import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { NewProduct } from './components/Products/NewProduct';
import { Products } from './components/Products/Products';
import { UpdateProduct } from './components/Products/UpdateProduct';

// redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="container pt-4">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/productos/nuevo" component={NewProduct} />
            <Route path="/productos/editar/:id" component={UpdateProduct} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
