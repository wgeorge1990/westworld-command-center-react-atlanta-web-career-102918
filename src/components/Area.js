import React from 'react';
import '../stylesheets/Area.css'
import _ from 'lodash';
import HostList from './HostList'

const Area = (props) => (

  <div className='area' id={props.Area.name}>
    <h3 className='labels'>{_.startCase(props.Area.name)}</h3>

    

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
