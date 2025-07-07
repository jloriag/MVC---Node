const express = require('express')
const app = express();
const estudianteRoutes = require('./routes/estudianteRoutes')

app.use(express.json());
app.use('/estudiantes',estudianteRoutes);

const PORT =  3000;
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});