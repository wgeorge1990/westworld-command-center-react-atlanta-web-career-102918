import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'
import PropTypes from 'prop-types'
import _ from 'lodash'

const Area = (props) => (
/* Pass in the area name here to make sure this is styled correctly */
/* Don't just pass in the name from the data...clean that thing up */
/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */
  <div className='area' id={props.area.name}>
  
    <h3 className='labels'>{_.startCase(props.area.name)}</h3>
    <HostList hosts={props.hosts.filter(host => (host.active) && (host.area === props.area.name))} />
  </div>

)

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;