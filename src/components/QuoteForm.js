import React, { Component } from 'react';
import './QuoteForm.css';

const MAX_LENGTH = 30; 

class QuoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {character: ''};

        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      if (event.target.value.length <= MAX_LENGTH){
        this.setState({ character: event.target.value });
      }
        
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

  render() {

    const max = this.state.character.length >= MAX_LENGTH;
    const rest = MAX_LENGTH - this.state.character.length;

    return (
      <form
        className="QuoteForm" onSubmit={this.handleSubmit}>
        <label htmlFor="character">Character:</label>
        <input
          className={max ? "length-maximum-reached" : "length-ok"}
          id="character"
          name="character"
          type="text"
          value={this.state.character}
          onChange={this.handleChange}
        />
        <small className="remaining-characters">
          {rest} remaining characters
        </small>
        <p>
        You typed: <strong>{this.state.character}</strong>
        </p>
      </form>
    );
  }
}

export default QuoteForm;
