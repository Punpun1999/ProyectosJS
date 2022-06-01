export function menu (username,condition)
{
let response;
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
}
export function inventario(mochila)
{
    let nombre = input ()
}