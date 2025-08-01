const express = require('express');
const path = require('path'); // Add this if not present
const IndexController = require('./src/controllers/index');

const app = express(); // ✅ Move this to the top
app.use(express.json());


// ✅ Serve frontend files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.get('/stocks', (req, res) => IndexController.getStocks(req, res));
app.post('/stocks', (req, res) => IndexController.createStock(req, res));



// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

