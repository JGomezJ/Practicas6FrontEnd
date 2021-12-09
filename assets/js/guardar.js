const id = document.getElementById("id")
const nomprod = document.getElementById("nomprod")
const precio = document.getElementById("precio")
const categoria = document.getElementById("categoria")
const stock = document.getElementById("stock")
const descripcion = document.getElementById("descripcion")
const btnguardar = document.getElementById("btnguardar")

const endpoint = "http://localhost:8080/api/Producto/new"

const peticionProductPOST=async(producto)=>{
    return await axios.post(endpoint, producto)
}

const productObj=()=>{
    const producto ={
        id:id.value,
        nomprod:nomprod.value,
        precio:precio.value,
        categoria:categoria.value,
        stock:stock.value,
        description:descripcion.value
    }
    return producto
}

const save=()=>{
    let msg = ""
    const result = peticionProductPOST(productObj())
    console.log(result)
    result.then((result)=>{
        console.log(result.status)
        if (result.status==201) {            
            msg = "Registro Insertado con Exito !!"
            console.log(msg)
        }            
        else{
            msg = "Problemas al Insertar"
            console.log(msg)
        }
    })
    alert(msg)
}

btnguardar.addEventListener("click",(e)=>{
    e.preventDefault()
    save()
})