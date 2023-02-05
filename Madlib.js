import React, { useState } from 'react';
import MadLibForm from './MadLibForm';

const MadLib = () => {
    const INITIALSTATE = {
        noun: '', 
        noun2: '', 
        adjective: '', 
        color: ''
    }
    
    const [madLib, setMadLib] = useState(INITIALSTATE)

    

    return(
        <>
            <MadLibForm />
            
        </>
    )
}

export default MadLib