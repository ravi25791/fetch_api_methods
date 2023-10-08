import './App.css';
import React, { useState, useEffect } from 'react'
import FetchMethod from './component/FetchMethod';
import FetchAsyncAwait from './component/FetchAsyncAwait';
import FetchAxios from './component/FetchAxios';

function App() {

  return (
    <div className="App">
    <FetchAxios />
    {/* <FetchAsyncAwait /> */}
      {/* <FetchMethod /> */}
    </div>
  );
}

export default App;
