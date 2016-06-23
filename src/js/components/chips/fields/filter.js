import React from 'react';
import { IconButton } from '../buttons/buttons';
import { Select, Field } from './fields';
import './filter.css';

class Filter extends React.Component {

  static propTypes = {
    options: React.PropTypes.array,
    filter: React.PropTypes.object,
    onChange: React.PropTypes.func,
    toggleDialog: React.PropTypes.func,
  }

  handleValueChange = (nextValue) => {
    this.props.onChange({ value: nextValue });
  };

  handleCriteriaChange = (nextCriteria) => {
    this.props.onChange({ criteria: nextCriteria });
  };

  handleClearFilter = () => {
    this.props.onChange({ criteria: '', value: '' });
  };

  render() {
    const options = this.props.filter.options == null ? [] : this.props.filter.options;
    return (
      <div className={`filter ${this.props.className}`} style={{ borderBottom:'solid 1px #CCC'}}>
        <div className="flex center">
          <Select options={options} value={this.props.filter.criteria} onChange={this.handleCriteriaChange} onClick={this.openCenterDialog}/>
          <Field placeholder="..." value={this.props.filter.value} onChange={this.handleValueChange}/>
          <IconButton icon="close" onMouseUp={this.handleClearFilter} />
        </div>
      </div>
    );
  }
}

export default Filter;
