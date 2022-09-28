import React, { useContext } from 'react'
import MessagePMainCard from './MessagePMainCard'
import MessagePNav from './MessagePNav'
import MessagePSideNav from './MessagePSideNav'
import './MessagePannel.css'
import FormContext from '../context/FormContext'


const MessagePannel = () => {
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
