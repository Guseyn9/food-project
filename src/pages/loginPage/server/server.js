import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/users.js';
import getUserRoutes from './routes/user.js';

const app = express();
const port = 3001;

app.use(cors())
app.use(bodyParser.json());

// Используем маршруты из файла users.js
app.use('/api/users', userRoutes);
app.use('/api/getUsers', getUserRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
