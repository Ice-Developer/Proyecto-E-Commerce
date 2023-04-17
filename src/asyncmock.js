const productos =[
    {itemId:"1" ,nom:"Ebook", precio: 0, catID: "1", img: "", det: "Todo lo que necesitas saber sobre como comenzar en el mundo de los seguros" ,stockInicial:1, stockMaximo:1},
    {itemId:"2" ,nom:"Curso", precio: 1000, catID: "2", img: "", det: "Capacitación destinada a profesionales de seguros que quieran mejorar su presencia en la red" ,stockInicial:1, stockMaximo:1},
    {itemId:"3" ,nom:"Taza", precio: 100, catID: "3", img: "", det:"Taza con logo a eleccion, podes elegir entre varios de nuestros modelos" ,stockInicial:1, stockMaximo:10},
    {itemId:"4" ,nom:"Pagina Web", precio: 2000, catID: "4", img: "", det:"Desarrollo y hosting de tu web" ,stockInicial:1, stockMaximo:1}
]

export const getProductos = ( )=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 100)
    })
}
export const getUnProducto = (id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const producto = productos.find(prod => prod.itemId === id)
            resolve(producto)
        }, 100)
    })
}

export const getCatProductos = (idCategoria)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const catProductos = productos.filter(prod => prod.catID === idCategoria)
            resolve(catProductos)
        }, 100)
    })
}