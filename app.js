import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Determine the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Log that the server is starting
console.log("Server is starting...");

// Middleware to parse JSON
app.use(express.json());

// Dynamically load endpoint files from the binance folder
const routesPath = path.join(__dirname, "binance");

try {
  fs.readdirSync(routesPath).forEach((file) => {
    if (file.startsWith("endpoint-") && file.endsWith(".js")) {
      import(path.join(routesPath, file))
        .then((module) => {
          const routeName = file.replace("endpoint-", "").replace(".js", "");
          app.use(`/${routeName}`, module.default);
          console.log(`Loaded route: /${routeName}`);
        })
        .catch((err) => {
          console.error(`Error loading route ${file}: ${err.message}`);
        });
    }
  });
} catch (err) {
  console.error(`Failed to read routes: ${err.message}`);
}

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
