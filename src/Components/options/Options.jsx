import React from 'react';
import SlideBarComponent from './slidebar/Slidebar';
import TextBodyComponent from './textbody/Text';
import GenerateComponent from './generate/Generate';

export default function OptionsComponent({strength}){
    return(
        <div className=' h-80 bg-slate-600 rounded-b-md'>
            <SlideBarComponent/>
            <TextBodyComponent/>
            <GenerateComponent strength={strength}/>
        </div>
    )
}