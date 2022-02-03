class juego{
    constructor(id,nombre,plataforma,precio){
        this.id=id
        this.nombre=nombre
        this.plataforma=plataforma
        this.precio=precio
    }
}
let juegosStock = [
    {id: 1,nombre: "DARK SOULS 3",plataforma: "Steam",precio: 10},    
    {id: 2,nombre: "GOD OF WAR",plataforma: "Steam",precio: 34},
    {id: 3,nombre: "NIER AUTOMATA",plataforma: "Steam",precio: 18},
    {id: 4,nombre: "ELDEN RING",plataforma: "Steam",precio: 42},
    {id: 5,nombre: "HORIZON ZERO DAWN",plataforma: "Steam",precio: 15},
]
let carrito=[]
let opcion= 0;

function añadirJuego(){
    let id=juegosStock.length+1
    let nombre=prompt("Nombre del juego: ")
    let plataforma=prompt("Plataforma del juego: ")
    let precio=parseInt(prompt("Precio del juego: "))
    const JUEGO= new juego(id,nombre,plataforma,precio)
    juegosStock.push(JUEGO)
}
function venta(id){
    let juego=juegosStock.find((juego)=>juego.id==id)
    carrito.push(juego)    
}
function montoVenta(){
    let monto= 0;
    carrito.forEach(juego=>{
        monto+=juego.precio
    })
    return monto
}



do{
    opcion=parseInt(prompt("[1] Añadir juego\n[2] Venta\n[3] Ver carrito\n[4] Salir"))
    switch (opcion){
        case 1:{
            añadirJuego()
            break
        }
        case 2:{
            do{
                let string= ''
                juegosStock.forEach(juego=>{
                    string+='['+juego.id+']     '+juego.nombre+'\n'
                })
                opcion=prompt(string+'['+(juegosStock.length+1)+']     SALIR')
                if (opcion>=1&&opcion<=juegosStock.length){
                    venta(opcion)
                    alert("Añadiendo al Carrito")        
                }
                else if(opcion==(juegosStock.length+1)){
                    alert("Volviendo al menú principal")
                }
                else{
                    alert("Opcion Incorrecta")
                }
            }while(opcion!=(juegosStock.length+1))
            break            
        }
        case 3:{
            console.log(juegosStock)
            let string=''
            carrito.forEach(juego=>{
                string+=juego.nombre+'     €'+juego.precio+'\n'
            })
            alert("===CARRITO===\n"+string+'Cantidad de Productos: '+carrito.length+'\nPrecio Total: '+montoVenta(venta))
            break        
        }
        case 4:{
            alert("GRACIAS")
            break
        }
    }
}while(opcion!=4)