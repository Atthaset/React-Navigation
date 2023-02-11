import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
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
            <Routes>
                <Route path="/" element={<Home/>} exact/>
                <Route path="/member" element={<Member/>}/>
                <Route path="/product" element={<Product/>}/>
            </Routes>
        </Router>
      </div>
  );
}

export default App;