import React from 'react';

import { connect } from 'react-redux';
import { setCurrentBread, setCurrentContent } from '../actions';

import ContentItem from './ContentItem';

import { getContent } from '../api/content';

import './ContentPage.css';

const ContentPage = (props) => {
    const { content, setCrumbs, setContent } = props;

    const onContentClick = crumb => {
        if (crumb.type === 'dir') {
            getContent(crumb.name).then(crumb => {
                if (crumb.children != null) {
                    setCrumbs([crumb]);
                    setContent(crumb.children);
                }
            });
        } else {
            console.log("it's file");
        }
    }

    return (
        <div className="ContentPage">
            {
                content &&
                content.map((item, index) =>
                    <ContentItem
                        onItemClick={() => onContentClick(item)}
                        name={item.name}
                        type={item.type}
                        key={index}
                    />
                )
            }
            {
                (!content || content.length === 0) &&
                <div className="noContent">
                    No Content
                </div>
            }
        </div>
    );
}

const mapStateToProps = state => ({
    content: state.content
})

const mapDispatchToProps = dispatch => ({
    setCrumbs: crumbs => dispatch(setCurrentBread(crumbs)),
    setContent: content => dispatch(setCurrentContent(content))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentPage);
