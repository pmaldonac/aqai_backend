const repository = require('../repository/getInmersionByFaenaRepository');

exports.getInmersionByFaenaController = async (req,res) => {
  try {
    const idFaena = req.params.id
    const inmersionList = await repository.getInmersionByFaena(idFaena)
    return res.status(200).json({status:200, data: inmersionList})
  } catch (error) {
    return res.status(500).json({status:500, message: "Hubo un error al recuperar las Inmersiones."})
  }
}