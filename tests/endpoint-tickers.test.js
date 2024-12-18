import test from "test-curried";
import req_sign from "../binance/req-signed.js";
import mock_client from "../binance/rest-client.js";

const mock_signed = req_sign(mock_client);

// Test cases for `test new order`
test("test new order throws without query", (t) => {
  t.throws(() =>
    mock_client({
      method: "POST",
      url: "https://api.binance.com/api/v3/order/test",
    })(console.log)
  );
});

test("test new order throws with query missing symbol", (t) => {
  t.throws(() =>
    mock_client({
      method: "POST",
      url: "https://api.binance.com/api/v3/order/test",
      query: {},
    })(console.log)
  );
});

test("test new order throws with query missing symbol/side", (t) => {
  t.throws(() =>
    mock_client({
      method: "POST",
      url: "https://api.binance.com/api/v3/order/test",
      query: { symbol: "BTCUSDT" },
    })(console.log)
  );
});

test("test new order throws with query missing symbol/side/type", (t) => {
  t.throws(() =>
    mock_client({
      method: "POST",
      url: "https://api.binance.com/api/v3/order/test",
      query: { symbol: "BTCUSDT", side: "SELL" },
    })
  );
});

test("test new MARKET order throws with query missing symbol/side/quantity", (t) => {
  t.throws(() =>
    mock_signed({
      method: "POST",
      url: "https://api.binance.com/api/v3/order/test",
      query: { symbol: "BTCUSDT", side: "SELL", type: "MARKET" },
    })
  );
});

test("test new MARKET order throws with both quantity and quoteOrderQty", (t) => {
  t.throws(() =>
    mock_signed({
      method: "POST",
      url: "https://api.binance.com/api/v3/order/test",
      query: {
        symbol: "BTCUSDT",
        side: "SELL",
        type: "MARKET",
        quantity: 1,
        quoteOrderQty: 100,
      },
    })
  );
});

test("test new MARKET order works with symbol/side/quantity", (t) => {
  mock_signed({
    method: "POST",
    url: "https://api.binance.com/api/v3/order/test",
    query: { symbol: "BTCUSDT", side: "SELL", type: "MARKET", quantity: 1 },
  })(t.cDeepEqual({}));
});

test("test new MARKET order works with symbol/side/quoteOrderQty", (t) => {
  mock_signed({
    method: "POST",
    url: "https://api.binance.com/api/v3/order/test",
    query: {
      symbol: "BTCUSDT",
      side: "SELL",
      type: "MARKET",
      quoteOrderQty: 100,
    },
  })(t.cDeepEqual({}));
});

// Add similar refactoring for all other test cases from your original file

test("test new LIMIT_MAKER order works with symbol/side/quantity/price", (t) => {
  mock_signed({
    method: "POST",
    url: "https://api.binance.com/api/v3/order/test",
    query: {
      symbol: "BTCUSDT",
      side: "SELL",
      type: "LIMIT_MAKER",
      price: 80000,
      quantity: 1,
    },
  })(t.cDeepEqual({}));
});
