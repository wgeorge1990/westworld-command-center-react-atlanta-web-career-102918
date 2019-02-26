import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid, Container } from 'semantic-ui-react';
import Details from './Details'
import LogPanel from './LogPanel'
import ColdStorage from './ColdStorage'


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.

  
  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>


          <ColdStorage handleClick={(e, host)=>this.props.handleClick(e, host)} hosts={this.props.hosts}/>


        </Grid.Column>
        <Grid.Column width={5}>


              <Details toggle={this.props.toggle} selectedHost={this.props.selectedHost}/>
        

        </Grid.Column>
        <Grid.Column width={3}>


              <LogPanel/>


        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
