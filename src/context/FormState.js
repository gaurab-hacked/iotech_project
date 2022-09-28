import FormContext from "./FormContext";

const FormState = (props) => {


  //for form post request
  const postForm = async (data) => {    
    console.log(data)

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

  const MessageForm = async (data) =>{
    console.log(data);

    //for backend
    
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


  return (
    <FormContext.Provider value={{ postForm, MessageForm }}>
      {props.children}
    </FormContext.Provider>
  )
}

export default FormState
