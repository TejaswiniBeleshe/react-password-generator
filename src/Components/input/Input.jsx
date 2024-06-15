import React, { useContext, useRef } from "react";
import logo from "../../copy.png"
import styles from "../input/Input.module.css"
import { context } from "../main/Main";
export default function InputComponent(){
    let {pass} = useContext(context);
    let input = useRef()
    function handle(){
        alert('copied')
        input.current.select()
        window.navigator.clipboard.writeText(pass);
    }
    return(
        <div className="h-14 flex bg-slate-600 rounded-t-md ">
            <input type="text" className={`${styles.ip} bg-slate-600 outline-none ml-3`} placeholder="Password" ref={input} value={pass} readOnly/>
            <span className="w-10" onClick={handle}><img src={logo} alt="not found" className="h-8 mt-2"/></span>
        </div>
    )
}