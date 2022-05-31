fetch("../baseDeDatos/baseDeDatosRecetas.json")
.then(resp => resp.json())
.then(data => 
    {
        html = "";
        data.forEach(receta =>
        {
            for(let i=0;i<ingredientes.length; i++)
            {
                for(let j=0; j<receta.ingrediente.lenght; i++)
                {
                    if(ingrediente[i] == receta.ingrediente[j])
                    {
                        html+=`
                        <li>
                            
                            <p>${receta.nombre}</p>
                            
                        </li>`
                    }
                }
            }
        });
        lista.innerHTML = html;
    });