import React from 'react'
import {Grid} from "@material-ui/core"
import cx from "classes"
// Web Animation API.
import useWebAnimations, {fadeIn} from "@wellyshen/use-web-animations"
//
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
// Assets.
import office_meeting_pic from "./../../images/office-illustration.jpg"
import  "./Introduction.scss"

const slides = [
    { line1: 'Scale Extended', line2: 'business office', line3: 'services'},
    { line1: 'Innovation and', line2: 'Intelligent technology', line3: 'solutions and services'},
    { line1: 'Customized solutions', line2: 'to meet the needs of', line3: 'changing market'}
];

const Introduction = () => {
    const {ref} = useWebAnimations({...fadeIn, 
                                    timing:{duration: 4000}})
    return ( 
        <Grid container spacing={1}>
            <Grid item xs={5}>
               {/* <StyleRoot>  */}
                <div className="introduction_container" ref={ref}>
                    <img src={office_meeting_pic} alt="Team Meeting" width={500}/>
                </div>
                {/* </StyleRoot> */}
            </Grid>
            <Grid item xs={7}>
               <div className="slide_container"> 
                <Slider autoplay={5} infinite={true} slideIndex={2}>
                {slides.map((slide, index) => <div key={index}>
                    <h2 className="h2_container">
                        <div className="h2_text">
                            <span>{slide.line1}</span>
                        </div>
                        <div className="h2_text">
                            <span>{slide.line2}</span>
                        </div>
                        <div className="h2_text">
                            <span>{slide.line3}</span>
                        </div>
                    </h2>
                </div>)}
                </Slider>
                </div>
            </Grid>
        </Grid>
    )
}

export default Introduction
