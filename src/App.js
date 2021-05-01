import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Container/Home';
import Category from './Container/Category';
import Product from './Container/Product';

function App() {
  return (
    <div className="App">
        
           <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/category" component={Category}/>
              <Route path="/products" component={Product}/>
           </Switch>
         
    </div>
  );
}

export default App;
