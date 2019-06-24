const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'pruebaacc'
});

let clienteModel = {};

clienteModel.getUsers = (callback) => {
    if(connection){
        console.log('conection');
        connection.query('SELECT * FROM cliente;',
        (err, rows) => {            
            if(err){
                throw err;
            }else {
                callback(null, rows);
            }
        })
    }else{
        throw err;
    }
};

clienteModel.insertCliente = (clienteData, callback) => {
    if(calcularEdad(clienteData.fecha_nacimiento) >= 18 ){
        if(connection){
            connection.query(
                'INSERT INTO cliente SET ?', clienteData,
                (err, result)=>{
                    if(err){
                        callback(err, {
                            'insertDone': false
                        });
                    }else{
                        callback(null, {
                            'insertDone': true
                        });
                    }
                }
            )
        }
    }else{
        (err, result) => {
            callback(err, {
                'insertDone': false
            });
        }
    }
    
};

function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}


module.exports = clienteModel;
