import User from "../models/user.js"; // Import User model
import bcrypt from 'bcrypt';

async function createUser(userData) {
    const { name, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new User({ // Use User model to create instance
        name,
        email,
        password: hashedPassword,
        role: 'customer'
    });
    const savedUser = await createdUser.save();
    return savedUser;
}

export default { createUser };
