import React from 'react'
import Common from './Common'
import abo from "../images/abo.png"
const About = () => {
    return (
        <Common start="Welcome to About Page"
        imgsrc={abo}
        visit="/contact"
        btname="Contact name"
        />
    )
}

export default About
