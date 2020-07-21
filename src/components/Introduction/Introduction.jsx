import React from 'react'
import {Grid} from "@material-ui/core"
import useWebAnimations, {fadeIn} from "@wellyshen/use-web-animations"
// Assets.
import office_meeting_pic from "./../../images/office-illustration.jpg"

const Introduction = () => {
    const {ref} = useWebAnimations({...fadeIn, 
                                    timing:{duration: 4000}})
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
               {/* <StyleRoot>  */}
                <div ref={ref}>
                    <img src={office_meeting_pic} alt="Team Meeting"/>
                </div>
                {/* </StyleRoot> */}
            </Grid>
            <Grid item xs={4}>
            </Grid>
        </Grid>
    )
}

export default Introduction
