import "../components/Tag.scss";
import PropTypes from "prop-types";

export default function Tag(props) {
  return (
    <div className="tag">
      <span className="tag_span">{props.tag}</span>
    </div>
  );
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};
