import './App.css';
import React, { useState, useEffect } from 'react'
import FetchMethod from './component/FetchMethod';
import FetchAsyncAwait from './component/FetchAsyncAwait';

function App() {

  return (
    <div className="App">
    <FetchAsyncAwait />
      {/* <FetchMethod /> */}
    </div>
  );
}

export default App;
