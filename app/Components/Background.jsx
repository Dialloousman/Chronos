import React from 'react'
import logo from '../assets/logo.png'

const Background = () => {
    return (
        <div className='container'>
            <div>
                <img src={logo}></img>
            </div>
            <h2 className='mainHeadline'>A New Way to Monitor Your Microservices</h2>
            <p className='subHead'>A DevTool for DevOps Engineers</p>
        </div>
    )
}



export default Background;
