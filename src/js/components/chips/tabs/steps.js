import React from 'react';
import { Button } from '../buttons/buttons';
import './steps.css';

const Step = (props) => (
  <div id={props.id} className="step mui-panel">
    {props.children}
  </div>
);

Step.propTypes = {
  id: React.PropTypes.string,
  children: React.PropTypes.node,
};

class Stepper extends React.Component {

  static propTypes = {
    step: React.PropTypes.number.isRequired,
  }

  handleBack = () => {
    this.props.onStepChanged(this.props.step - 1);
  }

  handleNext = () => {
    this.props.onStepChanged(this.props.step + 1);
  }

  renderDots = () => {
    return this.props.steps.map((item) => {
      const selectedClass = item == this.props.step ? 'selected' : '';
      return (<div className={`dot ${selectedClass}`} />);
    });
  }

  render() {

    const backButtonClass = this.props.step === 1 ? 'disabled' : '';
    const nextButtonClass = this.props.step === this.props.steps.length ? 'disabled' : '';
    return (
      <div className="stepper">
        <Button icon="arrow_left" label="BACK" onMouseUp={this.handleBack} classes={backButtonClass}/>
        <div className="flex">{this.renderDots()}</div>
        <Button icon="arrow_right" label="NEXT" onMouseUp={this.handleNext} classes={nextButtonClass}/>
      </div>
    );
  }
}

export { Step, Stepper };
