const db= require ('../db');
const Estudiante= require('../models/Estudiante')

class EstudianteDAO {
   async getAll(){
    const [rows]= await db.query('SELECT * FROM Estudiantes;')
    const estudiantes = [];
    for (let i=0; i< rows.length;i++) {
        const fila = rows[i];
        console.log(rows[i]);
        const estudiante= new Estudiante(fila.id_estudiante,fila.nombre);
        estudiantes.push(estudiante);
    }
    return estudiantes;
   }
}

module.exports=  new EstudianteDAO();