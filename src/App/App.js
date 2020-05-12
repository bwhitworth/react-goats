import React from 'react';
import './App.scss';
import goatData from '../helpers/data/goatData';

import GoatCorral from '../components/GoatCorral/GoatCorral';


class App extends React.Component {
  // outside render - anything that modifies state
  // anything that changes the data
  state = {
    goats: [],
  }

  componentDidMount() {
    const goatsArray = goatData.getGoats();
    console.error('goats:', goatsArray);
    this.setState({ goats: goatsArray });
  }

  useAGoat = (goatId) => {
    goatData.useGoat(goatId);
    const newGoatsArray = goatData.getGoats();
    this.setState({ goats: newGoatsArray });
  }

  freeAGoat = (goatId) => {
    goatData.freeGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    // inside render - anything we need to modify the UI
    // only displaying something with the data that is available from ^
    return (
      <div className="App">
        <h1>GOAT YOGA LTD</h1>
        <GoatCorral goats={this.state.goats} useAGoat={this.useAGoat} freeAGoat={this.freeAGoat}/>
      </div>
    );
  }
}

export default App;
