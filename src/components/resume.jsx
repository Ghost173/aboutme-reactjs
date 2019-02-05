import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Educations from './edu' ;
import Exp from './experiences';
import Skills from './skill';
class Resume extends Component{
    render(){
        return (
    <div>
    <Grid>
         <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                    <img 
                    src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                    alt="avatarman"
                    style={{height:'200px'}}
                    />
                    </div>
                    <h2 style={{paddingTop:'2em'}}>iam GROOT </h2>
                    <h4 style={{color:'gray'}}> programmer </h4>
                    <hr style={{borderTop:'3px solid #833fb2', width:'100%'}} />
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <hr style={{borderTop:'3px solid #833fb2', width:'100%'}} />
                    <h5>address</h5>
                    <p>1 hacker way meme park, 91145</p>
                    <h5>phone</h5>
                    <p>(123) 456-7890</p>
                    <h5>email</h5>
                    <p>exmaple@mail.com</p>
                    <hr style={{borderTop:'3px solid #833fb2', width:'100%',}} />
                    </Cell>

    <Cell className="res-rig-col" col={8}>
    <h2>educations</h2>    
    <Educations 
    startYear={2013}
    endYear={2014}
    schoolname="1st univercity"
    schooldes="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    />
    <Educations 
    startYear={2015}
    endYear={2017}
    schoolname="2nd univercity"
    schooldes="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    />
     <Educations 
    startYear={2018}
    endYear={2019}
    schoolname="3rd univercity"
    schooldes="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    />

    <hr style={{borderTop:'3px solid #e22947'}} />
    <h2> experiences</h2>
            <Exp  
            startYear={2006}
            endYear={2007}
            jobname="1st job"
            jobdes="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            />

            <Exp  
            startYear={2008}
            endYear={2011}
            jobname="2nd job"
            jobdes="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            />

            <Exp  
            startYear={2011}
            endYear={2019}
            jobname="3rd job"
            jobdes="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            />
    <hr style={{borderTop:'3px solid #e22947'}} />
    <h2>Skills</h2>
            <Skills
            skills="REACT-JS"
            progress={100}
            />
            <Skills
            skills="HTML/CSS"
            progress={80}
            />
            <Skills
            skills="GO"
            progress={10}
            />
            <Skills
            skills="PYTHON"
            progress={40}
            />
            <Skills
            skills="JAVA"
            progress={80}
            />
            <Skills
            skills="JS"
            progress={90}
            />
    </Cell>
                       
    </Grid>
    </div>
        )
    }

}

export default Resume ;