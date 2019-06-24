const express = require('express');
const router = express.Router();
const cliente = require('../models/cliente');

router.get('/clientes', (req, res) => {
    cliente.getUsers((err, data) =>{
        res.status(200).json(data);
    } );
});

router.post('/clientes', (req, res)=>{
    //console.log(req.body);
    const clienteData = {
        cc: req.body.cc,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha_nacimiento: req.body.fecha_nacimiento
    };

    if(calcularEdad(clienteData.fecha_nacimiento) >= 18){
        cliente.insertCliente(clienteData, (err, data)=>{

            if(data && data.insertDone){
                res.status(200).json({
                    succes: true,
                    msg: 'Cliente Ingresado',
                    data: data
                })
            }else{
                res.status(500).json({
                    succes: false,
                    msg: 'Error',
                    error: err
                });
                //throw err;
            }
        })
    }else{
        res.status(400).json({
            succes: false,
            msg: 'Menor de edad',
            err: {
                code: 'menor'
            }
        });
    }

});

router.get('/clientes/:clienteId', (req, res)=>{
    clienteId = req.params.clienteId;
    cliente.getIdUser(clienteId, (err, data) =>{
        if(data != null){
            res.status(200).json(data);
        }else{
            res.status(404).json({
                code: 'No se encuentre cliente'
            });
        }
    } );
});

function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
};

module.exports = router;