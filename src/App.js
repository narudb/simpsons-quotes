import React from "react";
import Navbar from "./components/Navbar";
//import QuoteList from './components/QuoteList';
//import QuoteForm from './components/QuoteForm';
import axios from "axios";
import QuoteRandom from "./components/QuoteRandom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes?count=num")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        this.setState({
          quote: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        {this.state.quote ? <QuoteRandom quote={this.state.quote} /> : null}
        <button type="button" onClick={this.getQuote}>
          Get Simpsons Quotes
        </button>
      </div>
    );
  }
}

export default App;
