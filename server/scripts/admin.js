import User from '../models/user.js'
import bcrypt from 'bcrypt'


async function createAdminAccount(){
    
    try {
        const existingAdmin = await User.findOne({email:'admin@test.com'});
        if(!existingAdmin){
            const newAdmin = new User({
                email:'admin@test.com',
                name:'Admin',
                password: await bcrypt.hash('admin',10),
                role:'admin'
            })
            await newAdmin.save();
            console.log('admin account created successfully');
        }
        else{
            console.log('admin already exist');
        }
        
    } catch (error) {
        console.error(error.message);
    }
}

export default createAdminAccount;