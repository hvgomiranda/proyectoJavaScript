let ingredientes = [];
let lista;
let flag = 1;

function search()
{
    button = document.getElementById("botonAgregar");
    let listado = document.querySelector("#listado");
    if(flag)
    {
        button.innerText = "Volver";
        flag = 0;
        //listado.style.display = "none";

        fetch("../baseDeDatos/baseDeDatosRecetas.json")
        .then(resp => resp.json())
        .then(data => 
            {
                data.forEach(receta =>
                {
                    for(let i=0; i<ingredientes.length; i++)
                    {
                        for(let j=0; j<receta.lenght; j++)
                        {
                            for(let k=0; k<receta.ingrediente.lenght; k++)
                            {
                                if(ingredientes[i] == receta[j].ingrediente[k])
                                {
                                    html = "";
                                        html+=`
                                        <li>
                                            <p>${receta.nombre}</p>
                                        </li>`
                                }

                            }
                        }
                    }
            });
            lista.innerHTML = html;
        });


    }
    else
    {
        button.innerText = "Buscar";
        flag = 1;
        listado.style.display = "";

    }

    
}

//aplicar color al item seleccionado y agregarlo a una lista
document.querySelector("ul").addEventListener("click", function(e) {
    let selected;
    let ingredient;
    
    if(e.target.tagName === "LI") 
    {                                                     
      if(selected) selected.className = "";                               
      e.target.className = "selected";
      ingredient = e.target;
      ingredient = ingredient.querySelector("li p");
      ingredient = ingredient.innerText;

      ingredientes.push(ingredient);               
    }
  });

lista = document.querySelector("#listado");

fetch("../baseDeDatos/baseDeDatos.json")
    .then(resp => resp.json())
    .then(data => 
        {
            html = "";
            data.forEach(ingrediente =>
            {
                html+=`
                <li>
                    
                    <p>${ingrediente.nombre}</p>
                    
                </li>`
            });
            lista.innerHTML = html;
        });
        