const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectToMongo();

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Default route
app.get('/', (req, res) => {
  res.send(`There is Nothing here`);
});

// Start the server
app.listen(port, () => {
  console.log(`iNotebook_Backend listening at http://localhost:${port}`);
});
