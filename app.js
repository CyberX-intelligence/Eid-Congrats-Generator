const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Test endpoint to serve the image directly
app.get('/test-image', (req, res) => {
    const imagePath = path.join(__dirname, 'public', 'cyberx-eid.jpeg');
    res.sendFile(imagePath, (err) => {
        if (err) {
            console.error('Error serving test image:', err);
            res.status(500).send('Error serving image: ' + err.message);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});