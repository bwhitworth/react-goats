import React from 'react';
import './GoatCorral.scss';
import Goat from '../Goat/Goat';

class GoatCorral extends React.Component {
  render() {
    console.error('goats?', this.props.goats);
    const makeGoats = this.props.goats.map((oneGoat) => (
      <Goat goat={oneGoat}/>
    ));
    return (
      <div className="GoatCorral d-flex row wrap">
        {makeGoats}
      </div>
    );
  }
}

export default GoatCorral;
