import express from 'express';
const router = express.Router();
import mysql from 'mysql2';

// Подключение к базе данных
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'foodproject',
});

db.connect(err => {
    if (err) {
        console.error('Ошибка подключения к базе данных ' + err.stack);
        return;
    }
    console.log('Подключение к базе данных прошло успешно');
});

// Маршрут для получения данных пользователей
router.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Ошибка сервера');
        }
        res.status(200).json(results);
    });
});

router.post('/auth', (req, res) => {
    const { name, phone, password, token } = req.body;
    const query = 'INSERT INTO authuser (name, phone, password, token) VALUES (?, ?, ?, ?)';
    db.execute(query, [name, phone, password, token], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Ошибка сервера');
        }
        res.status(201).send('Данные пользователя сохранены в таблицу authuser');
    });
});

export default router;