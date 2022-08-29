import Dashboard from './component/dashboard/Dashboard';
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Adminpanel from './component/admin/Adminpanel';
import Products from './component/products/Products';
import Adduser from './component/adduser/Adduser';
import Users from './component/users/Users';
import SignIn from './component/usersignin/Signin';
import Navbar from './component/navbar/Navbar';
import AddAdmin from './component/addadmin/Addadmin';


const App = () => {
  return (
    <>
       <Adminpanel /> 
      <Navbar/>
      <Routes>
      <Route path='/adminsignin' element={<Navbar />}></Route>
      <Route path='/admin' element={<Adminpanel />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/signup' element={<Adduser />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/addadmin' element={<AddAdmin />}></Route>
      </Routes>

    </>

  )
}

export default App