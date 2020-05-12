import React from 'react';
import './Goat.scss';

class Goat extends React.Component {
  useGoatEvent = (e) => {
    const { goat, useAGoat } = this.props;
    e.preventDefault();
    useAGoat(goat.id);
  };

  render() {
    const { goat } = this.props;
    // const goat = this.props.goat;

    return (
      <div className="Goat col-3">
        <div className="card">
          <img src={goat.imgUrl} class="card-img-top" alt="goat card"/>
          <div className="card-body">
            <h5 className="card-title">{goat.name}</h5>
            <p className="card-text">Beard Length: {goat.beardLength}</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-info" onClick={this.useGoatEvent}>Use This Goat</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
