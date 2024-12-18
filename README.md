# Mock Trading API

This project provides a mock implementation of the Binance Trading API, enabling developers to test trading-related workflows without interacting with the live Binance API. The mock API is built with **Express.js** and utilizes **ES6 modules** for modern and modular development.

\*\* Purpose

This mock trading API simulates workflows for various financial markets, including securities trading, foreign exchange (FX), and cryptocurrency trading. While originally inspired by Binance API features, it provides a versatile foundation for testing trade-related applications across different financial domains:
Market Data: Retrieve prices, trends, and order book depths for securities, FX pairs, and crypto assets.
Order Management: Test buy/sell orders for assets across securities and cryptocurrency markets, including support for market, limit, and stop-loss order types.
Historical Data: Simulate past trading data for backtesting strategies in derivatives and other markets.
Utilities: Includes connectivity tests and server time synchronization.

## Features

- Mock implementations of key Binance API endpoints, including:
  - `/api/v3/ping` (Connectivity Test)
  - `/api/v3/time` (Server Time)
  - `/api/v3/exchangeInfo` (Exchange Information)
  - `/api/v3/ticker` (Market Ticker Data)
  - `/api/v3/order/test` (Test Order Placement)
- Support for REST and WebSocket communication.
- Fully modular and ES6-compliant architecture.
- Includes example test files to validate API responses.

## Prerequisites

- Node.js (v16 or newer recommended)
- npm or yarn
- Git (for version control)

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/mock-trading-api.git
   cd mock-trading-api
   ```

2. **Install Dependencies**:

```bash
   npm install
```

3. **Run the Server**:

```bash
   node server.js
```

The server will start at http://localhost:3000.

4. **Test the API**:
   Use tools like curl, Postman, or your browser to test the endpoints. Example:

```bash
   curl http://localhost:3000/api/ping
```

**Directory Structure**
mock-trading-api/
├── binance/ # Contains endpoint implementations
├── config/ # Configuration files
├── scripts/ # Utility scripts for testing
├── tests/ # Automated tests
├── utils/ # Utility functions
├── server.js # Entry point for the API server
├── req.js # Axios-based HTTP client
├── ws.js # WebSocket client
└── renovate.json # Renovate configuration for dependency updates

**Running Tests**
Tests are provided to validate the functionality of the mock API. To execute the tests:

```bash
   npm test
```

**License**
This project is licensed under the MIT License.
Original Copyright © 2022 Dmitri Zaitsev.

Changes and modifications in this fork are © 2024 Stuart Ducasse.

**Contribution**
Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

**Acknowledgments**
This project is a fork of the original Mock Trading API by Dmitri Zaitsev.
Special thanks to all contributors for their improvements and feedback.
