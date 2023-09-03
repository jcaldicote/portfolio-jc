import "../components/Tag2.scss";
import PropTypes from "prop-types";

export default function Tag2(props) {
  return (
    <div className="tag2">
      <div className="tag2_item">{props.tag}</div>
    </div>
  );
}

Tag2.propTypes = {
  tag: PropTypes.string.isRequired,
};
