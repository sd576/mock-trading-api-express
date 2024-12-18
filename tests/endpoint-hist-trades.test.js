import test from "test-curried";
import mock_client from "../binance/rest-client.js";

// Mocked example of historical trades
const hist_trades_example = [
  {
    id: 28457,
    price: "4.00000100",
    qty: "12.00000000",
    quoteQty: "48.000012",
    time: 1499865549590,
    isBuyerMaker: true,
    isBestMatch: true,
  },
];

// Test case: Successful response with valid query and headers
test("historicalTrades works with symbol=ETHBNB", (t) => {
  mock_client({
    url: "https://api.binance.com/api/v3/historicalTrades",
    query: { symbol: "ETHBNB" },
    headers: { "X-MBX-APIKEY": "BINANCE_API_KEY" },
  })(t.cDeepEqual(hist_trades_example));
});

// Test case: Missing query parameter throws error
test("historicalTrades throws without query", (t) => {
  t.throws(() =>
    mock_client({
      url: "https://api.binance.com/api/v3/historicalTrades",
    })(console.log)
  );
});

// Test case: Missing symbol in query throws error
test("historicalTrades throws without symbol", (t) => {
  t.throws(() =>
    mock_client({
      url: "https://api.binance.com/api/v3/historicalTrades",
      query: { limit: 1 },
    })(console.log)
  );
});

// Test case: Missing headers throws error
test("historicalTrades throws without headers", (t) => {
  t.throws(() =>
    mock_client({
      url: "https://api.binance.com/api/v3/historicalTrades",
      query: { symbol: "ETHBNB" },
    })(console.log)
  );
});

// Test case: Incorrect headers throws error
test("historicalTrades throws with wrong headers", (t) => {
  t.throws(() =>
    mock_client({
      url: "https://api.binance.com/api/v3/historicalTrades",
      query: { symbol: "ETHBNB" },
      headers: { APIKEY: "BINANCE_API_KEY" }, // Incorrect header key
    })(console.log)
  );
});
