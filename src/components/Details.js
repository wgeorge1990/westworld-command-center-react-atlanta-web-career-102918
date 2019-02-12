import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'

  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  /*  (this.props.selectedHost === []) ? this.renderSomething() : <HostInfo selectedHost={this.props.selectedHost}
  />} */

class Details extends React.Component{
  renderSomething = () => (<Image size='medium' src={Images.westworldLogo}/>)

  render(){
    console.log((this.props.selectedHost === null, this.props.selectedHost))
    return(
      <Segment id="details" className="HQComps">

      {
        (this.props.selectedHost === null) ? this.renderSomething() : <HostInfo selectedHost={this.props.selectedHost}/>
    }



    </Segment>)
  }
}

export default Details
