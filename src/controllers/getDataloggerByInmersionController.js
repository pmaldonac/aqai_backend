const repository = require("../repository/getDataloggerByInmersionRepository")

exports.getDataloggerByInmersion = async(req,res) =>{
    try{
        const { idBuzo, idFaena } = req.params
        if (!idBuzo || !idFaena) {
            return res.status(400).json({
              status: 400,
              message: "Los parámetros idBuzo e idFaena son obligatorios.",
            })
          }
          const dataloggerList = await repository.getDataloggerByInmersion(idBuzo, idFaena)
        return res.status(200).json({status:200, data:dataloggerList})
    }catch(error){
        return res.status(500).json({status:500, message: "Hubo un error al recuperar el datalogger."})
    }
}