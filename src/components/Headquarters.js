import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import LogPanel from './LogPanel'
import ColdStorage from './ColdStorage'


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.




  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        {/* Something goes here.... */}
        <ColdStorage
        allHosts={this.props.allHosts}
        showHostDetails={this.props.showHostDetails}
        selectedHost={this.props.selectedHost}/>

        </Grid.Column>
        <Grid.Column width={5}>
          <Details
          selectedHost={this.props.selectedHost}
          showHostDetails={this.props.showHostDetails}
          activateDeactivate={this.props.activateDeactivate}
          />
        </Grid.Column>
        <Grid.Column width={3}>

        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
        <LogPanel/>

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
