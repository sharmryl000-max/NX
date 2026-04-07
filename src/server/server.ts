import express from 'express';
import http from 'http';
import { Server as WebSocketServer } from 'ws';
import bodyParser from 'body-parser';

// Initialize Express
const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Middleware
app.use(bodyParser.json());

// Authentication Middleware
app.use((req, res, next) => {
    // Implement authentication logic here
    next();
});

// Health Check Route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

// Define other routes
app.use('/chat', require('./routes/chat'));
app.use('/clubs', require('./routes/clubs'));
app.use('/puzzles', require('./routes/puzzles'));
app.use('/games', require('./routes/games'));
app.use('/tournaments', require('./routes/tournaments'));
app.use('/learning', require('./routes/learning'));

// WebSocket Server
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        // Handle incoming messages
        console.log(`Received message: ${message}`);
        // You could also broadcast to other clients
    });

    ws.send('Welcome to the WebSocket server!');
});

// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
