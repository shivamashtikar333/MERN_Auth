import React,{ useState } from 'react'
import Header from './pages/Header'
import {Route,Routes} from 'react-router-dom';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Dashboard from './pages/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Header />
    <Routes>
      <Route path= '/login' element={<Login/>}></Route>
      <Route path='/register' element= {<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>

   </>
  )
}

export default App
