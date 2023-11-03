const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`*** Server listening on port ${PORT} ***`);
});
