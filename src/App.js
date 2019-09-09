import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import ChatContainer from './Components/ChatContainer';

function App() {
  return (
    <div className="App">
      <ChatContainer />
    </div>
  );
}

export default connect(null, null)(App);
