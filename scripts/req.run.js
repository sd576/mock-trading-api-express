import req from "../req.js";
import { pipeline } from "cpsfy";
import { BINANCE_REST_URLs } from "../config/conf.js";

// Utility to log output
const show = (x) => console.dir(x, { depth: null });

// Use the 1st base URL
const run = (ep) => req({ url: BINANCE_REST_URLs[0] + ep })(show, show);

const run_query = (ep, query = {}) =>
  req({ url: BINANCE_REST_URLs[0] + ep, query })(show, show);

// Iterate over all BINANCE_REST_URLs
const run_mult = (ep) =>
  BINANCE_REST_URLs.map((url) => pipeline({ url: url + ep })(req)(show, show));

// Uncomment the desired test cases to run

// Test connectivity
// run_mult('/api/v3/ping');
// run('/api/v3/ping');
// run('/api/v3/time');

// Test exchange information
// run('/api/v3/exchangeInfo');
// run_query('/api/v3/exchangeInfo');
// run_query('/api/v3/exchangeInfo', { symbol: "ETHBTC" });
// run_query('/api/v3/exchangeInfo', { symbols: ["BTCUSDT", "BNBBTC"] });

// Test order book depth
// run_query('/api/v3/depth', { symbol: "ETHBTC", limit: 1 });

// Test recent trades
// run_query('/api/v3/trades', { symbol: "ETHBTC", limit: 1 });

// Test 24-hour ticker
// run_query('/api/v3/ticker/24hr', { symbol: "ETHBTC" });

// Test symbol price ticker
// run_query('/api/v3/ticker/price', { symbol: "ETHBTC" });

// Test historical trades
// run_query('/api/v3/historicalTrades', { symbol: "ETHBTC" });
