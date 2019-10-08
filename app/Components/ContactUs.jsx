import React from 'react'
import duane from '../assets/duane.jpeg'
import mo from '../assets/mo.jpeg'
import michelle from '../assets/michelle.jpeg'
import natalie from '../assets/natalie.jpeg'

const ContactUs = () => {
    return (
        <div className='footer'>
            <div className='bioDiv'>
                <div>
                    <img src={duane}></img>
                </div>
                <h3>Duane McFarlane</h3>
                <p>Software Engineer</p>
            </div>
            <div className='bioDiv'>
            <div>
                <img src={michelle}></img>
            </div>
                <h3>Michelle Herrerra</h3>
                <p>Software Engineer</p>
            </div>
            <div className='bioDiv'>
            <div>
                <img src={mo}></img>
            </div>
                <h3>Mohtasim Chowdhury</h3>
                <p>Software Engineer</p>
            </div>
            <div className='bioDiv'>
                <div>
                    <img src={natalie}></img>
                </div>
                <h3>Natalie Umanzor</h3>
                <p>Software Engineer</p>
            </div>
        </div>
    )
}

export default ContactUs;