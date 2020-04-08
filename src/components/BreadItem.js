import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import './BreadItem.css';

const BreadItem = (props) => {
    const { name, onClick, isRoot } = props;
    
    const handleClick = (e) => {
        e.preventDefault();
        onClick();
    };

    return (
        <div className="BreadItem">
            { isRoot && <FontAwesomeIcon icon={ faPlay } /> }
            <a href="#" onClick={ handleClick }>{ name }</a>
        </div>
    );
}

export default BreadItem;
