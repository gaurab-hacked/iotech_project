import React, { useContext, useEffect } from 'react'
import MessagePMainCard from './MessagePMainCard'
import MessagePNav from './MessagePNav'
import MessagePSideNav from './MessagePSideNav'
import './MessagePannel.css'
import FormContext from '../context/FormContext'
import { useNavigate } from 'react-router-dom'


const MessagePannel = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("username")){
      navigate("/")

    }
  }, [])
  const {MessageForm} = useContext(FormContext);
  return (
    <div>
        <MessagePSideNav/>
        <MessagePNav/>
        <MessagePMainCard MessageForm = {MessageForm}/>
    </div>
  )
}

export default MessagePannel
