import PropTypes from 'prop-types';

const goatShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  gender: PropTypes.string,
  isBusy: PropTypes.bool,
  beardLength: PropTypes.string,
  isFainter: PropTypes.bool,
  imgUrl: PropTypes.string,
  age: PropTypes.number,
});

export default { goatShape };
