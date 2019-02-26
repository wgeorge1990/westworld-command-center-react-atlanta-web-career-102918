import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

  return(
    <Card.Group itemsPerRow={6}>
      {props.hosts.map(host => <Host handleClick={(e, host)=>props.handleClick(e, host)} host={host} key={host.id}/>)}
    </Card.Group>
  )
}

export default HostList
