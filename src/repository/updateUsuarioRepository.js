const Usuario = require("../models/Usuario")

exports.updateUsuarioRepository = async(id,data)=>{
    try{
        const usuario= await Usuario.findByPk(id)
        if (!usuario) {
            throw new Error(`Usuario con ID ${id} no encontrado.`);
        }
        const updatedUsuario= await usuario.update(data)
        return updatedUsuario
    }catch(error){
        throw new Error(`Error al actualizar el Usuario: ${error.message}`);
    }

}