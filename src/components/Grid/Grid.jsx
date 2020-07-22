import React from 'react'
// Web Animation API.
import useWebAnimations, {fadeIn} from "@wellyshen/use-web-animations"
import {Grid} from "@material-ui/core"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
// Components.
import Header from "./../Header/Header"
import Introduction from "./../Introduction/Introduction"
import About from "./../About/About"
// Assets.
import about_image from "./../../images/about-image.png"
import "./Grid.scss"

const GridComponent = () => {
    const {ref} = useWebAnimations({...fadeIn, 
        timing:{duration: 4000}})
    return (
        <Grid container>
            <Grid item xs={12}>  
                <Header/>
            </Grid>
            <Grid item xs={12}>
              <ScrollAnimation animateIn="fadeIn" duration={4}> 
                <Introduction />
              </ScrollAnimation>  
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={1}>
                    <Grid item xs={7}>
                      <ScrollAnimation animateIn="fadeIn" duration={4}>  
                        <About />
                      </ScrollAnimation>  
                    </Grid>
                    <Grid item xs={6}>
                      <ScrollAnimation animateIn="fadeIn" duration={4}>  
                        <div className="about_image" ref={ref}>
                            <img style={{float:"right"}} src={about_image} alt="About" />
                        </div>
                       </ScrollAnimation>     
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default GridComponent
