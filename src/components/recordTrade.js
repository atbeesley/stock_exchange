import React from 'react'
import ReactDOM from "react-dom";


class RecordTradeForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Buy'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('buyOrSellValue: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div id="recordTrade">
            <h2>Record a trade</h2>
                <form onSubmit={this.handleSubmit}>
            <label>
                Buy or sell?
                <br />
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
                </select>
            </label>
            <br />
            <button type="submit" style={{marginTop: '1em'}}>Record the trade</button>
            </form>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <RecordTradeForm />,
    document.getElementById('root')
  );

  export default RecordTradeForm