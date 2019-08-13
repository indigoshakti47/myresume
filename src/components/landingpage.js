import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:'100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img src="http://fiyazhasan.me/content/images/2017/06/default-avatar-png.png" alt="avatar" className="my-avatar"></img>
                    <div className="my-text">
                        <h2 style={{alignContent:'center'}}>Visionary tech entrepreneur</h2>
                        <hr></hr>
                        <p> Disruptive engineer</p>
                        <p>
                         Envisioning new worlds | Starting projects | Networking | Traveling 
                        </p>
                        <div className="social-media-links">

                            <a href="https://www.linkedin.com/in/nathalia-avila-7a7907127/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>

                            <a href="https://github.com/indigoshakti47" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>

                            <a href="https://www.facebook.com/indigodreamer.1111" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>

                            <a href="https://twitter.com/Indigodreamer11" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter-square" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                    </Cell>


                </Grid>


            </div>
        )
    }
}
export default LandingPage;