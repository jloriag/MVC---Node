const estudianteDAO = require('../dao/EstudianteDAO')

class EstudianteController {
    async getAll(req,res){
        try{
            const estudiantes = await estudianteDAO.getAll();
            return res.json(estudiantes);
        } catch (err){

        }
    }
}

module.exports= new EstudianteController();