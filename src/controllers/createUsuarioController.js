const repository = require("../repository/createUsuarioRepository")
const jwtUtils = require('../utils/jwtUtils');

exports.createUsuarioController = async(req,res) =>{
    try{
        const token = req.headers.authorization
        const decodedToken = jwtUtils.verifyToken(token)
        if(!decodedToken){
            return res.status(401).json({status:401, message: "No autorizado."})
        }else{
        const data = req.body
        if(!data){
            return res.status(400).json({status:400, message: "Error al realizar solicitud. Verifique parámetros."})
        }
        let newUsuario = await repository.createUsuarioRepository(data.nombre, data.apellido, data.rut, data.mail, data.usuario, data.password, data.nombreEmpresa, data.foto)
        return res.status(201).json({status:201, message: "Usuario creado con éxito.", data: newUsuario})}
    }catch(error){
        return res.status(500).json({
            status:500,
            message: error.message
        })
    }
}