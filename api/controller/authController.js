const authService = require("../service/authService");

const authController={}

authController.login = async  (req, res) => {
    const email = typeof(req.body.email) === 'string' && req.body.email.trim().length > 0 ? req.body.email : false;
    const password = typeof(req.body.password) === 'string' && req.body.password.trim().length > 2 ? req.body.password : false;
    if(email, password){
        const loggedIn = await authService.login(email, password);
        if(loggedIn){
            res.status(200).json({
                success: true,
                message:"loggedIn!"
            });
        }else{
            res.status(401).json({
                success: false,
                message: "Check credentials!"
            });
        }
    }else{

        res.status(400).json({
            success: false,
            message: 'Required field(s) missing or invalid'
        });
    }

}
module.exports=authController;
