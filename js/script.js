let nombre;
let nombreReceta;
let ingrediente;
let ingredientes = [];
let id = 0;
let idReceta;
let continuar = "s";
let continuarCargaDeIngredientes = "s";
let ingredienteCorrecto = "s";
let recetas = [];

let eleccion;

class Receta
{
    constructor(id, nombre, ingredientes)
    {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
    }
}

function menu()
{
    let eleccion;

    eleccion = prompt("1. Ingresar nueva receta\n2. Ver recetas\nElija una opcion: ");

    eleccion = parseInt(eleccion);

    return eleccion;
}

do
{
    eleccion = menu();

    switch(eleccion)
    {
        case 1:
            agregarNuevaReceta();
            break;
        case 2:
            mostrarRecetas();
            break;
        case 3:
            console.log("Gracias por usar el programa");
            break;
        default:
            console.log("Opcion incorrecta, vuelva a elegir");
    }
}while(eleccion!=3);

function agregarNuevaReceta()
{
    do
    {
        id++;
        idReceta = id;
    
        nombre = prompt("Escriba el nombre de la receta: ");
        
        do
        {
            ingrediente = prompt("Escriba el ingrediente para hacer la receta: ");
        
            ingredientes.push(ingrediente);
        
            continuarCargaDeIngredientes = prompt("¿Desea seguir agregando ingredientes? (s/n)");
        
        }while(continuarCargaDeIngredientes !== "n");
    
        nombreReceta = nombre;
    
        nombreReceta = new Receta(idReceta, nombre, ingredientes);
    
        recetas.push(nombreReceta);
    
        continuar = prompt("¿Desea seguir agregando recetas? (s/n)");
    
    }while(continuar !== "n");
}

function mostrarRecetas()
{
    for(let i=0; i<recetas.length; i++)
    {
        console.log(recetas[i] + "\n");
    }
}

