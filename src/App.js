import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import BreadCrumb from './components/BreadCrumb';
import ContentPage from './components/ContentPage';

import { setCurrentContent, setFileContent, setCurrentBread } from './actions';

import { getContent } from './api/content';

import './App.css';

const App = props => {
    const { setContent, setFile, setCrumb, crumbs } = props;

    const setAllContent = (crumb) => {
        if (crumb.type === 'dir') {
            setFile('');
            setContent(crumb.children);
        } else if (crumb.type === 'file') {
            // TODO: move to some constants?
            setFile(`THIS IS FILE: ${crumb.name}`);
            setContent([]);
        }
    }

    useEffect(() => {
        getContent(crumbs[0].path).then(crumb => {
            setAllContent(crumb);
        });
    }, []);

    const onItemLoad = (item) => {
        setCrumb(item);
        // Reload on each click, since our
        // client side doesnt know about
        // content inside each subitem
        getContent(item.path).then(crumb => {
            setAllContent(crumb);
        });
    };

    return (
        <div className='App'>
            <header className='App-header'>
                Breadcrumb Demo
                <BreadCrumb setAllContent={setAllContent} onItemLoad={onItemLoad} />
                <ContentPage setAllContent={setAllContent} onItemLoad={onItemLoad} />
            </header>
        </div>
    );
}

const mapStateToProps = state => ({
    crumbs: state.crumbs
})

const mapDispatchToProps = dispatch => ({
    setContent: content => dispatch(setCurrentContent(content)),
    setFile: content => dispatch(setFileContent(content)),
    setCrumb: crumb => dispatch(setCurrentBread(crumb))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
