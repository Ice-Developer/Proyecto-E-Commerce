import { useState, useContext, useEffect } from "react"
import { CartContext } from "../Context/CartContext"
import { db } from "../../Services/Firebase/config"
import { collection, addDoc, doc, query, updateDoc, onSnapshot } from "firebase/firestore"
import { Link } from "react-router-dom"
import "./Checkout.css"



const Checkout = () => {
    const {cart, cleanCart, precioCart, totalCart} = useContext(CartContext);
    

    const [ nombre, setNombre] = useState("");
    const [ apellido, setApellido] = useState("");
    const [ telefono, setTelefono] = useState("");
    const [ mail, setMail] = useState("");
    const [ mailConfirm, setMailConfirm] = useState("");
    const [ordenId, setOrdenId] = useState ("");
    const [error, setError] = useState ("");
   const [error2, setError2] = useState ("");
    const [nombreCompleto, setNombreCompleto] = useState("");
    const [numTarjeta, setNumTarjeta] = useState("");
    const [mes, setMes] = useState("");
    const [año, setAño] = useState("");
    const [cvv, setCvv] = useState("");
 
    const handleSumbmit = (event) =>{
        event.preventDefault ();
        const date = new Date();
        const dia = date.getUTCDate();
        const mes = date.getUTCMonth() +1;
        const año = date.getUTCFullYear();


        if(!nombre || !apellido || !telefono || !mail || !mailConfirm ){
            setError("Por favor complete todos los campos");
            return;
        }
         else if( !nombreCompleto || !numTarjeta || !mes || !año || !cvv ){
            setError2("Datos de pago incompletos");
            return;
        } 

        if( mail !== mailConfirm){
            setError ("Los e-mails no coinciden");
            return
        }

        const pedido = {
            items : cart.map ((producto)=>({
                id : producto.item.itemId,
                nom : producto.item.nom,
                cantidad : producto.cantidad,
                precio : producto.item.precio,
                
            }
            )) ,
            total : totalCart (cart),
            valorAPagar : precioCart(cart),
            nombre,
            apellido,
            telefono,
            mail,
            fechaCompra: `${dia}/${mes}/${año}`
        };
        
        pedido.items.map (prod => (handleCompra(prod.id, prod.cantidad)))

        addDoc(collection(db, "ordenes"), pedido)
            .then((docRef) =>{
                setOrdenId(docRef.id);
                cleanCart();
                setNombre("");
                setApellido("");
                setTelefono(""); 
                setMail("");
                setMailConfirm ("");
                setNumTarjeta ("");
                setMes ("");
                setAño ("");
                setCvv (""); 
            })
            .catch ((error) => {
                console.error("Error al crear la orden", error);
            setError ("Error en la creacion de la orden, reintente mas tarde")
            })  
    } 
    
    const sumaProd =(producto) =>{
        return (producto.item.precio) *(producto.cantidad)
    }

    const[ productos, setProductos] = useState  ([]);

console.log(productos)
    useEffect(() => {
        const consulta = query(collection(db, "productos"));
        const reducirStock=  onSnapshot(consulta, function(querySnapshot){
            const docs =[];
            querySnapshot.forEach(function(doc){
                docs.push({id:doc.id, ...doc.data () });
            });
            setProductos(docs);
            
        });
        return () =>{
            reducirStock();
        }
    },[])
    

    const handleCompra = (id, cantidad) =>{
            const productoRef = doc(db, "productos",id);
            const producto = productos.find (prod => prod.id ===id)    
            if (producto){
            updateDoc(productoRef, { stock : producto.stock-cantidad})
                .then (()=>{ console.log("stock actualizado")})
                .catch ((error)=>{ console.log(error)})
        }
        else{
            console.log("producto con stock indefinido" )
        }
    } 
    
    const colorBack = {backgroundColor:`#EDF6F9`}
    if (cart.length===0){
        return(
            <div  style={colorBack}>
            <div className="cartBanner"></div>
            <div className="cartVacio">
            <h1 style={{color:"black"}}>Gracias por tu compra! {nombre} Tu numero de orden es</h1>
            <h1 style={{color:"green"}}>{ordenId}</h1>
            <Link to='/'>
            <button className="btnVI">
                    <div class="textVI">
                        <span>Volver</span>
                        <span>al</span>
                        <span>inicio</span>
                    </div>
                    <div class="cloneVI">
                        <span>Volver</span>
                        <span>al</span>
                        <span>inicio</span>
                    </div>
                    <svg width="20px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
            </button>
            </Link>
            </div>
            </div>
        )
    }
    return ( 
        <div style={colorBack} className="contenedorGralCheckOut">
            
            <form id="form" onSubmit={handleSumbmit} className="form">
                    <div>
                        <p className="title">Completa tus datos para finalizar la compra</p>
                        <h2>Datos Personales</h2>
                    </div>
                    <div className="formContacto">
                        <label For="nombre" className="labelForm">Nombre</label>
                        <input placeholder="Juan" id="nombre" className="input" type="text" value={nombre} onChange={(event) => setNombre(event.target.value)}/>
                        <label For="apellido" className="labelForm">Apellido</label>
                        <input placeholder="Perez" id="apellido" className="input"type="text" value={apellido} onChange={(event) => setApellido(event.target.value)}/>
                        <label For="telefono" className="labelForm">Telefono</label>
                        <input placeholder="(Cod. Area) 4444-4444" id="telefono" className="input" type="number" value={telefono} onChange={(event) => setTelefono(event.target.value)}/>
                        <label For="mail" className="labelForm">E-mail</label>
                        <input placeholder="tumail@tumail.com" id="mail" className="input" type="email" value={mail} onChange={(event) => setMail(event.target.value)}/>
                        <label For="confMail" className="labelForm">Confirma tu E-mail</label>
                        <input id="confMail" placeholder="tumail@tumail.com"   className="input" type="email" value={mailConfirm} onChange={(event) => setMailConfirm(event.target.value)}/> 
                        {
                            error && <p style={{color:"red"}}>{error}</p> 
                        }
                    </div>
                    <div className="formPago">
                        <h2>Forma de pago</h2>
                        <div className="selectorFP">
                            <div className="radioTarj">
                                <input type="radio" name="tarjeta"   id="credito" />  Tarjeta de credito
                            </div>
                            <div className="radioTarj">
                            <input type="radio" name="tarjeta"  id="debito"/>  Tarjeta de debito
                            </div>
                            </div>
                            <div className="contPago">
                                <div className="c1">
                                    <label For="nombreCompleto" className="labelForm">Nompre completo (Como figura en la tarjeta)</label>
                                    <input placeholder="Juan Perez " id="nombreCompleto" className="input" type="text" value={nombreCompleto} onChange={(event) => setNombreCompleto(event.target.value)}/>
                                </div>
                            </div>
                            <div className="contPago">
                            <div className="c1">
                                    <label For="numTarjeta" className="labelForm">Numero de tarjeta</label>
                                    <input placeholder="xxxx - xxxx - xxxx - xxxx" id="numTarjeta" className="input" type="number"  min="1000000000000000" max="9999999999999999" value={numTarjeta} onChange={(event) => setNumTarjeta(event.target.value)}/>
                                </div>
                                <div className="c1">
                                    <label For="vence" className="labelForm">Vencimiento</label>
                                        <div className="inputSelect">
                                        <select className="select" name="" id="mes" value={mes} onChange={(event) => setMes(event.target.value)}>
                                            <option value="" disabled selected>Mes</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>

                                        <select className="select" name="" id="año" value={año} onChange={(event) => setAño(event.target.value)}>
                                            <option value="" disabled selected>Año</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                            <option value="2030">2030</option> 
                                        </select>
                                        </div>
                                </div>
                                <div className="c1">
                                    <label For="cvv" className="labelForm">CVV</label>
                                        <input placeholder="xxx" id="cvv" className="input" type="number"min="100" max="999" value={cvv} onChange={(event) => setCvv(event.target.value)} />
                                </div>
                            </div>
                            {
                            error2 && <p style={{color:"red"}}>{error2}</p>
                            }
                        </div> 

                <div  className="contBtnSubmit">
                    <button id="btnSub" className="submit" >Finalizar compra</button>
                </div>
                
                
            </form>
            
        <div className="contDetalle">
                    <div className="contenedorCartDetCheckOut">
                        <div className=" detCartCheckOut">
                            <h2> Tu Carrito  </h2>
                            <div className="contTot">{totalCart(cart)}</div>
                        </div>
                            <div className="prodCartCheckOut">
                                    {
                                    cart.map((producto)=>(
                                <div key={producto.item.id} className="eachProdCheckOut">
                                    <div className="tituloCantidad">
                                        <p>
                                            {producto.item.nom}
                                        </p>
                                        <p>
                                            ${sumaProd(producto)}
                                        </p>
                                    </div>
                                    <p>
                                        {producto.cantidad} *  ${producto.item.precio} 
                                    </p>
                                </div>)
                                    )}
                                    <div className="totalPagar">
                                        <h2>Total </h2>
                                        <h2>  ${precioCart(cart)} </h2>
                                    </div>
                            </div>
                            
                    </div>                
        </div> 
        </div>


            
    )
}

export default Checkout