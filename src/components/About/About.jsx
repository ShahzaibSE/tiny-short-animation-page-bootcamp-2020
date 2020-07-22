import React from 'react'
import useWebAnimations, {fadeIn} from "@wellyshen/use-web-animations"
// Assets.
import "./About.scss"

const About = () => {
    const {about_ref} = useWebAnimations({...fadeIn, 
        timing:{duration: 4000}})
    return (
        <div className="about_container" ref={about_ref}>
            <h1 className="about_heading">We Are</h1>
            <p className="about_details">
            A highly specialized Management team with over 20 combined 
            years of experience in the Healthcare industry with proven ability to 
            optimally combine digital technology, skilled resources and 
            efficient business processes to implement creative as well as proven market solutions to suit an ever-evolving market. 
            Our forte has been to successfully tailor our solutions to support your needs whether it is in the space of Consulting, 
            Product Management or Service Delivery
            </p>
        </div>
    )
}

export default About
