import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Awesome(props) {
    return (
        <div>
                 <FontAwesomeIcon icon={props.name} />

        </div>
    )
}

export default Awesome;

