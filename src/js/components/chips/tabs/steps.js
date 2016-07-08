import React from 'react';
import { IconButton, Button } from '../buttons/buttons';
import './steps.css';

const Step = (props) => (
  <div id={props.id} className="step">
    {props.children}
  </div>
);

Step.propTypes = {
  id: React.PropTypes.string,
  children: React.PropTypes.node,
};

/**
 * Stepper
 *
 */
class Stepper extends React.Component {

  static propTypes = {
    step: React.PropTypes.number,
    steps: React.PropTypes.number.isRequired,
    backIcon: React.PropTypes.string,
    nextIcon: React.PropTypes.string,
  }

  static defaultProps = {
    step: 1,
    steps: 3,
    nextIcon: 'chevron_right',
    backIcon: 'chevron_left',
  }

  handleBack = () => {
    this.props.onStepChanged(this.props.step - 1);
  }

  handleNext = () => {
    this.props.onStepChanged(this.props.step + 1);
  }

  renderDots = () => {

    const dots = [];
    for (let i=1; i <= this.props.steps; i++ ) {
      const selectedClass = this.props.step === i ? 'selected' : '';
      dots.push(<div className={`dot ${selectedClass}`} />);
    }
    return dots;
  }

  renderButton = (icon, label, handler) => {
    return this.props.nextLabel ?
      <Button icon={icon} label={label} onMouseUp={handler} /> :
      <IconButton icon={icon} onMouseUp={handler} />;
  }

  render() {
    const backButtonClass = this.props.step === 1 ? 'disabled' : '';
    const nextButtonClass = this.props.step === this.props.steps.length ? 'disabled' : '';
    return (
      <div className="stepper">
        {this.renderButton(this.props.backIcon, null, this.handleBack)}
        <div className="flex">{this.renderDots()}</div>
        {this.renderButton(this.props.nextIcon, null, this.handleNext)}
      </div>
    );
  }
}

export { Step, Stepper };
