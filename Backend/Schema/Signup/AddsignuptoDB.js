import newUser from "./Schema.js"

const saveUsertoDB = async (name,email,password) => {
    const  Usertodb = new newUser({
        name:name,
        email: email,
        password: password
        
        })
         await Usertodb .save();
        
              
       
}
export default saveUsertoDB;