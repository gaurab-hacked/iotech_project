import React, { useContext, useState } from 'react'
import FormContext from '../context/FormContext'
import LoginHTML from './LoginHTML';

const Login = () => {
    const { postForm } = useContext(FormContext);
    const [formVal, setFormVal] = useState({ username: "", password: "" })

    //when someone fill the input field
    const inpFldChange = (e) => {
        setFormVal({ ...formVal, [e.target.name]: e.target.value });
    }
    //show value when click
    const submitBtnClk = (e) => {
        e.preventDefault();
        if(formVal.username.length===0){
            console.log("Please enter valid username")
        }
        else if(formVal.password.length<6){
            console.log("Please enter valid password")
        }
        else{
            postForm(formVal)
            setFormVal({username:"", password:""})
        }
    }

    return (
        <LoginHTML inpFldChange={inpFldChange} submitBtnClk={submitBtnClk} formVal={formVal} />
    )
}

export default Login
