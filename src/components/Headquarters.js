import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import LogPanel from './LogPanel'
import ColdStorage from './ColdStorage'


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.
  state = {
    selectedHost: null
  }

  showHostDetails = (e, host) => {
    console.log("just clicked on the host i am logging from inside the Headquarters component", host)
    this.setState({
      selectedHost: host
    })
  }

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        {/* Something goes here.... */}
        <ColdStorage
        allHosts={this.props.allHosts}
        showHostDetails={this.showHostDetails}
        selectedHostId={this.state.selectedHostId}/>

        </Grid.Column>
        <Grid.Column width={5}>
          <Details
          selectedHost={this.state.selectedHost}
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
