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
let botonVerRecetas;
let botonAgregarRecetas;

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

botonVerRecetas = document.getElementById("verRecetas");
botonVerRecetas.addEventListener("click", mostrarRecetas);

botonAgregarRecetas = document.getElementById("agregarRecetas");
botonAgregarRecetas.addEventListener("click", agregarNuevaReceta);


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

        ingredientes = [];
    
        continuar = prompt("¿Desea seguir agregando recetas? (s/n)");
    
    }while(continuar !== "n");
}

function mostrarRecetas()
{
    for(let receta of recetas)
    {
        console.log(receta.id + "\t");
        console.log(receta.nombre + "\t");
        console.log(receta.ingredientes + "\n");
    }
}

