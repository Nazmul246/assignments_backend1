require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const helloRoutes = require('./routes/helloRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api', helloRoutes);
app.use('/api/auth', authRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
