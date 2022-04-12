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

class Receta
{
    constructor(id, nombre, ingredientes)
    {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
    }
}

for(let i=0; i<recetas.length; i++)
{
    console.log(recetas[i] + "\n");
}

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


/*ingredienteCorrecto = prompt("El ingrediente es " + ingrediente + ": ¿Estás seguro? (s/n)");
ingredienteCorrecto = ingredienteCorrecto.toLowerCase();

while(ingredienteCorrecto !== "s" && ingredienteCorrecto !== "si" && ingredienteCorrecto !== "sí" && ingredienteCorrecto !== "n" && ingredienteCorrecto !== "no")
{
    {
        ingredienteCorrecto = prompt("Ingreso incorrecto, vuelva a ingresar (s/n): ");
    }
}

while(ingredienteCorrecto === "n" || ingredienteCorrecto === "no")
{
    ingrediente = prompt("Escriba el nuevo ingrediente a agregar a la lista: ");

}

ingredientes = ingredientes.push(ingrediente);

for(let i=0; i<ingredientes.length; i++)
{
    console.log(ingredientes[i] + "\n");
}*/