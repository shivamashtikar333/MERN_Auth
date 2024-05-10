import createLogin from '../services/createLogin.js'

async function login(req,res){
    try {
        const {email,password} = req.body;
        const token = await createLogin.login(email,password);
        res.json({token:token});
    } catch (error) {
        res.status(401).json({message:'Invalid Credentials'});
    }
}

async function refreshTokenLogin(req,res){
    try {
        const {token} = req.body;
        const newToken = await createLogin.refreshToken(token);
        res.json({newToken:newToken});
    } catch (error) {
        res.status(401).json({message:'Invalid token'});
    }
}

export default {
    login,
    refreshTokenLogin
};