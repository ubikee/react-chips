import React from 'react';
import { IconButton } from '../buttons/buttons';
import { Select, Field } from './fields';

import './filter.css';

class Filter extends React.Component {

  static propTypes = {
    options: React.PropTypes.array,
    criteria: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
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

  goAdvanced = () => {
    alert("TODO: mostrar opciones de filtro avanzado");
  }

  render() {
    const options = this.props.options == null ? [] : this.props.options;
    return (
      <div className="filter" style={{ borderBottom:'solid 1px #CCC'}}>
        <div className="flex center centred"><IconButton icon="expand_more" onMouseUp={this.goAdvanced} /></div>
        <Select options={options} value={this.props.filter.criteria} onChange={this.handleCriteriaChange} />
        <Field placeholder="..." value={this.props.filter.value} onChange={this.handleValueChange}/>
        <div className="flex center centred"><IconButton icon="close" onMouseUp={this.handleClearFilter} /></div>
      </div>
    );
  }
}

export default Filter;
