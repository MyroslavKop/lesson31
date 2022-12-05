import PropTypes from "prop-types";

const Title = ({ name }) => {
  return <h1>{name}</h1>;
};

const a = 1;
const b = 2;

Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;
