import test from "test-curried";
import mock_client from "../binance/rest-client.js";

// Test case for error when both `symbol` and `symbols` are declared
test("exchange info throws error with both symbol and symbols declared", (t) => {
  t.throws(() =>
    mock_client({
      url: "https://api.binance.com/api/v3/exchangeInfo",
      query: { symbol: "ETHBTC", symbols: ["ETHBTC", "BNBBTC"] },
    })(console.log)
  );
});

// Mocked responses for exchange info
const ETHBTC_info = {
  timezone: "UTC",
  serverTime: 1565246363776,
  rateLimits: [],
  exchangeFilters: [],
  symbols: [
    {
      symbol: "ETHBTC",
      status: "TRADING",
      baseAsset: "ETH",
      baseAssetPrecision: 8,
      quoteAsset: "BTC",
      quotePrecision: 8,
      quoteAssetPrecision: 8,
      baseCommissionPrecision: 8,
      quoteCommissionPrecision: 8,
      orderTypes: [
        "LIMIT",
        "LIMIT_MAKER",
        "MARKET",
        "STOP_LOSS",
        "STOP_LOSS_LIMIT",
        "TAKE_PROFIT",
        "TAKE_PROFIT_LIMIT",
      ],
      icebergAllowed: true,
      ocoAllowed: true,
      quoteOrderQtyMarketAllowed: true,
      allowTrailingStop: false,
      cancelReplaceAllowed: false,
      isSpotTradingAllowed: true,
      isMarginTradingAllowed: true,
      filters: [],
      permissions: ["SPOT", "MARGIN"],
    },
  ],
};

const ETHBNB_info = {
  ...ETHBTC_info,
  symbols: [{ ...ETHBTC_info.symbols[0], symbol: "ETHBNB" }],
};

const ETHBNB_ETHBTC_info = {
  ...ETHBTC_info,
  symbols: [
    { ...ETHBTC_info.symbols[0], symbol: "ETHBNB" },
    { ...ETHBTC_info.symbols[0], symbol: "ETHBTC" },
  ],
};

// Test case for default behavior without params
test("exchange info without params returns ETHBTC info", (t) => {
  mock_client({ url: "https://api.binance.com/api/v3/exchangeInfo" })(
    t.cDeepEqual(ETHBTC_info)
  );
});

// Test case for `symbol=ETHBNB`
test("exchange info works with symbol=ETHBNB", (t) => {
  mock_client({
    url: "https://api.binance.com/api/v3/exchangeInfo",
    query: { symbol: "ETHBNB" },
  })(t.cDeepEqual(ETHBNB_info));
});

// Test case for `symbols=[ETHBNB, ETHBTC]`
test("exchange info works with symbols=[ETHBNB, ETHBTC]", (t) => {
  mock_client({
    url: "https://api.binance.com/api/v3/exchangeInfo",
    query: { symbols: ["ETHBNB", "ETHBTC"] },
  })(t.cDeepEqual(ETHBNB_ETHBTC_info));
});
