let nombre = prompt('Ingrese su Nombre')
let apellido = prompt('Ingrese su apellido')
alert('Bienvenido/a '+ nombre + " " + apellido);

let saldo = 10000
let opcion = prompt('Elegi una opcion: \n1- Saldo \n2- Pagos \n3- Ingresar Dinero \n4- Retirar Dinero\n5- Transferencias\nSALIR  Presiona X para finalizar.')

while (opcion != 'X') {
    switch (opcion) {
        case '1':
            alert('Tu saldo es $'+saldo)
            break;
        case '2':
            let servicio = prompt('Ingresa lo que desea pagar')
            let pagos = parseFloat(prompt('Ingresa la cantidad a pagar'));
            if (saldo >=pagos){
            saldo = saldo-pagos;
            alert('Usted a abonado $' + pagos + ' en concepto de '+ servicio + ' su nuevo saldo es de $'+saldo)
            }else {
                alert('Fondos insuficientes')
            }
            break;
        case '3':
            let ingreso = parseFloat(prompt('Ingresa el monto a que desea depositar'));
            saldo = saldo + ingreso;
            alert('Tu nuevo saldo es de $'+ saldo);
            break;
        case '4':
            let retiros = parseFloat(prompt('Ingresa la cantidad a retirar'));
            if (saldo >=retiros){
            saldo = saldo-retiros;
            alert('Su nuevo saldo es de $'+saldo)
            }else {
                alert('Fondos insuficientes')
            }
            break;
        case '5':
            let cliente = prompt('Ingresa el ALIAS/CBU/CVU')
            let monto = parseFloat(prompt('Ingresa la cantidad a transferir'));
            if (saldo >=monto){
            saldo = saldo-monto;
            alert('Usted a transferido $' + monto + ' a la cuenta '+ cliente + ' su nuevo saldo es de $'+saldo)
            }else {
                alert('Fondos insuficientes')
            }
            break;
        default:
            alert('Elegiste una opcion invalida')
            break;
    }
    opcion = prompt('Elegi una opcion: \n1- Saldo \n2- Pagos \n3- Ingresar Dinero \n4- Retirar Dinero\n5- Transferencias\nSALIR  Presiona X para finalizar.')

}
