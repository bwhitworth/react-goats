import React from 'react';
import PropTypes from 'prop-types';
import goatShapePropz from '../../helpers/propz/goatShape';
import './GoatCorral.scss';
import Goat from '../Goat/Goat';

class GoatCorral extends React.Component {
  static propTypes = {
    freeAGoat: PropTypes.func.isRequired,
    useAGoat: PropTypes.func.isRequired,
    goats: PropTypes.arrayOf(goatShapePropz.goatShape),
  }

  render() {
    const { goats, useAGoat, freeAGoat } = this.props;
    const makeGoats = goats.map((oneGoat) => (
      <Goat key={oneGoat.id} goat={oneGoat} useAGoat={useAGoat} freeAGoat={freeAGoat}/>
    ));
    return (
      <div className="GoatCorral d-flex row wrap">
        {makeGoats}
      </div>
    );
  }
}

export default GoatCorral;
