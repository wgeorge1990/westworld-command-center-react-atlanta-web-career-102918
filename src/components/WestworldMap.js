import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import Area from './Area'

const urlAreas = "http://localhost:4000/areas"

class WestworldMap extends React.Component{
  state = {
    areas: []
  }
  componentDidMount() {
    this.fetchAreas();
  }

  fetchAreas = () => {
    fetch(urlAreas)
      .then(res => res.json())
      .then(json => this.setState({
        areas: json
      }))
  }


  render(){
    return(
      
      <Segment id="map" >
        {this.state.areas.map(area => <Area hosts={this.props.hosts} area={area} key={area.id} />)}
      </Segment>
    )
  }
}

export default WestworldMap
