import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

class Host extends React.Component {
  state= {
    selected: null
  }
    
    
    render () {
      const clicked = this.state.selected ? "host selected" : "host"
    return (
      <Card
        className={"host"}
        /* NOTE: The className "host selected" renders a different style than simply "host". */
        onClick={(e) => this.props.handleClick(e, this.props.host)}
        image={this.props.host.imageUrl}
        raised
      />
    )

  }
}

export default Host
