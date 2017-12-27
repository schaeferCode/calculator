import React from 'react';

import Screen from './Screen.jsx';
import Button from './Button.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      output: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    const value = event.target.value;
    if (value === '=') {
      const answer = eval(this.state.input).toString();
      this.setState({ 
        input: '', 
        output: answer
      });
    } else if (value === 'C') {
      this.setState({
        input: '',
        output: ''
      });
    } else {
      this.setState({ 
        input: this.state.input + value,
        output: value 
      });
    }
  }

  render() {
    return (
      <div className="frame">
        <div className="calculator-title">
          React Calculator
        </div>
        <Screen output={this.state.output}/>
        <div className="button-row">
          <Button label={'C'} handleClick={this.handleClick} type='action' />
          <Button label={'-/+'} handleClick={this.handleClick} type='action' />
          <Button label={'%'} handleClick={this.handleClick} type='action' />
          <Button label={'/'} handleClick={this.handleClick} type='action' />
        </div>
        <div className="button-row">
          <Button label={'7'} handleClick={this.handleClick} type='input' />
          <Button label={'8'} handleClick={this.handleClick} type='input' />
          <Button label={'9'} handleClick={this.handleClick} type='input' />
          <Button label={'*'} handleClick={this.handleClick} type='action' />
        </div>
        <div className="button-row">
          <Button label={'4'} handleClick={this.handleClick} type='input' />
          <Button label={'5'} handleClick={this.handleClick} type='input' />
          <Button label={'6'} handleClick={this.handleClick} type='input' />
          <Button label={'-'} handleClick={this.handleClick} type='action' />
        </div>
        <div className="button-row">
          <Button label={'1'} handleClick={this.handleClick} type='input' />
          <Button label={'2'} handleClick={this.handleClick} type='input' />
          <Button label={'3'} handleClick={this.handleClick} type='input' />
          <Button label={'+'} handleClick={this.handleClick} type='action' />
        </div>
        <div className="button-row">
          <Button label={'0'} handleClick={this.handleClick} type='input' />
          <Button label={'.'} handleClick={this.handleClick} type='input' />
          <Button label={'='} handleClick={this.handleClick} type='action' />
        </div>
      </div>
    );
  }
}

export default App;