let ingrediente;
let ingredientes = [];
let continuarCargaDeIngredientes = "s";
let ingredienteCorrecto = "s";

do
{
    ingrediente = prompt("Escriba el nuevo ingrediente a agregar a la lista: ");

    ingredientes.push(ingrediente);

    continuarCargaDeIngredientes = prompt("¿Desea seguir agregando ingredientes? (s/n)");

}
while(continuarCargaDeIngredientes !== "n");

for(let i=0; i<ingredientes.length; i++)
{
    console.log(ingredientes[i] + "\n");
}


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