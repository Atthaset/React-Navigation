import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Page/Home";
import Member from "./Components/Page/Member";
import Product from "./Components/Page/Product";
import './App.css'


function App() {
  return (
    <div>
        <Router>
            <Navigation/>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/member" component={Member}/>
                <Route path="/product" component={Product}/>
            </Switch>
        </Router>
      </div>
  );
}

export default App;
