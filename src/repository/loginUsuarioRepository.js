const Usuario = require("../models/Usuario");
const { decrypt } = require("../utils/encrypt");

exports.loginUsuarioRepository = async (usuario, password) => {
    try {
        // Buscar el usuario por su nombre de usuario
        const user = await Usuario.findOne({ where: { usuario } });
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        // Verificar la contraseña
        const isPasswordValid = await decrypt(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Contraseña incorrecta');
        }

        // Retornar el usuario si las credenciales son correctas
        return user;
    } catch (error) {
        throw new Error(`Error al iniciar sesión: ${error.message}`);
    }
};