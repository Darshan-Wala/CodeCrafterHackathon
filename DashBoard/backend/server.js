// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Database connection (ensure your database and table exist)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // Replace with your MySQL username
  password: 'root',   // Replace with your MySQL password
  database: 'investmenttracker' // Replace with your database name
});

// Test DB connection
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
  console.log('Connected to the database!');
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API endpoint to store transaction details
app.post('/api/stock-transaction', (req, res) => {
  const { stock_symbol, stock_name, quantity, stop_loss, total_cost, transaction_type } = req.body;

  const query = `
    INSERT INTO stock_transactions 
    (stock_symbol, stock_name, quantity, stop_loss, total_cost, transaction_type)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [stock_symbol, stock_name, quantity, stop_loss || null, total_cost, transaction_type];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error storing transaction:', err);
      return res.status(500).send('Error storing transaction');
    }
    res.status(200).send('Transaction stored successfully');
  });
});

// New endpoint for Total Investments calculation
app.get('/api/total-investments', (req, res) => {
  const query = `
    SELECT SUM(CASE WHEN transaction_type = 'Buy' THEN total_cost ELSE -total_cost END) AS total_investments
    FROM stock_transactions
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching total investments:', err);
      return res.status(500).send('Error fetching total investments');
    }
    res.status(200).json({ totalInvestments: results[0].total_investments || 0 });
  });
});


// Endpoint to fetch recent transactions (limit 5)
app.get('/api/transactions', (req, res) => {
    const query = 'SELECT * FROM transactions ORDER BY transaction_date DESC LIMIT 5';
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error fetching transactions:", err);
        return res.status(500).send("Error fetching transactions");
      }
      res.status(200).json(results);
    });
  });
  

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
