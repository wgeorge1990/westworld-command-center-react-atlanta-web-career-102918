import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

const urlHosts = "http://localhost:4000/hosts"

class App extends Component {
  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.
  state = {
    hosts: [],
    selectedHost: null
  }

  fetchHosts = () => {
    fetch(urlHosts)
    .then(res => res.json())
    .then(json => this.setState({
      hosts: json
    }))
  }

  handleClick = (e, host) => {
    console.log(e, host)
    this.setState({
      selectedHost: host
    })
  }

  toggle = (e, selectedHost) => {
    //FIRST SOLUTION
    const newHosts = this.state.hosts.slice()
    newHosts.find(host => host.id === 
              selectedHost.id).active = !selectedHost.active
    this.setState({ hosts: newHosts })

    //SECOND SOLUTION
    // //console.log("toggle from app component", e, selectedHost)
    // let editedHost = selectedHost
    // editedHost.active = !selectedHost.active
    // //console.log(editedHost)
    // //console.log(this.state.hosts.filter(host => host.id !== editedHost.id))
    // let filtered = this.state.hosts.filter(host => host.id !== editedHost.id)
    // let newHosts = filtered.concat(editedHost)
    // //console.log(newHosts)
    // this.setState({
    //   hosts: newHosts
    // })
      
      //THIRD SOLUTION
    // let activeness = !selectedHost.active
    // selectedHost.active = activeness
    // console.log(selecedHost)
    // this.setState({
    //   hosts: [...this.state.hosts, selectedHost]
    // })
    // console.log(this.state.host)

    }
  

  componentDidMount() {
    this.fetchHosts();
  }

  render(){
    console.log()
    return (
      <Segment id='app'>
        <WestworldMap hosts={this.state.hosts}/>
        <Headquarters toggle={this.toggle} selectedHost={this.state.selectedHost} handleClick={this.handleClick} hosts={this.state.hosts}/>
      </Segment>
    )
  }
}

export default App;
