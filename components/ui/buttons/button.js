"use client";

import PropTypes from "prop-types";

export default function Button({ label, onClick }) {
  return (
    <button
      type="button"
      className="btn"
      onClick={onClick}
      aria-label={label}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};
