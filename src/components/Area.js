import React from 'react';
import '../stylesheets/Area.css'
import _ from 'lodash';
import HostList from './HostList'
import Host from './Host'

const Area = ({Area, hosts, selectedHost}) => (


  <div className='area' id={Area.name}>
    <h3 className='labels'>{_.startCase(Area.name)}</h3>
    <HostList
      hosts={hosts}
      selectedHost={selectedHost}
      area={Area}
      />
{
       hosts.map((host, index) => {
        if(host.area === _.startCase(Area.name)) {
          return (
            <Host host={host} key={host.id} />
          )
        }
      })



  }




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
