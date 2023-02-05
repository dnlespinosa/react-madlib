import React, { useState } from 'react';

const DisplayMadLib = (props) => {
    


    return (
        <div>
            <p>`There was a {props.color} {props.noun} who loved a {props.adjective} {props.noun2}`</p>
            <form>
                <button>Reset Madlib</button>
            </form>
        </div>
    )

}

export default DisplayMadLib