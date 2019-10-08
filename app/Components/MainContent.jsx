import React from 'react'
import image from '../assets/electron_home.png'
import right_side_image from '../assets/right_side_image.png'

const MainContent = () => {
    return (
        <div className='mainContentStuff'>
            <div>
                <img src={image}></img>
            </div>
            <div className='row'>
                <h2 className='bodyHeader'>What is Chronos?</h2>
                <p className='bodyText'>Microservice architecture has become the dominant approach for large organizations looking to realize the benefits that it offers over more traditional, monolithic application architectures. The promise is certainly appealing, but adopting</p>

                <p className='bodyText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className='github'>GitHub</button>
                <button className='npm'>NPM</button>
            </div>
            <div>
                <h2 className='bodyHeader'>Installation</h2>
                <p className='bodyText'>Install the plugin with npm:</p>
                <p className='code'>npm install chronos</p>
                <p className='bodyText'><span>Basic Usage:</span> require the npm package into each of your microservices</p>
                <p className='code'>const chronos = require('chronos')</p>
                <p className='bodyText'>Download the desktop application and enter your database information. The user will be able to track the computer usage of each microservice running on their local machine, including memory, temperature, status codes and other pertinant information engineers would want to monitor.</p>
                <p className='bodyText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div>
                <img src={right_side_image}></img>
            </div>
        </div>
    )

}

export default MainContent