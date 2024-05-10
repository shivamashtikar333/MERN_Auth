import User from "../models/user.js";

async function getUser () {
    const users = await User.find({});
    return users;
}

export default {
    getUser
};