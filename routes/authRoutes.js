const express = require('express');
const router = express.Router();

// Simulación de base de datos
const users = [
    { username: 'usuario', password: 'password' }
];

// Endpoint de login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        return res.status(200).json({ message: 'Login exitoso' });
    } else {
        return res.status(401).json({ message: 'Credenciales incorrectas' });
    }
});

module.exports = router;
