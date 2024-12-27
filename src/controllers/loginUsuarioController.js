const { loginUsuarioRepository } = require("../repository/loginUsuarioRepository");
const jwtUtils = require('../utils/jwtUtils');

exports.loginUsuarioController = async (req, res) => {
    const { usuario, password } = req.body;

    try {
        const user = await loginUsuarioRepository(usuario, password);
        let token;
        if(user){
            token = jwtUtils.generateToken({username: user.usuario});
            
        }
        res.status(200).json({
            message: "Inicio de sesión exitoso",
            data: {
                   usuario: user.usuario,
                   foto: user.foto,
                   token: token
            }
        });
    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
};