const axios = require('axios');
const config = require('../config/config');

exports.authenticate = async () => {
    const headers = {
        'X-Username': config.username,
        'X-Password': config.password,
        'Content-Type': 'application/x-www-form-urlencoded',
    };

    const response = await axios.post(
        `${config.apiBaseURL}/auth/getToken`,
        {},
        { headers }
    );
    
    return response.data.token;
};

// Otros servicios para obtener datos y ejecutar órdenes
