const Usuario = require("../models/Usuario");
const { encrypt } = require("../utils/encrypt");

exports.createUsuarioRepository = async (nombre, apellido, rut, mail, usuario, password, nombreEmpresa, foto) => {
    try {
        const encryptedPassword = await encrypt(password);
        let newUser = await Usuario.create(
            {
                nombre,
                apellido,
                rut,
                mail,
                foto,
                password: encryptedPassword, 
                nombreEmpresa,
                usuario
            },
            {
                fields: ["nombre", "apellido", "rut", "mail", "foto", "password", "nombreEmpresa", "usuario"]
            }
        );
        return newUser;
    } catch (error) {
        throw new Error(`Error al crear el Usuario: ${error.message}`);
    }
};