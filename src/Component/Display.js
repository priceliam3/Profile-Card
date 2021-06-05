import React from 'react'
import '../App.css'
import Button from './Button'
import Button2 from './Button2'
import profilepic from './ME.jpg'
import bg from './rhombus-green-diamond-lozenge-1920x1080-c2-9af59c-63da66-l2-260-236-a-90-f-9.svg'
import social from './linkedin-icon_square_128x128.png'

function Display() {
    return (
        <>
            
            <div className='card'>
                <img className='bg' srcSet={bg} alt='diamond pattern background'></img>
                <div className='profilepic'>
                    <img className='pic' srcSet={profilepic} alt='profile pic'></img>
                </div>
                <div className='name'>
                    <Button2 />
                </div>
                <div className='tu'>
                    <Button />
                </div>
                <div className='container'>
                    <div className='social'>
                        <a href='https://www.linkedin.com/in/liam-price-ab01aa117/'><img className='ln' srcSet={social} alt='social'></img></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Display