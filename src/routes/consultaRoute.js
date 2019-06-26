const express = require('express');
const router = express.Router();

router.post('/consulta', (req, res) =>{
    const fecha_inicio = req.body.fecha_inicio;
    var consulta;
    if(mayorAnioYMedio(fecha_inicio)){
        
        const salario = req.body.salario;
        if(salario > 4000000){
            res.status(200).json({
                aprobado: true,
                credito: "50000000",
                mensaje: "Credito aprobado de $50.000.000"
            });
        }else if(salario > 1000000){
            res.status(200).json({
                aprobado: true,
                credito: "20000000",
                mensaje: "Credito aprobado de $20.000.000"
            });
        }else if(salario > 800000){
            res.status(200).json({
                aprobado: true,
                credito: "5000000",
                mensaje: "Credito aprobado de $5.000.000"
            });
        }else{
            res.status(200).json({
                aprobado: false,
                credito: "0",
                mensaje: "Su credito no es aprobado\nSu salario debe ser mayor a $8.000.000"
            });
        }
    }else{
        res.status(200).json({
            aprobado: false,
            credito: "0",
            mensaje: "Su credito no es aprobado\nDebe tener mas de un anio y medio de antiguedad en la empresa"
        });
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