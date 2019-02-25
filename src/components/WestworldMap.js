import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'



const WestworldMap = (props) => {

  return (
    <Segment id="map" >

      {props.allAreas.map(area =>
        <Area
          Area={area}
          key={area.id}
          selectedHost={props.selectedHost}
          hosts={props.allHosts}
          limit={area.limit}


          />
      )
    }
    </Segment>
  )
}

export default WestworldMap
