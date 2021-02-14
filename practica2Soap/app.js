var soap = require('soap');
var url = 'http://www.dneonline.com/calculator.asmx?WSDL';
var args = {intA: 4,intB: 4};

console.log('Exito');

soap.createClient(url, function(err, client) {
    if(err){
        console.log('Error', err);
    } else {
        console.log('Inicio operaciones...');
        console.log('Valor1: 4 Valor2: 4');
        client.Add(args, function(err, result) {
            console.log('Suma ',result);
        });
        client.Subtract(args, function(err, result) {
            console.log('Resta ',result);
        });
        client.Multiply(args, function(err, result) {
            console.log('Multiplicacion ',result);
        });
        client.Divide(args, function(err, result) {
            console.log('Division ',result);
        });
    }
});