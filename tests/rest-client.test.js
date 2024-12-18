import test from "test-curried";
import mock_client from "../binance/rest-client.js";

// Test for the `ping` endpoint
test("ping endpoint", (t) => {
  mock_client({ url: "https://api.binance.com/api/v3/ping" })(t.cDeepEqual({}));
});

test("ping endpoint with alternative URL", (t) => {
  mock_client({ url: "https://api2.binance.com/api/v3/ping" })(
    t.cDeepEqual({})
  );
});

// Test for the `server time` endpoint
test("server time", (t) => {
  mock_client({ url: "https://api.binance.com/api/v3/time" })(
    t.cDeepEqual({ serverTime: 1499827319559 })
  );
});
