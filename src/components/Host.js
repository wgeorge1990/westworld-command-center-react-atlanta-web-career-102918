import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'


  class Host extends React.Component {
    toggleActiveStatus=()=>{
      console.log("hello from inside the ")
    }

    render(){
      return(
        <Card
          className="host selected"
          /* NOTE: The className "host selected" renders a different style than simply "host". */
          onClick={(e) => this.props.showHostDetails(e, this.props.host)}
          image={this.props.host.imageUrl}
          raised
        />
      )
    }
  }


export default Host
