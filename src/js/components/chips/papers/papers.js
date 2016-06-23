import React from 'react';
import { IconButton } from '../buttons/buttons';
import './papers.css';

const Paper = (props) => {
  const collapsed = props.collapsed ? 'collapsed' : '';
  return (
    <div className={`paper ${collapsed} animated-fast ${props.className}`}>
      {props.children}
    </div>
  );
};

Paper.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};

class ExpansionPaper extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
    collapsed: React.PropTypes.bool,
    className: React.PropTypes.string,
  };

  defaultProps = {
    collapsed: this.props.collapsed,
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
      <div className={`expansion animated ${collapsedClassName} ${this.props.className}`}>
        <IconButton classes="icon-button animated collapser light" icon="keyboard_arrow_down" onMouseUp={this.handleToggleExpansion}/>
        {this.props.children}
      </div>
    );
  }
}

class TabbedPaper extends React.Component {

  static propTypes = {
    collapsed: React.PropTypes.bool,
    children: React.PropTypes.node,
  }

  defaultProps = {
    collapsed: this.props.collapsed,
  }

  render() {
    console.log(this.props.collapsed)
    return (
      <div className="tabbed-paper">
        <Paper {...this.props}/>
        <div className="tabs">
          <IconButton icon="filter_list" className="half shadow-bottom" onMouseUp={this.props.onMouseUp}/>
        </div>
      </div>
    );
  }
}

export { Paper, ExpansionPaper, TabbedPaper };
