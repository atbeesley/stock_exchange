import { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const [lastDividend, setLastDividend] = useState(0);
  const [price, setPrice] = useState(0);
  const [dividendYield, setDividendYield] = useState(0);

  function handleLastDividendChange(e) {
    setLastDividend(Number(e.target.value));
  }

  function handlePriceChange(e) {
    setPrice(+e.target.value);
  }

  function calculateDividendYield() {
    setDividendYield(lastDividend / price);
  }

  return (
    <div className="App">
      <h1>Calculate dividend yield</h1>

      <div className="number-inputs">
        <input type="number" placeholder="0" onChange={handleLastDividendChange} />
        <input type="number" placeholder="0" onChange={handlePriceChange} />
      </div>

      <button onClick={calculateDividendYield}>Calculate the dividend yield!</button>

      {dividendYield !== 0 && <h3>The stock's dividend yield is £{dividendYield}!</h3>}
      {dividendYield === 0 && <h3>Enter the stock's <b>last dividend</b> and <b>price</b> to get started!</h3>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
