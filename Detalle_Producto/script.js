const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');
const btnAgregarCarrito = document.getElementById('agregar-al-carrito');
const producto = document.getElementById('producto');
let carrito = [];


const renderCarrito = () => {
    ventanaCarrito.classList.add('carrito--active');

    // ELIMINAMOS TODOS LOS PRODUCTOS ANTERIORES PARA CONSTRUIR EL CARRITO DESDE CERO
    const productosAnteriores = ventanaCarrito.querySelectorAll('.carrito_producto');
    productosAnteriores.forEach((producto) => producto.remove());

    let total = 0;

    // COMPROBAMOS SI HAY PRODUCTOS
    if(carrito.length < 1){
        // PONEMOS LA CLASE DE CARRITO VACIO
        ventanaCarrito.classList.add('carrito--vacio');
    } else {
        // ELIMINAMOS LA CLASE DE CARRITO VACIO
        ventanaCarrito.classList.remove('carrito--vacio')

    }
};

// ABRIR CARRITO
botonesAbrirCarrito.forEach((boton)=>{
    boton.addEventListener('click',(e)=>{
        renderCarrito();
    })
});

// CERAR CARRITO
botonesCerrarCarrito.forEach((boton)=>{
    boton.addEventListener('click',(e)=>{
        ventanaCarrito.classList.remove('carrito--active');
    })
});



const btnCategorias = document.getElementById('btn-categorias');
const ventanaCategorias = document.getElementById('categorias');  

btnCategorias.addEventListener('click', (e) => {
    ventanaCategorias.classList.toggle('categorias--active');
})
