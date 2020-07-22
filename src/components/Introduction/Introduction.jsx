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
import styles_from_sheet from "./Introduction.module.scss"

const slides = [
    { title: 'First item', description: 'Lorem ipsum'},
    { title: 'Second item', description: 'Lorem Apsum'},
    { title: 'Third item', description: 'Lorem Cipsum'},
];

const Introduction = () => {
    const {ref} = useWebAnimations({...fadeIn, 
                                    timing:{duration: 4000}})
    return ( 
        <Grid container spacing={1}>
            <Grid item xs={7}>
               {/* <StyleRoot>  */}
                <div className={styles_from_sheet.introduction_container} ref={ref}>
                    <img src={office_meeting_pic} alt="Team Meeting"/>
                </div>
                {/* </StyleRoot> */}
            </Grid>
            <Grid item xs={4}>
               <div> 
                <Slider autoplay={5} infinite={true}>
                    {slides.map((slide, index) => <div key={index}>
                        <h2>{slide.title}</h2>
                        <div>{slide.description}</div>
                    </div>)}
                </Slider>
                </div>
            </Grid>
        </Grid>
    )
}

export default Introduction
