import React from 'react';
import { connect } from 'react-redux';

import ContentItem from './ContentItem';

import './ContentPage.css';

const ContentPage = (props) => {
    const { content, fileContent, onItemLoad } = props;
    return (
        <div className='ContentPage'>
            {
                content != null &&
                content.map((item, index) =>
                    <ContentItem
                        onItemClick={() => onItemLoad(item)}
                        name={item.name}
                        type={item.type}
                        key={index}
                    />
                )
            }
            {
                fileContent != '' &&
                <div className='RawContent'>
                    { fileContent }
                </div>
            }
        </div>
    );
}

const mapStateToProps = state => ({
    content: state.content,
    fileContent: state.fileContent
})

export default connect(mapStateToProps)(ContentPage);
