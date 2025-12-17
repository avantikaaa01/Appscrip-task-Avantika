

import PropTypes from "prop-types";

export default function Button({ label }) {
  return (
    <button type="button" aria-label={label}>
      {label}
    </button>
  );
}

  /**
 * Button component
 * @param {string} label - Button text
 */

Button.propTypes = {
  label: PropTypes.string.isRequired,
};
