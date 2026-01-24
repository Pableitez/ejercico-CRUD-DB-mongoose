const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const tasksRoutes = require('./routes/tasks');

app.use(express.json());
app.use('/', tasksRoutes);

dbConnection();

app.listen(PORT, () => console.log(`Servidor iniciado en http://localhost:${PORT}`));
