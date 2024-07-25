const express = require("express");
const cors = require("cors"); // Import CORS middleware
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors({ optionsSuccessStatus: 200 }));

// Middleware to parse request headers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for /
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

// Route for /api/whoami
app.get("/api/whoami", (req, res) => {
  // Extract IP address
  const ipAddress =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  // Extract preferred language
  const language = req.headers["accept-language"] || "Not Provided";

  // Extract software (user agent)
  const software = req.headers["user-agent"] || "Not Provided";

  // Respond with JSON
  res.json({
    ipaddress: ipAddress,
    language: language,
    software: software,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
