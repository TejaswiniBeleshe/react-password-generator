import React, { useCallback,useState} from "react";

export default function GenerateComponent({strength}){
    let [msg,setMessage] = useState('');
    let handler = useCallback(()=>{
        function getMsg(){
            if(strength===0){
                setMessage('Low')
                console.log(strength)
            }else if(strength===1){
                setMessage('Medium');
            }else if(strength===2){
                setMessage('High')
            }else{
                setMessage('Strong');
            }
        }
        getMsg();
    },[strength])
   
    return(
        <div>
            <div className=" bg-slate-400 h-10 mx-3 flex justify-between items-center">
                <span className="ml-3">STRENGTH</span>
                <span className="mr-3">{msg}</span>
            </div>
            <button className=" bg-yellow-200 mt-2 px-5 py-2 mx-3" style={{width:"94%"}} onClick={handler}>Generate</button>
        </div>
    )
}