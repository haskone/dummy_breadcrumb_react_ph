import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import BreadItem from './BreadItem';

import { setCurrentBread, setCurrentContent } from '../actions';

import { getContent } from '../api/content';

import './BreadCrumb.css';

const BreadCrumb = (props) => {
    const { crumbs, setCrumbs, setContent } = props;

    useEffect(() => {
        getContent(crumbs[0].name).then(crumb => {
            if (Array.isArray(crumb.children)) {
                setContent(crumb.children);
            }
        });
    }, []);

    const onCrumbClick = (item) => {
        setCrumbs([item]);
        getContent(item.name).then(crumb => {
            if (Array.isArray(crumb.children)) {
                setContent(crumb.children);
            }
        });
    };

    return (
        <div className="BreadCrumb">
            {
                crumbs
                    .map((item, index) =>
                        <BreadItem
                            isRoot={index == 0}
                            name={item.name}
                            key={index}
                            onClick={() => onCrumbClick(item)}
                        />
                    ).reduce((prev, curr) =>
                        [
                            prev,
                            <FontAwesomeIcon icon={faArrowRight} />,
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

const mapDispatchToProps = dispatch => ({
    setCrumbs: crumbs => dispatch(setCurrentBread(crumbs)),
    setContent: content => dispatch(setCurrentContent(content))
})

export default connect(mapStateToProps, mapDispatchToProps)(BreadCrumb);
