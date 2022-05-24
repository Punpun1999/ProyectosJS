let username = prompt ('ingrese su nombre ')
let response; 
let condition = true
do {
    response = prompt(`Su nombre de usuario es ${username}, esta de acuerdo?[y/n]`)
                    .toLowerCase()
                    .trim()
    switch (response) {
        case "y":
            console.log("bienvenido "+username)
            condition =false
            break;
        case "n":
            username = prompt("Por favor ingrese correctamente su nombre")
            break;
        default:
            response = prompt("No es una respuesta validad, intentelo de nuevo")
            break;
    }
} while (condition);
let opcion;
do
{
    console.log('Profesiones')
    console.log('1.Desempleado')
    console.log('2.Bombero')
    console.log('3.Agente de Policia')
    console.log('4.Guardia Forestal')
    console.log('5.Obrero')
    console.log ('6.Guardia de seguridad')
    console.log ('7.Carpintero')
    opcion= prompt('Elija su profesion').toLowerCase().trim()
    if (opcion === '1' || opcion === 'desempleado')
    {
        console.log('jsjsjs soy desempleado' + username)
        break;
    }
    else if(opcion === '2' || opcion === 'bomero')
    {
        console.log('jsjsjs soy bombero' + username)
        break;
    }
    else if (opcion === '3' || opcion === 'agente de policia')
    {

    }
    else if (opcion === '4' || opcion === 'guardia forestal')
    {

    }
    else if (opcion == '5' || opcion === 'obrero')
    {

    }
    else if (opcion ===  '6' || opcion  === 'guardia de seguridad')
    {

    }
    else if (opcion === '7' || opcion === 'carpintero')
    {

    }

}while (condition)
