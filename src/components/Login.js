import React, { useContext, useState } from 'react'
import FormContext from '../context/FormContext'
import LoginHTML from './LoginHTML';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
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
            toast.error(<p id='error'>Please enter username</p>, {theme: "colored"});
        }
        else if (formVal.password.length < 3) {
            toast.error(<p id='error'>Password must be greater than 3 character</p>, {theme: "colored"});
        }
        else {
            setFormVal({ username: "", password: "" })
            if(formVal.username==="admin"&&formVal.password==="admin"){
                navigate("/message")
                postForm(formVal)
            }
            else{
                toast.error(<p id='error'>Envalid username or password</p>, {theme: "colored"});
            }
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
