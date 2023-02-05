import React, { useState } from 'react';
import DisplayMadLib from './DisplayMadLib';
import useChangeState from './hooks/useChangeState';



const MadLibForm = () => {
    const INITIALSTATE = {
        noun: '', 
        noun2: '', 
        adjective: '', 
        color: ''
    }


    const [formData, setFormData] = useState(INITIALSTATE)
    const [showForm, hideForm] = useChangeState(true)
    const [showPhrase, hidePhrase] = useChangeState(false)
    

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData, 
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        hideForm(false)
        hidePhrase(true)
    }


    return (
        <div>
        {showForm && <form onSubmit={handleSubmit}>
            <input 
                type='text'
                id='noun'
                name='noun'
                placeholder='Noun 1'
                value={formData.noun}
                onChange={handleChange}
            />
            <input 
                type='text'
                id='noun2'
                name='noun2'
                placeholder='Noun 2'
                value={formData.noun2}
                onChange={handleChange}
            />
            <input 
                type='text'
                id='adjective'
                name='adjective'
                placeholder='Adjective'
                value={formData.adjective}
                onChange={handleChange}
            />
            <input 
                type='text'
                id='color'
                name='color'
                placeholder='Color'
                value={formData.color}
                onChange={handleChange}
            />
            <button>Get Story</button>
        </form>}
        
        {showPhrase && <DisplayMadLib color={formData.color} noun={formData.noun} adjective={formData.adjective} noun2={formData.noun2} />}
        </div>
    )
}

export default MadLibForm