import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import BreadItem from './BreadItem';

import './BreadCrumb.css';

const BreadCrumb = (props) => {
    const { crumbs, onItemLoad } = props;
    return (
        <div className='BreadCrumb'>
            {
                crumbs
                    .map((item, index) =>
                        <BreadItem
                            isRoot={index == 0}
                            name={item.name}
                            key={index}
                            onItemClick={() => onItemLoad(item)}
                        />
                    ).reduce((prev, curr) =>
                        [
                            prev,
                            <FontAwesomeIcon icon={faArrowRight}/>,
                            curr
                        ]
                    )
            }
        </div>
    );
}

const mapStateToProps = state => ({
    crumbs: state.crumbs
})

export default connect(mapStateToProps)(BreadCrumb);
