import React, { Component } from 'react';
import {Tabs, Tab ,Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, Slider} from 'react-mdl';

class Project extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab:0};

    }
    toggleCategories(){
        if(this.state.activeTab===0){
            return(
            <div className="projet-gird">
             {/* project #1*/ }
             <Cell col={4}> 
                  <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                  <CardTitle style={{color:'#fff', height:'176px', background: 
                  'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>React Project#1</CardTitle>
                    <CardText>
                    some dummy text here some dummy text heresome dummy text heresome dummy text heresome dummy text here
                    </CardText>
                    <CardActions border>
                        <Button colored>GITHUB</Button>
                        <Button colored>codepen</Button>
                        <Button colored>livedemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                  </Card>
                  </Cell>
            {/* #project2 */}
            <Cell col={4}> 
                  <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                  <CardTitle style={{color:'#fff', height:'176px', background: 
                  'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>React Project#2</CardTitle>
                    <CardText>
                    some dummy text here some dummy text heresome dummy text heresome dummy text heresome dummy text here
                    </CardText>
                    <CardActions border>
                        <Button colored>GITHUB</Button>
                        <Button colored>codepen</Button>
                        <Button colored>livedemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                  </Card>
                  </Cell>
                  {/* project #3*/ }
                  <Cell col={4}> 
                  <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                  <CardTitle style={{color:'#fff', height:'176px', background: 
                  'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>React Project#3</CardTitle>
                    <CardText>
                    some dummy text here some dummy text heresome dummy text heresome dummy text heresome dummy text here
                    </CardText>
                    <CardActions border>
                        <Button colored>GITHUB</Button>
                        <Button colored>codepen</Button>
                        <Button colored>livedemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                  </Card>
                  </Cell>
                   {/* project #3*/ }
                   <Cell col={4}> 
                  <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                  <CardTitle style={{color:'#fff', height:'176px', background: 
                  'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>React Project#3</CardTitle>
                    <CardText>
                    some dummy text here some dummy text heresome dummy text heresome dummy text heresome dummy text here
                    </CardText>
                    <CardActions border>
                        <Button colored>GITHUB</Button>
                        <Button colored>codepen</Button>
                        <Button colored>livedemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                  </Card>
                  </Cell>
                   {/* project #3*/ }
                   <Cell col={4}> 
                  <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                  <CardTitle style={{color:'#fff', height:'176px', background: 
                  'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>React Project#3</CardTitle>
                    <CardText>
                    some dummy text here some dummy text heresome dummy text heresome dummy text heresome dummy text here
                    </CardText>
                    <CardActions border>
                        <Button colored>GITHUB</Button>
                        <Button colored>codepen</Button>
                        <Button colored>livedemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                  </Card>
                  </Cell>
                   {/* project #3*/ }
                   <Cell col={4}> 
                  <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                  <CardTitle style={{color:'#fff', height:'176px', background: 
                  'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>React Project#3</CardTitle>
                    <CardText>
                    some dummy text here some dummy text heresome dummy text heresome dummy text heresome dummy text here
                    </CardText>
                    <CardActions border>
                        <Button colored>GITHUB</Button>
                        <Button colored>codepen</Button>
                        <Button colored>livedemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                  </Card>
                  </Cell>
                 
                  </div>

                
            )
        } else if(this.state.activeTab===1){
            return(
                <div>
                   <Cell col={4}> 
                  <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                  <CardTitle style={{color:'#fff', height:'176px', background: 
                  'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}>React Project#3</CardTitle>
                    <CardText>
                    some dummy text here some dummy text heresome dummy text heresome dummy text heresome dummy text here
                    </CardText>
                    <CardActions border>
                        <Button colored>GITHUB</Button>
                        <Button colored>codepen</Button>
                        <Button colored>livedemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                  </Card>
                  </Cell>
                </div>
            )
        }else if(this.state.activeTab===2) {
            return(
                <div>
                    <h1>this is go</h1>
                </div>
            )
        }else if(this.state.activeTab===3) {
            return(
                <div>
                    <h1>this is python</h1>
                </div>
            )
        }
        
        
    }
    render(){
        return (
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabid) => this.setState({activeTab:tabid})} ripple>
                <Tab>React</Tab>
                <Tab>Angualr</Tab>
                <Tab>GO</Tab>
                <Tab>Python</Tab>            
            </Tabs>
            
            <Grid>
                <Cell col="12"> 
                    <div className="content"> {this.toggleCategories()}</div>
                </Cell>
            </Grid>
               
           
            </div>
        )
    }

}

export default Project ;