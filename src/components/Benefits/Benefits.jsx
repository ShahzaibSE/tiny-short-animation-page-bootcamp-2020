import React, {useEffect} from 'react'
import {Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import {AddCircle} from '@material-ui/icons'
// Assets.
import "./Benefits.scss"
import overlay_image from "./../../images/overlay.png"

const Benefits = () => {

    return (
      <Grid container>
          <Grid item xs={9}>
                <div className="benefits_list_container">
                    <h2 className="cosmos_heading">
                        Cosmos<br/>Advantages</h2>
                        <ul>
                            <AddCircle style={{color:"lightblue", fontSize:30}} />
                            <li>US experienced management team</li>
                            <AddCircle style={{color:"lightblue", fontSize:30}} />
                            <li >Secure work environment</li>
                            <AddCircle style={{color:"lightblue", fontSize:30}} />
                            <li>Compliance driven process</li>
                            <AddCircle style={{color:"lightblue", fontSize:30}} />
                            <li>Data driven quality review</li>
                            <AddCircle style={{color:"lightblue", fontSize:30}} />
                            <li>Workforce management</li>
                            <AddCircle style={{color:"lightblue", fontSize:30}} />
                            <li>24x7 coverage</li>
                        </ul>    
                </div>
          </Grid>
          <Grid item xs={3}>
              <img src={overlay_image} alt="overlay" />
          </Grid>
      </Grid>  
    )
}

export default Benefits
