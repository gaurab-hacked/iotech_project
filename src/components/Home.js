import React from 'react'
// import FormContext from '../context/FormContext'
import Login from './Login'
import MessagePannel from './MessagePannel'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = () => {
  // const { logindata } = useContext(FormContext);
  // const { username, password } = logindata;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Login />} />
        <Route path='/message' element={<MessagePannel />} />
      </Routes>

      {/* </Route> */}
    </BrowserRouter>
  )
}

export default Home
