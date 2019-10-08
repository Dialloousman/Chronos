import React, { Component } from 'react'
import Background from '../Components/Background.jsx'
import MainContent from '../Components/MainContent.jsx'
import ContactUs from '../Components/ContactUs.jsx'

class App extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Background />
                <MainContent />
                <ContactUs />
            </div>
        )
    }
}


export default App;