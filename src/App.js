import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

const urlHosts = "http://localhost:4000/hosts"
const urlAreas = "http://localhost:4000/areas"

class App extends Component {
  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.
  state = {
    allHosts: [],
    allAreas: [],
    selectedHost: null
  }

  showHostDetails = (e, host) => {
    this.setState({
      selectedHost: host
    })
  }

  activateDeactivate = (e) => {
    //console.log('inside avtivateDeactivate')
    const currentHost = this.state.selectedHost
    currentHost.active = !currentHost.active

    //console.log(currentHost)
    this.setState({
      selectedHost: currentHost
    })
  }


  fetchHosts = () => {
    fetch(urlHosts)
    .then(res => res.json())
    .then(json => this.setState({
      allHosts: json
    }))
  }

  fetchAreas = () => {
    fetch(urlAreas)
    .then(res => res.json())
    .then(json => this.setState({
      allAreas: json
    }))
  }

  componentDidMount() {
    this.fetchHosts();
    this.fetchAreas();
  }

  render(){
    //console.log(this.state)
    return (
      <Segment id='app'>
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
        <WestworldMap allAreas={this.state.allAreas} allHosts={this.state.allHosts} selectedHost={this.state.selectedHost}/>
        <Headquarters allAreas={this.state.allAreas} activateDeactivate={this.activateDeactivate} showHostDetails={this.showHostDetails} selectedHost={this.state.selectedHost} allHosts={this.state.allHosts}/>
      </Segment>
    )
  }
}

export default App;
