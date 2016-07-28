import React from 'react';
import './fields.css';

const FieldGroup = (props) => (
  <div className="fieldgroup">
    <div className="icon"><i className="material-icons">{props.icon}</i></div>
    <div className="fields">{props.children}</div>
  </div>
);

FieldGroup.propTypes = {
  icon: React.PropTypes.string,
  children: React.PropTypes.node,
};

class Field extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    label: React.PropTypes.string,
    value: React.PropTypes.string,
    readOnly: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    required: React.PropTypes.bool,
    type: React.PropTypes.string,
  };

  handleChange = (e) => {
    this.props.onChange(e.target.value, this.props.id);
  };

  renderStatic() {
    return (
      <div className="field input-textfield mui-textfield static">
        <label>{this.props.label}</label>
        <div style={{ minHeight: '3rem', paddingTop: '0.5rem', fontSize: '1.5rem'}}>{this.props.value}</div>
      </div>
    );
  }

  render() {
    return this.props.readOnly ? this.renderStatic() : this.renderInput()
  }

  renderInput() {
    const type = this.props.type ? this.props.type: 'text';
    const required = this.props.required ? 'required' : '';
      return (
        <div className="field input-textfield mui-textfield mui-textfield--float-label">
          <input id={this.props.id} type={type} value={this.props.value} onChange={this.handleChange} required={required}></input>
          <label>{this.props.label}</label>
        </div>
      );
  }
}

/**
 * Selection field
 */
const Select = (props) => {

  const required = props.required ? 'required' : '';
  const options = props.options.map(option => (<option value={option.value} disabled={option.disabled} >{option.label}</option>));

  const handleChange = (e) => {
    props.onChange(e.target.value, props.id);
  };

  return (
    <div className="field select mui-select">
      <select id={props.id} value={props.value} onChange={handleChange} style={{marginBottom:'0'}} required={required}>
        {options}
      </select>
    </div>
  );
};

Select.propTypes = {
  id: React.PropTypes.string,
  options: React.PropTypes.array.isRequired,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

const Checkbox = (props) => {
  const checked = props.checked ? 'checked' : '';
  const label = props.checkedLabel ? (props.checked ? props.checkedLabel : props.label) : props.label;
  const handleChange = (event) => {
    props.onChange(props.id, event.target.checked);
  };
  return (
    <div className="field">
      <div className="checkbox mui-checkbox">
        <label>
          <input id={props.id} type="checkbox" checked={checked} onClick={handleChange} />
          {label}
        </label>
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  checked: React.PropTypes.bool,
  checkedLabel: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

class Slider extends React.Component {

  state = {
    checked: true,
  }

  toggleSlider = () => {
    //this.setState({ checked: !this.state.checked });
    this.props.onMouseUp(!this.state.checked);
  }

  render() {
    const selectedClass = this.state.checked ? 'selected' : '';
    return (
      <div className={`slider ${selectedClass}`} onMouseUp={this.toggleSlider}>
        <div className="slider-ball"></div>
      </div>
    );
  }
}

Slider.propTypes = {
  checked: React.PropTypes.bool,
  onMouseUp: React.PropTypes.func,
}

export { FieldGroup, Field, Select, Checkbox, Slider };
