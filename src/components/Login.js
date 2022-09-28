import React, { useContext, useState } from 'react'
import FormContext from '../context/FormContext'
import LoginHTML from './LoginHTML';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        if (formVal.username.length === 0) {
            toast.error(<p id='error'>Username must be greater than 5 character</p>, {theme: "colored"});
        }
        else if (formVal.password.length < 6) {
            toast.error(<p id='error'>Password must be greater than 5 character</p>, {theme: "colored"});
        }
        else {
            postForm(formVal)
            setFormVal({ username: "", password: "" })
            toast.success(<p id='error'>Login Success</p>, {theme: "colored"});
        }
    }

    return (
        <>
            <LoginHTML inpFldChange={inpFldChange} submitBtnClk={submitBtnClk} formVal={formVal} />
            <ToastContainer
                autoClose={2000}
            />
        </>
    )
}

export default Login
