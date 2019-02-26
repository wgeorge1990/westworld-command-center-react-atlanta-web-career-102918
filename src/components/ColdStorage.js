import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'

const ColdStorage = (props) => (
  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>
      < HostList handleClick={(e, host)=>props.handleClick(e, host)} hosts={props.hosts.filter(host => (!host.active))} />
    </Segment>
  </Segment.Group>
)

export default ColdStorage
