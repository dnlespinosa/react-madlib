import React, { useState } from 'react';

const MadLibForm = () => {
    const INITIALSTATE = {
        noun: '', 
        noun2: '', 
        adjective: '', 
        color: ''
    }


    const [formData, setFormData] = useState(INITIALSTATE)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData, 
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // create a function here that adds the object values from formData into a random madlib
        setFormData(INITIALSTATE)
    }


    return (
        <form onSubmit={handleSubmit}>
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
        </form>
    )
}

export default MadLibForm