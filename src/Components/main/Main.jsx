import React, { useState,createContext, useEffect } from "react";
import InputComponent from "../input/Input";
import styles from "../main/Main.module.css"
import OptionsComponent from "../options/Options";

export let context = createContext();
export default function MainComponent(){
    let [pass,setpass] = useState('')
    let [length,setLength] = useState(8)
    let [upperChar,setUpperChar] = useState(false);
    let [lowerChar,setLowerChar] = useState(false);
    let [sChar,setSchar] = useState(false)
    let [num,setNum] = useState(false);
    let [passStrength,setPassStrength] = useState('')

    let generatePassword = function(){
        let i=0;
        let password = "";
        let str = ""
        if(upperChar){
            str+='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            setPassStrength((prev)=>prev+1)
            // ++i;
            
        }
        if(lowerChar){
            str+='abcdefghijklmnopqrstuvwxyz';
            ++i;
        }
        if(num){
            str+='1234567890';
            ++i;
        }
        if(sChar){
            str+='!@$%^&*()><{}[]';
            ++i;
        }
        for(let i=1;i<=length;i++){
            let char = Math.random()*str.length+1;
            password+= str.charAt(char);
        }
        setpass(password);
        setPassStrength(i);
    }
    useEffect(()=>{
        generatePassword()
    },[length,upperChar,lowerChar,sChar,num])
    return(
        
        
        <div className={`${styles.main} flex justify-between flex-col bg-slate-800 rounded-md`}>
            <context.Provider value={{length:length,setLength:setLength,setUpperChar:setUpperChar,setLowerChar:setLowerChar,setNum:setNum,upperChar:upperChar,lowerChar:lowerChar,num:num,sChar:sChar,setSchar:setSchar,pass:pass}}>
            <InputComponent/>
            <OptionsComponent strength={passStrength}/>
            </context.Provider> 
        </div>
      
    )
}