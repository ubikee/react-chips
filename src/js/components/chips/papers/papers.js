import React from 'react';
import { IconButton } from '../buttons/buttons';
import './papers.css';

const Paper = (props) => (
  <div className={`paper ${props.className}`}>
    {props.children}
  </div>
);

Paper.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};

class ExpansionPaper extends React.Component {

  defaultProps = {
    collapsed: true,
  };

  state = {
    collapsed: this.defaultProps.collapsed,
  };

  handleToggleExpansion = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const collapsedClassName = this.state.collapsed ? 'collapsed' : '';
    return (
      <div className={`paper expansion animated ${collapsedClassName} ${this.props.className}`}>
        <IconButton classes="icon-button animated collapser" icon="keyboard_arrow_down" onMouseUp={this.handleToggleExpansion}/>
        {this.props.children}
      </div>
    );
  }
}

ExpansionPaper.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};

export { Paper, ExpansionPaper };