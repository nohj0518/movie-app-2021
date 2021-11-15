import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  function onChange(event) {
    setMoney(event.target.value);
    console.log(money);
  }
  return (
    <html lang="ko">
      <body>
        <h1>The Coins💰 {loading ? "" : `(${coins.length})`}</h1>
        {loading ? (
          <strong>Loading ...</strong>
        ) : (
          <div>
            <input
              onChange={onChange}
              value={money}
              type="number"
              placeholder="How much do you have ?"
            />
            <select>
              {coins.map((coin) => (
                <option>
                  {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD{" "}
                  {money / coin.quotes.USD.price}
                  {coin.symbol}
                </option>
              ))}
            </select>
          </div>
        )}
      </body>
    </html>
  );
}
export default App;
