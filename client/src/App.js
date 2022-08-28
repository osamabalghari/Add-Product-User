import Dashboard from './component/dashboard/Dashboard';
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Adminpanel from './component/admin/Adminpanel';
import Products from './component/products/Products';
import Adduser from './component/adduser/Adduser';
import Users from './component/users/Users';
import SignIn from './component/usersignin/Signin';


const App = () => {
  return (
    <>
      <Adminpanel />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/adduser' element={<Adduser />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
      </Routes>

    </>

  )
}

export default App