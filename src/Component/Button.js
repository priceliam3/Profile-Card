import React, { useState } from 'react';
import icon from './67620-heart-instagram-icons-button-computer-like.png'

function Button() {

    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <p className='likecount'>
                    {count}
                </p>
                <button className='btn' onClick={() => setCount(count + 1)}>
                    <img className='like' srcSet={icon} alt='Like button'></img>
                </button>
            </div>
        </>
    )
}

export default Button