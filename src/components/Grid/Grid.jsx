import React from 'react'
import {Grid} from "@material-ui/core"
// Components.
import Header from "./../Header/Header"
import Introduction from "./../Introduction/Introduction"
import About from "./../About/About"

const GridComponent = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Header/>
            </Grid>
            <Grid item xs={12}>
                <Introduction />
            </Grid>
            <Grid item xs={7}>
                    <About />
            </Grid>
        </Grid>
    )
}

export default GridComponent
