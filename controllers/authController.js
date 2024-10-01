const apiService = require('../services/apiService');

exports.authenticate = async (req, res) => {
    try {
        const token = await apiService.authenticate();
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error during authentication' });
    }
};
