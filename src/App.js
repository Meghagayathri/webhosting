import './App.css';
import Navside from './Routecomp/Navside';
import Ternery from './Ternery';
import Home from './Routecomp/Home';
import Login from './Routecomp/Login';
import Test from './Routecomp/Test';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  
  return (
    <div>
      
      <BrowserRouter>
        <Navside />
         
          <Routes>
         <Route path="/" element={<Test />}></Route>
         <Route path="/home" element={<Home />}></Route>
         <Route path="/ternary" element={<Ternery />}></Route>
         <Route path="/login" element={<Login />}></Route>
      
        </Routes>

      </BrowserRouter>
      </div>
  );
}

export default App;

