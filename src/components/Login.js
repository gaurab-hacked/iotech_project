import React, { useContext, useState } from 'react'
import FormContext from '../context/FormContext'
import LoginHTML from './LoginHTML';

const Login = () => {
    const { postForm } = useContext(FormContext);
    const [formVal, setFormVal] = useState({ username: "", password: "" })

    //when someone fill the input field
    const inpFldChange = (e) => {
        setFormVal({ ...formVal, [e.target.name]: e.target.value });
        if(inpFldChange.checked){

        }
    }
    //show value when click
    const submitBtnClk = (e) => {
        e.preventDefault();
        postForm(formVal)
        setFormVal({username:"", password:""})
    }

    return (
        <LoginHTML inpFldChange={inpFldChange} submitBtnClk={submitBtnClk} formVal={formVal} />
    )
}

export default Login
