import test from "test-curried";
import mock_client from "../binance/rest-client.js";

// Mocked examples for testing
const depth_example = {
  lastUpdateId: 1027024,
  bids: [["4.00000000", "431.00000000"]],
  asks: [["4.00000200", "12.00000000"]],
};

const trades_example = [
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

const aggTrades_example = [
  {
    a: 26129, // Aggregate tradeId
    p: "0.01633102", // Price
    q: "4.70443515", // Quantity
    f: 27781, // First tradeId
    l: 27781, // Last tradeId
    T: 1498793709153, // Timestamp
    m: true, // Was the buyer the maker?
    M: true, // Was the trade the best price match?
  },
];

const klines_example = [
  [
    1499040000000, // Open time
    "0.01634790", // Open
    "0.80000000", // High
    "0.01575800", // Low
    "0.01577100", // Close
    "148976.11427815", // Volume
    1499644799999, // Close time
    "2434.19055334", // Quote asset volume
    308, // Number of trades
    "1756.87402397", // Taker buy base asset volume
    "28.46694368", // Taker buy quote asset volume
    "17928899.62484339", // Ignore.
  ],
];

const avgPrice_example = {
  mins: 5,
  price: "9.35751834",
};

// Test cases for `depth`
test("depth throws error when query is missing", (t) => {
  t.throws(() =>
    mock_client({
      url: "https://api.binance.com/api/v3/depth",
    })(console.log)
  );
});

test("depth throws error when query is missing symbol", (t) => {
  t.throws(() =>
    mock_client({
      url: "https://api.binance.com/api/v3/depth",
      query: { limit: 10 },
    })(console.log)
  );
});

test("depth works with symbol=ETHBNB", (t) => {
  mock_client({
    url: "https://api.binance.com/api/v3/depth",
    query: { symbol: "ETHBNB" },
  })(t.cDeepEqual(depth_example));
});

// Test cases for `trades`
test("trades throws error when query is missing", (t) => {
  t.throws(() =>
    mock_client({
      url: "https://api.binance.com/api/v3/trades",
    })(console.log)
  );
});

test("trades throws error when query is missing symbol", (t) => {
  t.throws(() =>
    mock_client({
      url: "https://api.binance.com/api/v3/trades",
      query: { limit: 10 },
    })(console.log)
  );
});

test("trades works with symbol=ETHBNB", (t) => {
  mock_client({
    url: "https://api.binance.com/api/v3/trades",
    query: { symbol: "ETHBNB" },
  })(t.cDeepEqual(trades_example));
});

// Test cases for `aggTrades`
test("aggTrades throws error when query is missing", (t) => {
  t.throws(() =>
    mock_client({
      url: "https://api.binance.com/api/v3/aggTrades",
    })(console.log)
  );
});

test("aggTrades throws error when query is missing symbol", (t) => {
  t.throws(() =>
    mock_client({
      url: "https://api.binance.com/api/v3/aggTrades",
      query: { limit: 10 },
    })(console.log)
  );
});

test("aggTrades works with symbol=ETHBNB", (t) => {
  mock_client({
    url: "https://api.binance.com/api/v3/aggTrades",
    query: { symbol: "ETHBNB" },
  })(t.cDeepEqual(aggTrades_example));
});

// Test cases for `klines`
test("klines throws error when query is missing", (t) => {
  t.throws(() =>
    mock_client({
      url: "https://api.binance.com/api/v3/klines",
    })(console.log)
  );
});

test("klines throws error when query is missing symbol", (t) => {
  t.throws(() =>
    mock_client({
      url: "https://api.binance.com/api/v3/klines",
      query: { limit: 10 },
    })(console.log)
  );
});

test("klines throws error when query is missing interval", (t) => {
  t.throws(() =>
    mock_client({
      url: "https://api.binance.com/api/v3/klines",
      query: { symbol: "ETHBNB" },
    })(console.log)
  );
});

test("klines works with symbol=ETHBNB and interval", (t) => {
  mock_client({
    url: "https://api.binance.com/api/v3/klines",
    query: { symbol: "ETHBNB", interval: "1m" },
  })(t.cDeepEqual(klines_example));
});

// Test cases for `avgPrice`
test("avgPrice throws error when query is missing", (t) => {
  t.throws(() =>
    mock_client({
      url: "https://api.binance.com/api/v3/avgPrice",
    })(console.log)
  );
});

test("avgPrice throws error when query is missing symbol", (t) => {
  t.throws(() =>
    mock_client({
      url: "https://api.binance.com/api/v3/avgPrice",
      query: {},
    })(console.log)
  );
});

test("avgPrice works with symbol=ETHBNB", (t) => {
  mock_client({
    url: "https://api.binance.com/api/v3/avgPrice",
    query: { symbol: "ETHBNB" },
  })(t.cDeepEqual(avgPrice_example));
});
