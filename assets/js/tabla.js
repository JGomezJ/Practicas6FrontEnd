/**
 * autor JAGJ
 */

/**
 * url endpoint
 */
const endpoint = "http://localhost:8080/api/Producto/all"

const viewProduct=()=>{
    const resp=consumirGET()
    console.log(resp)
    resp
    .then(result=>{
        console.log(result.data)
        tableRender(result.data)
    })
    .catch(e=>{
        console.log(e)
    })
}

const consumirGET=async()=>{
    return await axios.get(endpoint)
}

const tableRender=(productos)=>{
    const tbody=document.getElementById("tbody")
    let registro=""
    let index=1
    productos.forEach(prod => {
        registro += "<tr>"+
                        "<td>"+index+"</td>"+
                        "<td>"+prod.id+"</td>"+
                        "<td>"+prod.nomprod+"</td>"+
                        "<td>"+prod.precio+"</td>"+
                        "<td>"+prod.categoria+"</td>"+
                        "<td>"+prod.stock+"</td>"+
                        "<td>"+prod.description+"</td>"+
                        "<td><button id='btneditar' class='btn btn-warning' style='margin: 0px 0px;'>Editar</button></td>"+
                        "<td><button id='btneliminar' class='btn btn-danger' style='margin: 0px 0px;'>Eliminar</button></td>"+
                    "</tr>"
        console.log(prod)
        index++
    });
    tbody.innerHTML=registro
}

viewProduct()