import req from "../req.js";
import { BINANCE_REST_URLs } from "../config/conf.js";
import binanceSigned from "../binance/req-signed.js";

const show = console.log;

const binance_signed = binanceSigned(req);

const run_signed = (endpt, query = {}, method = "GET") =>
  binance_signed({
    url: BINANCE_REST_URLs[0] + endpt,
    query,
    method,
  })(show, show);

// Uncomment the desired test case to run it

// run_signed('/api/v3/order/test', {}, 'POST'); // Illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT' }, 'POST'); // Illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "MARKET", quantity: 1 }, 'POST');
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "GTC", price: 80000, quantity: 1, recvWindow: 5000 }, 'POST');
// run_signed('/api/v3/order', { symbol: "BNBBUSD", side: "BUY", type: "LIMIT", timeInForce: "GTC", price: 100, quantity: 1 }, 'POST');

// Uncomment more test cases as needed
// run_signed('/api/v3/openOrders', { symbol: 'BNBBUSD' });
// run_signed('/api/v3/allOrders', { symbol: 'BNBBUSD', startTime: 1652420222055, endTime: 1652420222059 });
