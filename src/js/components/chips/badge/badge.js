import React from 'react';

// chips
import { IconButton } from '../buttons/buttons';

// css
import './badge.css';

/**
 * Badge
 *
 */
const Badge = (props) => {
  const selected = props.selected ? 'selected' : '';
  const handleUnselect = () => {
    props.onSelectionChanged({
      label: props.label,
      value: props.value,
      selected: false,
    });
  };
  const icon = (props.selected && props.icon) ?
    (<IconButton icon={props.icon} className="small" onMouseUp={handleUnselect} />) : '';
  const handleToggleSelected = () => {
    if (!props.selected) {
      props.onSelectionChanged({
        label: props.label,
        value: props.value,
        selected: true,
      });
    }
  };
  return (
    <div className={`badge ${selected} ${props.className}`} onMouseUp={handleToggleSelected}>
      {icon}
      <div className="label">{props.label}</div>
    </div>
  );
};

Badge.propTypes = {
  selected: React.PropTypes.bool,
  icon: React.PropTypes.string,
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  className: React.PropTypes.string,
  onSelectionChanged: React.PropTypes.func,
};

export default Badge;
