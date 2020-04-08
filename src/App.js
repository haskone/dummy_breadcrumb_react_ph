import React from 'react';

import BreadCrumb from './components/BreadCrumb';
import ContentPage from './components/ContentPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Breadcrumb Demo
        <BreadCrumb/>
        <ContentPage/>
      </header>
    </div>
  );
}

export default App;
