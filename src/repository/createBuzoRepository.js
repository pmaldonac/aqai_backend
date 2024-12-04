const Buzo = require("../models/Buzo")

exports.createBuzoRepository = async(nombre,apellido,rut,mail,compania,foto,licenciaBuzo,licenciaBuzoVenc,examMedVenc,contrasena,certificados, estaHabilitado) =>{
    try{
        let newBuzo = await Buzo.create(
            {
                nombre,
                apellido,
                rut,
                mail,
                foto,
                compania,                
                licenciaBuzo,
                licenciaBuzoVenc,
                examMedVenc,
                contrasena,
                certificados,
                estaHabilitado
            },
            {
                fields:["nombre", "apellido", "rut", "mail", "foto","compania","licenciaBuzo", "licenciaBuzoVenc", "examMedVenc", "contrasena", "certificados","estaHabilitado" ]
            }
        )
        return newBuzo
    }catch(error){
        throw new Error(`Error al crear el Buzo: ${error.message}`);
    }
}