import user from "../services/user.js";

async function getNewUser(req,res){
    try {
        const users = await user.getUser();
        res.json(users)
    } catch (error) {
        res.status(500).json({message:error})
    }
};

export default {
    getNewUser
};