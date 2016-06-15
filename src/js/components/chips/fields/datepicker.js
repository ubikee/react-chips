import React from 'react';
import { IconButton } from '../buttons/buttons';

import './datepicker.css';

const Picker = (props) => (
  <div className="picker">
    <IconButton icon="keyboard_arrow_up" onMouseUp={props.onPrevious}/>
    <div>{props.value}</div>
    <IconButton icon="keyboard_arrow_down" onMouseUp={props.onNext}/>
  </div>
);

class DatePicker extends React.Component {

  monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];

  defaultProps = {
    today: 1,
    month: 0,
  };

  state = {
    today: this.defaultProps.today,
    month: this.defaultProps.month,
    year: 2016,
  };

  handleOK = () => {
    const date = new Date( this.state.year, this.state.month, this.state.today );
    if (this.props.onDateChanged)
      this.props.onDateChanged(date);
  }

  handleNextDay = () => {
    const nextDay = this.state.today === 31 ? 31 : this.state.today + 1;
    this.setState({ today: nextDay });
  };

  handlePrevDay = () => {
    const prevDay = this.state.today === 1 ? 1 : this.state.today - 1;
    this.setState({ today: prevDay });
  };

  handleNextMonth = () => {
    this.setState({ month: (this.state.month + 1) % 12 })
  }

  handlePrevMonth = () => {
    const prevMonth = this.state.month === 0 ? 0 : this.state.month - 1;
    this.setState({ month: prevMonth });
  }

  daysInMonth = (humanMonth, year) => {
    return new Date(year || new Date().getFullYear(), humanMonth, 0).getDate();
  };

  handleNextYear = () => {
    const nextYear = this.state.year + 1;
    this.setState({ year: nextYear });
  };

  handlePrevYear = () => {
    const prevYear = this.state.year - 1;
    this.setState({ year: prevYear });
  };

  renderDays = () => {
    const date = new Date();
    const today = date.getDate();
    const month = date.getMonth() + 1;
    const numMonthDays = this.daysInMonth(month);
    const monthDays = Array.from(Array(numMonthDays).keys()).slice(1);
  };

  render() {
    const monthName = this.monthNames[this.state.month];
    return (
      <div className="datepicker">
        <Picker value={this.state.today} onPrevious={this.handlePrevDay} onNext={this.handleNextDay} />
        <Picker value={monthName} onPrevious={this.handlePrevMonth} onNext={this.handleNextMonth} />
        <Picker value={this.state.year} onPrevious={this.handlePrevYear} onNext={this.handleNextYear} />
        <div className="flex vertical ">
          <IconButton id="close" icon="close" />
          <div className="expand"></div>
          <IconButton id="done" icon="done" onMouseUp={this.handleOK} />
        </div>
      </div>
    );
  }
}

export default DatePicker;
