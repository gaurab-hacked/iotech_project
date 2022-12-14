import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MessagePMainCard = (props) => {
  const { MessageForm } = props;

  const [msgFld, setMsgFld] = useState("");
  const [phFldChange, setphFldChange] = useState("")

  //for message field change
  const msgFldfun = (e) => {
    const value = e.target.value;
    const val = value.slice(0, 200)
    setMsgFld(val)
  }

  // for phone number field change
  const inpfldChange = (e) => {
    const value = e.target.value;
    let invalidChars = /[^0-9]/gi;
    if (invalidChars.test(value)) {
      let actValue = value.replace(invalidChars, " ");
      const actualval = actValue.replace(/\s+/g, ",");
      setphFldChange(actualval)
      setphFldChange(actualval.trimLeft())
    } else {
      setphFldChange(value)
      setphFldChange(value.trim())
    }
  }

  //when click in btn
  const msgsendBtnclk = (e) => {
    e.preventDefault();
    if (msgFld.length >= 5) {
      const data = { phone_number: phFldChange, message: msgFld }
      MessageForm(data);
      setMsgFld("");
      setphFldChange("");
    }
    else {
      toast.error(<p id='error'>Please Enter Valid Input Field</p>, { theme: "colored" });
    }
  }

  return (
    <>
      <div id='mainMsgC'>
        <div className="msgcontent">
          <p id='topmsg'>Send message to :</p>
          <div className="header">
            <ul>
              <li className='checked'><i className="fa-solid fa-pencil"></i><span>Enter Number</span></li>
              <li><svg width="382" height="428" viewBox="0 0 382 428" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M250.688 32.75H11.9375C5.33457 32.75 0 38.727 0 46.125V393.875C0 401.273 5.33457 407.25 11.9375 407.25H250.688C257.29 407.25 262.625 401.273 262.625 393.875V46.125C262.625 38.727 257.29 32.75 250.688 32.75ZM189.508 150.575L172.161 136.406L153.695 151.202V57.8281H189.508V150.575Z" fill="#2B2A2A" />
              </svg><span>Number from Address Book</span></li>
              <li><i className="fa-sharp fa-solid fa-arrow-up-from-bracket"></i><span>Number from file</span></li>
            </ul>
            <div className="border"></div>
          </div>
          <div className="code">
            <a href="#">Country codes</a>
          </div>
          <div className="inpflds">
            <textarea name="phnumber" id="phnumber" cols="30" rows="10" placeholder='Type a phone Number For example: 9869239711' value={phFldChange} onChange={inpfldChange}></textarea>
            <label htmlFor="message">Text message of yours:</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter Your message here' value={msgFld} onChange={msgFldfun}></textarea>
            <div className="charactercounter">{msgFld.trim().length} character/200</div>
          </div>
          <div className="buttons">
            <button className='schedule'><span>Schedule</span><svg width="372" height="372" viewBox="0 0 372 372" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M108.5 170.5H139.5V201.5H108.5V170.5ZM108.5 232.5H139.5V263.5H108.5V232.5ZM170.5 170.5H201.5V201.5H170.5V170.5ZM170.5 232.5H201.5V263.5H170.5V232.5ZM232.5 170.5H263.5V201.5H232.5V170.5ZM232.5 232.5H263.5V263.5H232.5V232.5Z" fill="#2F80ED" />
              <path d="M77.5 341H294.5C311.596 341 325.5 327.096 325.5 310V93C325.5 75.9035 311.596 62 294.5 62H263.5V31H232.5V62H139.5V31H108.5V62H77.5C60.4035 62 46.5 75.9035 46.5 93V310C46.5 327.096 60.4035 341 77.5 341ZM294.5 124L294.515 310H77.5V124H294.5Z" fill="#2F80ED" />
            </svg>
            </button>
            <button className='send' onClick={msgsendBtnclk}>Send</button>
          </div>
        </div>
      </div>
      <ToastContainer
        autoClose={2000}
      />
    </>
  )
}

export default MessagePMainCard
