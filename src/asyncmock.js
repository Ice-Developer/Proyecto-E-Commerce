const productos =[
    {itemId:"1" ,nom:"Ebook", precio: 200, catID: "1", img: "../img/ebook.webp", det: "Todo lo que necesitas saber sobre como comenzar en el mundo de los seguros" ,stock:1},
    {itemId:"2" ,nom:"Curso", precio: 1000, catID: "2", img: "../img/curso.webp", det: "Capacitación destinada a profesionales de seguros que quieran mejorar su presencia en la red" ,stock:1},
    {itemId:"3" ,nom:"Taza", precio: 500, catID: "3", img: "../img/taza.webp", det:"Taza con logo a eleccion, podes elegir entre varios de nuestros modelos" ,stock:10},
    {itemId:"4" ,nom:"Pagina Web", precio: 2000, catID: "4", img: "../img/diseño.webp", det:"Desarrollo y hosting de tu web" ,stock:1}
]

const nav = [
    {itemId:"1", img:"../img/descargables.png", nom:`/Descargable/1`, mensaje:"Aca vas a poder encontrar todo mi material descargable para acompañarte en tu desarrollo profesional!!"},
    {itemId:"2", img:"../img/academia.png", nom:`/Academia/2`, mensaje:"Cursos, Mentorias, MasterClass y nuestros servicios para empresas en un solo lugar"},
    {itemId:"3", img:"../img/chucherias.png", nom:`/Productos/3`, mensaje:"Todos nuestros productos y mas para adornar tu espacio de trabajo"},
    {itemId:"4", img:"../img/diseño.png", nom:`/ServWeb/4`, mensaje:"Diseñamos a tu medida tu pagina web, dandote el mejor servicio y precio del mercado."}
]

export const getItemNav = ()=>{
    return new Promise((resolve)=>{
        resolve(nav)
    })
}
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