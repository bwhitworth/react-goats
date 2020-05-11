import React from 'react';
import './App.scss';
import goatData from '../helpers/data/goatData';

class App extends React.Component {
  // outside render - anything that modifies state
  // anything that changes the data
  componentDidMount() {
    const goats = goatData.getGoats();
    console.error('goats:', goats);
  }

  render() {
    // inside render - anything we need to modify the UI
    // only displaying something with the data that is available from ^
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info">GOATS!</button>
      </div>
    );
  }
}

export default App;
