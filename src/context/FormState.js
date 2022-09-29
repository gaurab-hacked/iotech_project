import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import FormContext from "./FormContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormState = (props) => {
  // const navigate = useNavigate();



  const [logindata, setLoginData] = useState({});

  //for form post request
  const postForm = async (data) => {
    // console.log(data)
    setLoginData(data);
    localStorage.setItem("username", data.username);

    // for backend 

    // const url = 'http:localhost:4000/api/formPost'
    // const response = await fetch(url, {
    //   method: 'POST',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   credentials: 'same-origin',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   redirect: 'follow',
    //   referrerPolicy: 'no-referrer',
    //   body: JSON.stringify(data)
    // });
    // const res = await response.json();
    // console.log(res);
  }

  const MessageForm = async (data) => {
    data.username = localStorage.getItem("username")
    // console.log(data);
    //for backend

    const url = 'https://api.bulksms.iotech.com.np/api/sendsms'
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    const res = await response.json();
    console.log(res);
    if (res.message === "success") {
      toast.success(<p id='error'>Success</p>, { theme: "colored" });
    }else{
      toast.error(<p id='error'>Some error accuired</p>, { theme: "colored" });
    }
  }


  return (<>
    <FormContext.Provider value={{ postForm, MessageForm, logindata }}>
      {props.children}
    </FormContext.Provider>
    <ToastContainer
      autoClose={2000}
    />
  </>
  )
}

export default FormState
