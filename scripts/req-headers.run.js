import req from "../req.js";
import { BINANCE_REST_URLs } from "../config/conf.js";
import binanceHeaders from "../binance/req-headers.js";

const show = console.log;

const binance_headers = binanceHeaders(req);

const run_binance_headers = (endpt, query = {}, method = "GET") =>
  binance_headers({
    url: BINANCE_REST_URLs[0] + endpt,
    query,
    method,
  })(show, show);

// Uncomment and modify the desired endpoint to test

// run_binance_headers('/api/v3/historicalTrades'); // Illegal
// run_binance_headers('/api/v3/historicalTrades', { symbol: "ETHBTC" });
// run_binance_headers('/api/v3/historicalTrades', { symbol: "ETHBTC", limit: 1 });
// run_binance_headers('/api/v3/historicalTrades', { symbol: "ETHBTC", limit: 1, fromId: 28457 });

run_binance_headers("/api/v3/userDataStream", {}, "POST");
// run_binance_headers('/api/v3/userDataStream', {"listenKey": "zwcfjp3rAi9eWXE5ANAWSbeibSePBdo0Mpx8RHQDoR3Ic4Txx83Ad4Brve9I"}, 'PUT');
// run_binance_headers('/api/v3/userDataStream', {"listenKey": "ycqH6kKUPOgTPV2r1gIdXRp4KrUcdWIoEftTRun9tTO65kLC4dsVclYVZtZQ"}, 'DELETE');
