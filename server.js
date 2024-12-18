import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Root Endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the Mock Binance Trading API!");
});

// Dynamically load all endpoint files from the `binance` folder
const binanceFolder = path.join(__dirname, "binance");

fs.readdirSync(binanceFolder).forEach(async (file) => {
  if (file.startsWith("endpoint-") && file.endsWith(".js")) {
    const { default: route } = await import(path.join(binanceFolder, file));
    const routeName = file.replace("endpoint-", "").replace(".js", ""); // Extract route name
    app.use(`/api/${routeName}`, route); // Mount the route dynamically
    console.log(`Loaded endpoint: /api/${routeName}`);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Mock Binance API server running at http://localhost:${PORT}`);
});
