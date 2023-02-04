import React, { useState } from 'react';
import MadLibForm from './MadLibForm';

let story = `There was a ${color} ${noun} who loved a ${adjective} ${noun2}`

const MadLib = () => {
    const [showForm, setShowForm] = useState(true)
    const [showStory, setShowStory] = useState(false)

    return(
        <>
            <MadLibForm />
        </>
    )
}

export default MadLib