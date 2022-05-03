import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import SingUp from './component/SingUp/SingUp';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import ProductDetls from './component/ProductDelels/ProductDetls';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/'element={<Home></Home>}></Route>
          
          <Route path='/SingUp' element={<SingUp></SingUp>}></Route>
          <Route path='/Login'element={<Login></Login>}></Route>
          <Route path='/detls' element={
            <PrivateRoute><ProductDetls></ProductDetls></PrivateRoute>
          }></Route>
      </Routes>
    </div>
  );
}

export default App;
