import React from 'react';
import Input from './Input';  
import Output from './Output';
import translate from '../translator/Translator'  
import CasePicker from './CasePicker';
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
        formattedUUID: undefined,
        toUpperCase: false,
    };
  }

  handleTextChange = e => {
    const inputText = e.target.value;
    const formattedText = translate(inputText, this.state.toUpperCase);
    this.setState({
      formattedUUID: formattedText
    });
  };

  handleCaseChange = e => {
    const isUpperCaseChosen = (e.target.value == 'true');
    this.setState({
      toUpperCase: isUpperCaseChosen
    });
  };
  

  render() {
    return (
      <>
      <Input handleChange={this.handleTextChange} />
      <CasePicker handleChange={this.handleCaseChange} upperCase={this.state.toUpperCase} />
      <Output formattedText={this.state.formattedUUID} toUpperCase={this.state.toUpperCase}/>
    </>
    )
  }
}
export default Home;