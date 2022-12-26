import user from "../modal/userSchema.js";

export const  addUserData = (req,res) => {
    const userData = req.body;
    const newUserData = new user(userData)
    try {
        console.log(newUserData)
    } catch (error) {
        console.log(error);
    }
};