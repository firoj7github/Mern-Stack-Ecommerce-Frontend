
import './App.css';
import Home from './Home/Home/Home';

import { Route, Routes } from 'react-router-dom';
import Blog from './Home/Blog/Blog';
import Login from './Home/Login/Login';
import Register from './Home/Register/Register';


import ProductDetail from './Home/Home/ProductDetail/ProductDetail';
import RequireAuth from './Home/Login/RequireAuth/RequireAuth';


import ManageInventoris from './Home/Home/ManagInventoris/ManageInventoris';
import Header from './Share/Header/Header';
import AddItem from './Home/AddItem/AddItem';
import MyItem from './Home/MyItem/MyItem';

function App() {
  return (
    <div className="App">
       <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/service/:serviceid' element={
          <RequireAuth>
             <ProductDetail></ProductDetail>
          </RequireAuth>
       }></Route>
       <Route path='/manageInventoris' element={
         <RequireAuth>
           <ManageInventoris></ManageInventoris>
         </RequireAuth>
       }></Route>
       <Route path='/addItem' element={
         <RequireAuth>
           <AddItem></AddItem>
         </RequireAuth>
       }></Route>
       <Route path='/myItem' element={
         <RequireAuth>
           <MyItem></MyItem>
         </RequireAuth>
       }></Route>
       
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login'
         element={<Login></Login>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
