let username = prompt ('Bienvenido a zomboid \n ingrese su nombre ')
let response; 
let condition = true
do {
    response = prompt(`Su nombre de usuario es ${username}, esta de acuerdo?[y/n]`)
                    .toLowerCase()
                    .trim()
    switch (response) {
        case "y":

            console.log(`%c No habia esperanza de supervivencia \n asi es como moriste`,`color: red;font-family:sistem-ui;font-size:4rem-webkit-text-stroke:1px black;font-weight:bold`)
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
let desempleado;
var cajon = ['lapicera','cuaderno','tijera']
var bombero;
var camion = ['soga','hacha','casco'];
do
{
    console.log('Profesiones')
    console.log('1.Desempleado')
    console.log('2.Bombero')
    opcion= prompt('Elija su profesion').toLowerCase().trim()
    if (opcion === '1' || opcion === 'desempleado')
    {
        console.log(username+' te encuentras en la casa de tus padres , estas en tu cuarto, en la computadora revisando linkedin, escuchas unos ruidos y decides revisar \n te encuentras a tu padre comiendole la cabeza a tu madre,')
        console.log('estas dudando si (1.correr) o (2.detenerlo)')
        desempleado = prompt ('> ').toLowerCase().trim()
        if (desempleado === 'correr' || desempleado === '1')
            {
                console.log('te alejaste de la escena  y te encerraste a tu cuarto a pedir ayuda , llamaste al 911 , pero no recibiste respuesta')
                alert ('escuchaste los ruidos de tu padre tratando de romper la puerta')
                console.log('estas pensando si 1.(defenderte) o simplemente buscar una forma de  (2.escapar)')
                desempleado = prompt ('> ').toLowerCase().trim()
                if (desempleado === 'defenderte' || desempleado === '1' )
                    {
                        alert ('tu padre logro romper la puerta')
                        do{
                            console.log('miras tu alrededor para buscar algo con que poder defenderte , puedes ver ',cajon)
                            response = prompt ('> ')
                            if (response === 'coger tijera')
                                {
                                    alert ('tu padre se avalanza contra ti, pero lograste clavarle las tijeras en los ojos')
                                    alert ('acabas de matar a tu padre')
                                    console.log ('decides ver como se encuentra tu madre')
                                    alert ('la encuentras tirada en el suelo desangrandose \n tratas de ayudarla pero ...')
                                    alert ('se levanta y te muerde el cuello')
                                    console.log (`%c HAS MUERTO`,`color: red;font-family:sistem-ui;font-size:2rem-webkit-text-stroke:1px black;font-weight:bold`)
                                    break;
                                }
                            else if (response === 'coger lapicera')
                            {
                                console.log ('no funciono ')
                                console.log (`%c HAS MUERTO`,`color: red;font-family:sistem-ui;font-size:2rem-webkit-text-stroke:1px black;font-weight:bold`)
                                break;
                            }
                            else if (response === ' coger cuaderno ')
                            {
                                console.log ('no funciono')
                                console.log (`%c HAS MUERTO`,`color: red;font-family:sistem-ui;font-size:2rem-webkit-text-stroke:1px black;font-weight:bold`)
                                break;
                            }
                            else
                            {
                                console.log (`%cno conozco la palabra '${response}'\nvuelva intentarlo`,'color: violet')
                            }
                        }while (true)
                    }
                else if (desempleado === 'escapar' || desempleado === '2')
                {
                    alert ('tu padre logro romper la puerta')
                    console.log('vas corriendo hacia la ventana y decides saltar , te lastimaste pero son solo heridas menores nada grave \n te diriges a la comisaria ')
                    alert ('al llegar no te encuentras a nadie, solo escuchas unos ruidos')
                    console.log ('te diriges donde provienen los ruidos , ves una escena bastante tetrica , son los policias devorando a una persona')
                    alert ('los policias te escucharon y se abalanzaron hacia ti devorandote')
                    console.log (`%c HAS MUERTO`,`color: red;font-family:sistem-ui;font-size:2rem-webkit-text-stroke:1px black;font-weight:bold`)
                }
                break;
            }
            else if (desempleado === 'detenerlo' || desempleado === '2')
            {
                do
                {
                    console.log('puedes ver un cuchillo en el suelo')
                    response = prompt ('> ')
                    if (response === 'coger cuchillo')
                    {
                        console.log('has agarrado el cuchillo \namenazas a tu padre')
                        alert ('se levanta y se avalanza hacia ti')
                        response = prompt ('> ')
                        if (response === 'atacar')
                        {
                            alert('has matado a tu padre')
                            alert('miras a tu alrededor ves todo el desastre , miras a tu madre tirada en el suelo desangrandose')
                            console.log('decides ver como se encuentra tu madre, parece estar con vida, la escuchas murmurar algo... \na los pocos segundos deja de respirar')
                            console.log ('al no poder hacer nada decides salir de tu casa y llamar al 911 , pero escuchas un ruido....')
                            alert('es tu madre levantandose.. ')
                            console.log ('te alivias al saber que sigue con vida y vas directo abrazarla pero al hacerlo de pronto..')
                            alert('te das cuenta que ya no es tu madre si no un zombie y te muerden el cuello , a los pocos segundos...')
                            console.log (`%c HAS MUERTO`,`color: red;font-family:sistem-ui;font-size:2rem-webkit-text-stroke:1px black;font-weight:bold`)
                            break;
                        }
                        else 
                        {
                            console.log(`%cNo conozco la palabra '${response}'`,'color: violet')
                        }
                    }
                    else {
                        console.log (`%cNo conozco la palabra '${response}'`,'color: violet')

                    }
                }while (true)
            }
    }
    else if(opcion === '2' || opcion === 'bombero')
    {
        console.log(username + ' te encuentras tratando de apagar un incendio de una casa, con tus compañeros')
        alert ('escuchas unos gritos dentro de la casa le avisas a tu compañero lo que escuchaste y el decide entrar,tratar de salvar a la persona')
        alert ('consigue salvarlo pero notas algo raro\nesta mordiendo a tu compañero')
        console.log('te diriges lo mas rapido posible al camion buscar algo con que detenerlo')
        do
        {
            console.log ('puedes ver ',camion)
            response= prompt('> ')
            if (response === 'coger soga')
                {
                    alert('has cogido la soga')
                    alert('vas corriendo salvarlo, usas la soga para atar al atacante')
                    response= prompt ('> ')
                    do{
                        if (response === 'atarlo')
                        {
                            console.log('lo detienes , consigues atar al atacante , notas que tiene un comportamiento salvaje y agresivo\npero decides no darle mucha importancia\n')
                            alert('los policias se llevan al atacante')
                            console.log ('apagaron el incendio no se encontro ningun otro herido, te diriges a la estacion con todos')
                            alert('el conductor pierde el control del camion y se estrellan con un arbol...\npierdes el conocimiento por unos minutos')
                            console.log('al despertar tratas de salir del camion y ayudar a los demas, pero te encuentras a uno de tus camaradas comiendose a otro ')
                            response= prompt('> ')
                            if (response === 'ayudarlo' || response === 'separarlo')
                            {
                                break
                            }
                            

                        }
                        else {
                            console.log (`%cNo conozco la palabra '${response}'`,'color: violet')
                        }

                    }while(true)

                }
            else if (response ===  'coger hacha')
            {
                alert ('has cogido el hacha')
                console.log('vas corriendo salvarlo, usas el hacha para detenerlo')
                response= prompt('> ')
                if (response === 'atacar')
                {
                    alert('le metes un hachazo en la espalda pero no consigues pararlo')
                    response= prompt ('> ')
                    if (response === 'volver atacar')
                    {
                        alert ('consigues meterle el hachazo en la cabeza')
                        console.log('tu camarada se encuentra mal herido ,actuas rapido  y tratas de detener la hemorragia con un retal de tela')
                    }
                }
                else 
                {
                    console.log (`%cNo conozco la palabra '${response}'`,'color: violet')
                }     
            }
            else if (response === 'coger casco')
            {
                alert ('has conseguido el casco de bombero')
            }
            else
            {
                console.log (`%cNo conozco la palabra '${response}'`,'color: violet')
            }
        }while (true)
    }
 else
 {
    console.log (`%cNo conozco la palabra '${response}'\nvuelva a intentarlo`,'color: violet')
 }
}while (condition)
