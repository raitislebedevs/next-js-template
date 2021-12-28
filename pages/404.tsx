import PropTypes from 'prop-types';

const NotFound = (props) => {
  return <p> ERROR PAGE</p>;
};

NotFound.propTypes = {
  t: PropTypes.func.isRequired,
};

export default NotFound;