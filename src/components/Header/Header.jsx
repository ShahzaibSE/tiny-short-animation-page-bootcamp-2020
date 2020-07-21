import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// Assets.
import useSyles from "./Header.styles"

const Header = () => {
    const classes = useSyles()
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    Cosmos Technologies
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
