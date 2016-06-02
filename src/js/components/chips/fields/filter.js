import React from 'react';
import { IconButton } from '../buttons/buttons';
import { Select, Field } from './fields';

class Filter extends React.Component {

  static propTypes = {
    options: React.PropTypes.array,
    criteria: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
  }

  filter = (e) => {
    this.props.onChange({ value: e.target.value });
  };

  handleCriteriaChange = (e) => {
    this.props.onChange({ criteria: e.target.value });
  };

  clearFilter = () => {
    this.props.onChange({ criteria: '', value: '' });
  };

  renderOptions = (options) => options.map(
    (option) => <option value={option.value}>{option.label}</option>
  );

  render() {
    return (
      <div className="flex expand center centred" style={{ minHeight:'8rem'}}>
        <Select options={this.props.options} value={this.props.criteria} onChange={this.handleCriteriaChange} />
        <Field placeholder="..." value={this.props.value} onChange={this.filter}/>
        <IconButton icon="close" onMouseUp={this.learFilter} />
      </div>
    );
  }
}

export default Filter;
