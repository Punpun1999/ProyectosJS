import {menu}
from './funciones/funcion.js'
let username = prompt ('Bienvenido a zomboid \n ingrese su nombre ')
let condition = true
menu(username)
let response;
let opcion;
let desempleado;
var cajon = ['lapicera','cuaderno','tijera']
var camion = ['soga','hacha'];

do
{
    console.log('Profesiones')
    console.log('1.Desempleado')
    console.log('2.Bombero')
    opcion= prompt('Elija su profesion').toLowerCase().trim()
    if (opcion === '1' || opcion === 'desempleado')
    {
        console.log(username+' te encuentras en la casa de tus padres en tu cuarto revisando linkedin, escuchas unos ruidos y decides revisar \n te encuentras a tu padre mordiendole el cuello a tu madre,')
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
                                    alert ('tu padre se avalanza contra ti, pero lograste clavarle las tijeras en el ojo izquierdo')
                                    alert ('acabas de matar a tu padre')
                                    console.log ('decides ver como se encuentra tu madre')
                                    alert ('la encuentras tirada en el suelo desangrandose \n tratas de ayudarla pero ...')
                                    alert ('se levanta y te muerde el cuello')
                                    console.log (`%c HAS MUERTO`,`color: red;font-family:sistem-ui;font-size:2rem-webkit-text-stroke:1px black;font-weight:bold`)
                                    break;
                                }
                            else if (response === 'coger lapicera')
                            {
                                console.log('tratas de clavarle la lapicera')
                                console.log ('no funciono, te empazo a morder el cuello')
                                console.log (`%c HAS MUERTO`,`color: red;font-family:sistem-ui;font-size:2rem-webkit-text-stroke:1px black;font-weight:bold`)
                                break;
                            }
                            else if (response === ' coger cuaderno ')
                            {
                                console.log('le lanzaste el libro pidiendo que se alejara')
                                console.log ('no funciono y se avalanzo hacia ti mordiendote el cuello...')
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
                    console.log('vas corriendo hacia la ventana y decides saltar , te lastimaste pero son solo heridas menores nada grave \n te diriges a la comisaria mas cercana')
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
                        console.log('has agarrado el cuchillo \namenazas a tu padre para que se detenga')
                        alert('no funciono...')
                        alert ('se levanta y se avalanza hacia ti')
                        response = prompt ('> ')
                        if (response === 'atacar')
                        {
                            alert('has matado a tu padre')
                            alert('miras a tu alrededor ves todo el desastre , miras a tu madre tirada en el suelo desangrandose')
                            console.log('decides ver como se encuentra, parece estar con vida, la escuchas murmurar algo... \na los pocos segundos deja de respirar')
                            console.log ('al no poder hacer nada decides salir de tu casa y llamar al 911 , pero escuchas un ruido....')
                            alert('es tu madre levantandose.. ')
                            console.log ('te alivias al saber que sigue con vida y vas directo abrazarla pero al hacerlo de pronto..')
                            alert('te das cuenta que ya no es tu madre si no un zombie, te muerde en el cuello y a los pocos segundos...')
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
        console.log(username + ' te encuentras tratando de apagar un incendio de una casa, con tu escuadron')
        alert ('escuchas unos gritos dentro de la casa ,le avisas a los demas,lo que escuchaste ,uno decide entrar,tratar de salvar a la persona')
        alert ('consigue salvarlo pero notas algo raro en la persona\nves como termina mordiendo alguien')
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
                            console.log('lo detienes , consigues atar al atacante , notas que tiene un comportamiento salvaje y agresivo, como si fuera un animal salvaje\npero decides no darle mucha importancia\n')
                            alert('los policias se llevan al atacante')
                            console.log ('apagaron el incendio no se encontro ningun otro herido, te diriges a la estacion con todos')
                            alert('el conductor pierde el control del camion y se estrellan con un arbol...\npierdes el conocimiento por unos minutos')
                            console.log('al despertar tratas de salir del camion y ayudar a los demas, pero te encuentras a uno de tus camaradas comiendose a otro ')
                            response= prompt('> ')
                            if (response === 'ayudarlo' || response === 'separarlo')
                            {
                                console.log('al hacerlo , se va directo hacia , consigue morderte el cuello, y en lo ultimos segundos agarras un vidrio del suelo y se lo clavas en la cabeza')
                                alert('lograste matarlo, tratas de parar la hemorragia pero no puedes, te quedas tumbado en el suelo desangrandote \n logras ver como uno de tus colegas que estaba muerto se levanta y se dirige hacia a ti...')
                                console.log (`%c HAS MUERTO`,`color: red;font-family:sistem-ui;font-size:2rem-webkit-text-stroke:1px black;font-weight:bold`)
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
                        alert('no logro sobrevivir,los policias y los civiles que estaban presente vieron toda la escena ,te arrestan ,te menten al auto')
                        console.log('ya en el auto miras atras , ves como tu colega muerto se levanta y ataca a los demas')
                        alert ('le avisas a los policias de lo que viste , ellos se detienen para ver si es verdad, todo el caos personas corriendo, ves como bastantes personas se vuelven a levantar\nlos policias tratan de detener a los muertos caminantes\nno pudieron y fueron devorados')
                        alert ('te encuentras rodeado de caminantes muertos, tratando de romper las ventanas..')
                        alert('lograron romperla...')
                        console.log (`%c HAS MUERTO`,`color: red;font-family:sistem-ui;font-size:2rem-webkit-text-stroke:1px black;font-weight:bold`)
                        break
                    }
                }
                else 
                {
                    console.log (`%cNo conozco la palabra '${response}'`,'color: violet')
                }     
            }
            else if (response === 'exit')
            {
                alert('cerrando juego...')
                break
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
