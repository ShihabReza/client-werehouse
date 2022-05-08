import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import SingUp from './component/SingUp/SingUp';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import ProductDetls from './component/ProductDelels/ProductDetls';
import NotFound from './component/NotFound/NotFound';
import Blog from './component/Blog/Blog';
import AddProduct from './component/AddProduct/AddProduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/'element={<Home></Home>}></Route>
          
          <Route path='/SingUp' element={<SingUp></SingUp>}></Route>
          <Route path='/Login'element={<Login></Login>}></Route>
          <Route path='/Addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='/detls/:id' element={
            <PrivateRoute><ProductDetls></ProductDetls></PrivateRoute>
          }></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
