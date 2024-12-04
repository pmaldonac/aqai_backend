const Faena = require("../models/Faena")

exports.getFaenasByMareaRepository = async(idMarea) =>{
    try{
        let faenaList = await Faena.findAll({
            where:{
                idMarea: idMarea
            }
        })
        return faenaList
    }catch(error){
        throw new Error(`Error al obtener faenas por marea: ${error.message}`);
    }
}