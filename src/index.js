import { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import RecordTradeForm from './components/recordTrade'

function App() {
  const [lastDividend, setLastDividend] = useState(0);
  const [price, setPrice] = useState(0);
  const [dividendYield, setDividendYield] = useState(0);
  const [pePrice, setPePrice] = useState(0);
  const [dividend, setDividend] = useState(0);
  const [peRatio, setPeRatio] = useState(0);

  // dividend yield
  function handleLastDividendChange(e) {
    setLastDividend(Number(e.target.value));
  }

  function handlePriceChange(e) {
    setPrice(+e.target.value);
  }

  function calculateDividendYield() {
    setDividendYield(lastDividend / price);
  }

  // P/E ratio
  function handlePePriceChange(e) {
    setPePrice(Number(e.target.value));
  }

  function handleDividendChange(e) {
    setDividend(+e.target.value);
  }

  function calculatePeRatio() {
    setPeRatio(pePrice / dividend);
  }

  return (
    <div className="App">
      <h1>Stock Exchange App</h1>
      <div id="dividendYield" style={{marginTop: '2em'}}>
      
        <h2>Calculate dividend yield</h2>

        <div className="number-inputs">
          <p>Last Dividend</p>
          <input type="number" placeholder="0" onChange={handleLastDividendChange} />
          <p>Price per share</p>
          <input type="number" placeholder="0" onChange={handlePriceChange} />
        </div>

        <button onClick={calculateDividendYield}>Calculate the dividend yield!</button>

        {dividendYield !== 0 && <h3>The stock's dividend yield is £{dividendYield}!</h3>}
        {dividendYield === 0 && <h3>Enter the stock's <b>last dividend</b> and <b>price</b> to get started!</h3>}
        {dividendYield === Infinity && <h3>Enter the stock's <b>price</b>!</h3>}
      </div>
      <div id="peRatio" style={{marginTop: '5em', marginBottom: '5em'}}>      
        <h2>Calculate P/E ratio</h2>

        <div className="number-inputs">
          <p>Price</p>
          <input type="number" placeholder="0" onChange={handlePePriceChange} />
          <p>Dividend</p>
          <input type="number" placeholder="0" onChange={handleDividendChange} />
        </div>

        <button onClick={calculatePeRatio}>Calculate the P/E ratio!</button>

        {peRatio !== 0 && <h3>The stock's P/E ratio is £{peRatio}!</h3>}
        {peRatio === 0 && <h3>Enter the stock's <b>price</b> and <b>dividend</b> to get started!</h3>}
        {peRatio === Infinity && <h3>Enter the stock's <b>dividend</b>!</h3>}

      </div>
      <RecordTradeForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
