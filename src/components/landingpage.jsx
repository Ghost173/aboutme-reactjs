import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Landing extends Component{
    render(){
        return (
            <div style={ {width: '100%',margin: 'auto'}}>
            <Grid className="landing-gird">
                <Cell col={12}>
                <img src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png" 
                alt="avatar"
                className="avatar-img"
                />
                <div className="banner-text">
                    <h1>full stack web developer</h1>
                    <hr/>
                    <p> HTML/css | bootstrap | JS | React | nodejs | sql | php | Python | go | selenium</p>
                <div className="social-link">
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-linkedin"  aria-hidden="true" />
                    </a>
                </div>
                </div>
                </Cell>
            </Grid> 
    
            </div>
        )
    }

}

export default Landing ;