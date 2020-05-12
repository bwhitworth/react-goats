import React from 'react';
import './Goat.scss';

class Goat extends React.Component {
  render() {
    const { goat } = this.props;
    // const goat = this.props.goat;
    return (
      <div className="Goat col-3">
        <div class="card">
          <img src={goat.imgUrl} class="card-img-top" alt="goat card"/>
          <div class="card-body">
            <h5 class="card-title">{goat.name}</h5>
            <p class="card-text">Beard Length: {goat.beardLength}</p>
            <button class="btn btn-info">Goat Yoga!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
