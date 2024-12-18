import req from "../req.js";
import { BINANCE_REST_URLs } from "../config/conf.js";
import binanceSigned from "../binance/req-signed.js";

const show = console.log;

const binance_signed = binanceSigned(req);

const run_signed = (endpt, query, method) =>
  binance_signed({
    url: BINANCE_REST_URLs[0] + endpt,
    query,
    method,
  })(show, show);

// Uncomment and modify the desired endpoint to test
// run_signed('/api/v3/account');

// run_signed('/api/v3/myTrades'); // Illegal
// run_signed('/api/v3/myTrades', { symbol: 'ONEBUSD' });
// run_signed('/api/v3/myTrades', { symbol: 'ONEBUSD', startTime: 1641654559415 });
// run_signed('/api/v3/myTrades', { symbol: 'ONEBUSD', startTime: 1641654559415, endTime: 1641654559419 });
