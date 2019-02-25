import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

class HostList extends React.Component {
  render() {
    return(
      <Card.Group itemsPerRow={6}>
        {(this.props.allHosts || this.props.hosts).map(host => <Host showHostDetails={this.props.showHostDetails} host={host} key={host.id}/>)}
      </Card.Group>
    )
  }
}

export default HostList
