import React, { useState } from 'react';

function Button2() {

    const [name, setName] = useState('My name is Liam');

    const handleName = () => {
        setName('My name is Liam')
    }

    const handleSkills = () => {
        setName('I am a Front-End Developer')
    }



    return (
        <>
            <p className='cap'>{name}</p>
            <button className='btn2 btname' onClick={handleName}>Name</button>
            <button className='btn2 btnskills' onClick={handleSkills}>Skills</button>
        </>
    )
}

export default Button2