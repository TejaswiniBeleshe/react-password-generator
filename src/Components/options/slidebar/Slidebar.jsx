import React, { useContext } from "react";
import { context } from "../../main/Main";

export default function SlideBarComponent(){
    let {length,setLength} = useContext(context)
    return(
        <div className={`slidebar flex justify-around flex-col h-16`}>
            <div className="text text-white flex justify-between  mx-4">
                <span className="mt-3">Character Length</span>
                <span style={{fontSize:"2rem"}}>{length}</span>
            </div>
            <input type="range" name="bar" id="slidebar" min={8} max={50} className="mx-5" value={length} onChange={(e)=>setLength(e.target.value)} />
        </div>
    )
}