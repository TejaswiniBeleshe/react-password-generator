import React, { useContext } from "react";
import { context } from "../../main/Main";
export default function TextBodyComponent(){
    let {setNum,setUpperChar,setLowerChar,upperChar,lowerChar,num,sChar,setSchar} = useContext(context)
   
    return(
        <div className=" text-left px-6 my-5">
            <ul className="space-y-2">
                <li><label htmlFor="upper"><input type="checkbox" id="upper" defaultChecked={upperChar} onClick={()=>setUpperChar(!upperChar)}/>Uppercase</label></li>
                <li> <label htmlFor="lower"><input type="checkbox" id="lower" defaultChecked={lowerChar} onClick={()=>setLowerChar(!lowerChar)} />Lowercase</label></li>
                <li> <label htmlFor="numbers"><input type="checkbox" id="numbers" defaultChecked={num}  onClick={()=>setNum(!num)}/>Numbers</label></li>
                <li> <label htmlFor="schar"><input type="checkbox" id="schar" defaultChecked={sChar} onClick={()=>setSchar(!sChar)}/>Speacial Char</label></li>
            </ul>
        </div>
    )
}