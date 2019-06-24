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
};

clienteModel.getIdUser = (clienteId, callback) => {
    if(connection){
        connection.query(
            'SELECT * FROM cliente WHERE cc = ?', clienteId,
            (err, rows) => {            
                if(err){
                    throw err;
                }else {
                    callback(null, rows[0]);
                }
            }
        )
    }
}


module.exports = clienteModel;
