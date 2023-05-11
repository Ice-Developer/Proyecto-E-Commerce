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
