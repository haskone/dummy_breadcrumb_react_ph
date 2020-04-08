import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons'

import './ContentItem.css';

const ContentItem = (props) => {
    const { name, type, onItemClick } = props;

    const handleClick = (e) => {
        e.preventDefault();
        onItemClick();
    };

    return (
        <div className="ContentItem">
            <FontAwesomeIcon icon={type === 'dir' ? faFolder : faFile} />
            <div className="itemName">
                <a href="#" onClick={handleClick}>{ name }</a>
            </div>
        </div>
    );
}

export default ContentItem;
