let ingredientes = [];
let lista;

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