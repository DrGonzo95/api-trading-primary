const express = require('express');
const router = express.Router();

// Ejemplo de datos
const data = [
    { id: 1, name: 'Data 1' },
    { id: 2, name: 'Data 2' },
];

// Ruta para obtener todos los datos
router.get('/', (req, res) => {
    res.status(200).json(data);
});

// Ruta para obtener un dato específico por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const item = data.find(d => d.id === parseInt(id));

    if (item) {
        res.status(200).json(item);
    } else {
        res.status(404).json({ message: 'Data not found' });
    }
});

module.exports = router;
