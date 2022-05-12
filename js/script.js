
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

let listaGlobalIngredientes = [];

let ingreso = document.getElementById("ingresoIngredientes");

ingreso.addEventListener("keypress", function(event)
{
    if(event.key === "Enter")
    {
        event.preventDefault();
    }
    document.getElementById("botonAgregar").click();
})

let botonAgregar = document.getElementById("botonAgregar");

botonAgregar.onclick = function agregarNuevoIngrediente()
{
    for(let i=0; i<listaGlobalIngredientes.length; i++)
    {
        if(ingreso.value === listaGlobalIngredientes[i])
        {
            console.log("Encontrado");
        }
    }
}

botonAgregar.addEventListener("click", () =>
{

    Toastify(
        {
            text: "Agregado!",
            duration: 1000,
            grativty: "bottom",
            position: "center"
        }
    ).showToast();
})

//clases
class Receta
{
    constructor(id, nombre, ingredientes)
    {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
    }
}

class Ingrediente
{
    constructor(id, nombre, tipo)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        listaGlobalIngredientes.push(nombre);
    }
}

class Tipo
{
    constructor(id, nombre)
    {
        this.id = id;
        this. nombre = nombre;
    }
}

//funciones para las bases de datos
//base de datos ingredientes
let arroz = new Ingrediente(1, "arroz", 101);
let avena = new Ingrediente(2, "avena", 101);
let maiz = new Ingrediente(3, "maíz", 101);
let trigo = new Ingrediente(4, "trigo", 101);

let acelga = new Ingrediente(5, "acelga", 102);
let ajo = new Ingrediente(6, "ajo", 102);
let arveja = new Ingrediente(7, "arveja", 102);
let batata = new Ingrediente(8, "batata", 102);
let = new Ingrediente(9, "berenjena", 102);
let = new Ingrediente(10, "brocoli", 102);
let = new Ingrediente(11, "cebolla", 102);
let = new Ingrediente(12, "coliflor", 102);
let = new Ingrediente(13, "espárrago", 102);
let = new Ingrediente(14, "espinaca", 102);
let = new Ingrediente(15, "garbanzo", 102);
let = new Ingrediente(16, "hinojo", 102);
let = new Ingrediente(17, "lenteja", 102);
let = new Ingrediente(18, "maní", 102);
let = new Ingrediente(19, "nabo", 102);
let = new Ingrediente(20, "papa", 102);
let = new Ingrediente(21, "pepino", 102);
let = new Ingrediente(22, "perejil", 102);
let = new Ingrediente(23, "pistacho", 102);
let = new Ingrediente(24, "poroto colorado", 102);
let = new Ingrediente(25, "poroto negro", 102);
let = new Ingrediente(26, "radicheta", 102);
let = new Ingrediente(27, "remolacha", 102);
let = new Ingrediente(28, "repollo", 102);
let = new Ingrediente(29, "soja", 102);
let = new Ingrediente(30, "tomate", 102);
let = new Ingrediente(31, "zanahoria", 102);
let = new Ingrediente(32, "zapallito", 102);
let = new Ingrediente(33, "zapallo", 102);

let = new Ingrediente(34, "aceituna verde", 103);
let = new Ingrediente(35, "aceituna negra", 103);
let = new Ingrediente(36, "ananá", 103);
let = new Ingrediente(37, "banana", 103);
let = new Ingrediente(38, "ciruela", 103);
let = new Ingrediente(39, "coco", 103);
let = new Ingrediente(40, "damasco", 103);
let = new Ingrediente(41, "durazno", 103);
let = new Ingrediente(42, "frutilla", 103);
let = new Ingrediente(43, "higo", 103);
let = new Ingrediente(44, "limón", 103);
let = new Ingrediente(45, "manzana", 103);
let = new Ingrediente(46, "maracuyá", 103);
let = new Ingrediente(47, "melón", 103);
let = new Ingrediente(48, "membrillo", 103);
let = new Ingrediente(49, "mora", 103);
let = new Ingrediente(50, "palta", 103);
let = new Ingrediente(51, "pera", 103);
let = new Ingrediente(52, "pomelo", 103);
let = new Ingrediente(53, "sandía", 103);

let = new Ingrediente(54, "aceite de girasol", 104);
let = new Ingrediente(55, "aceite de oliva", 104);
let = new Ingrediente(56, "aceite de maíz", 104);

let = new Ingrediente(57, "anchoa", 105);
let = new Ingrediente(58, "boga", 105);
let = new Ingrediente(33, "caballa", 105);
let = new Ingrediente(33, "cornalito", 105);
let = new Ingrediente(33, "merluza", 105);
let = new Ingrediente(33, "pargo", 105);
let = new Ingrediente(33, "pejerrey", 105);
let = new Ingrediente(33, "surubí", 105);
let = new Ingrediente(33, "calamar", 105);
let = new Ingrediente(33, "centolla", 105);
let = new Ingrediente(33, "langostino", 105);
let = new Ingrediente(33, "mejillón", 105);

let = new Ingrediente(33, "bola de lomo", 106);
let = new Ingrediente(33, "nalga", 106);
let = new Ingrediente(33, "peceto", 106);








/*
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
*/