import React from 'react'
import {Button} from 'react-bootstrap'
function Buttons(props) {

    const classes = `btn ${props.inclination}`;
    return (

       
        <div>
              <Button className={classes}>{props.text}</Button>
        </div>
    )
}

export default Buttons
