import React from 'react'
import {Button} from 'react-bootstrap'
function Buttons(props) {

    const classes = `btn ${props.inclination}`;
    return (

       
        <div>
              <Button className={classes} onClick={props.click} type={props.type}>{props.text}</Button>
        </div>
    )
}

export default Buttons
