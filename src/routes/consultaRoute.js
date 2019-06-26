const express = require('express');
const router = express.Router();

router.post('/consulta', (req, res) =>{
    const fecha_inicio = req.body.fecha_inicio;
    if(mayorAnioYMedio(fecha_inicio)){
        console.log("Si es hace mas de un anio y medio");
        const salario = req.body.salario;
        if(salario > 4000000){
            console.log("Salario superior a 4000000");
        }else if(salario > 1000000){
            console.log("Salario superior a 1000000");
        }else if(salario > 800000){
            console.log("Salario superior a 800000");
        }else{
            console.log("Salario inferior a 800000");
        }
    }else{
        console.log("fecha inicio no valida");
    }


} );

function mayorAnioYMedio(fechaCadena){
    var acierto = false;
    var fechaReal = new Date(fechaCadena);
    fechaReal.setDate(fechaReal.getDate() + 548);
    const hoyCadena = new Date().toISOString().substring(0, 10);
    const hoyFecha = new Date(hoyCadena);
    if(hoyFecha >= fechaReal){
        acierto = true;
    }
    return acierto;
}
    


/*
router.post('/clientes/login', (req, res)=>{
    const cc = req.body.cc;
    cliente.getIdUser(cc, (err, data) =>{
        if(data != null){
            res.status(200).json(data);
        }else{
            res.status(404).json({
                code: 'No se encuentre cliente'
            });
        }
    });
});
*/
module.exports = router;