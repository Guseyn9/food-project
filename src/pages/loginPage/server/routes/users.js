import express from 'express';
const router = express.Router();
import mysql from 'mysql2';

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
    console.log('Подключение прошло успешно');
});

router.post('/', (req, res) => {
    const { name, password, phone, token } = req.body;

    console.log('Данные пользователя:', req.body);

    if (!name || !password || !phone) {
        return res.status(400).send('Заполнение всех полей обязательно!');
    }

    const query = 'INSERT INTO users (name, password, phone, token) VALUES (?, ?, ?, ?)';
    db.execute(query, [name, password, phone, token], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Ошибка сервера');
        }
        res.status(201).send('Юзер отправлен');
    });
});

export default router;
