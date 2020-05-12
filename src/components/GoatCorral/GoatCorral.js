import React from 'react';
import './GoatCorral.scss';
import Goat from '../Goat/Goat';

class GoatCorral extends React.Component {
  render() {
    const { goats, useAGoat } = this.props;
    const makeGoats = goats.map((oneGoat) => (
      <Goat key={oneGoat.id} goat={oneGoat} useAGoat={useAGoat}/>
    ));
    return (
      <div className="GoatCorral d-flex row wrap">
        {makeGoats}
      </div>
    );
  }
}

export default GoatCorral;
