import React, {useState} from "react";
import { PiClipboardThin } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { LuClipboardCheck } from "react-icons/lu";

const EmailShow = ({action}) => {
    const [copied, setCopied] = useState(false)

    const copyEmail = () => {
        setCopied(true)
        navigator.clipboard.writeText("amezcua.carrillo.jorge.alejandro@gmail.com")
    }

    return(
        <>
            <div className="overlay" onClick={action}></div>
            <div className="emailContainer">
                <button className="closeButton" onClick={action}><IoIosCloseCircleOutline size={20} color="#f55"/></button>
                <h3 className="email">amezcua.carrillo.jorge.alejandro@gmail.com</h3>
                {copied ? 
                    <button className="copyButton" onClick={copyEmail}><LuClipboardCheck size={30} color="#0b0"/><p style={{color: '#0b0'}}>Copied!</p></button>
                :
                    <button className="copyButton" onClick={copyEmail}><PiClipboardThin size={30} color="#444"/><p>Copy</p></button>
                }
                <button className="questionButton"><CiCircleQuestion size={20} color="#444"/>
                    <div className="ttt">This is to prevent email harvesting and scraping by automated bots that collect your email and personal information to send scam emails.</div>
                </button>
                
            </div>
        </>
    )
}

export default EmailShow