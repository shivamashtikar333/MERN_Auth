import userCreateSignup from '../services/userCreateSignup.js';

async function createUser(req, res) {
    try {
        const userData = req.body;
        const user = await userCreateSignup.createUser(userData);
        res.status(201).json({ user: user, message: 'user created successfully' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
}

export default {
    createUser // Exporting createUser function
};
