const KEY_COMPRA = "datosCompra"; 
const KEY_PRODUCTOS = "productos";
const KEY_CARRITO = "carrito";


function guardarDatos(key, data) {
    const dataString = JSON.stringify(data);
    localStorage.setItem(key, dataString);
}

function obtenerDatos(key){
    if(localStorage.getItem(key)=="undefined"){
        return "No hay datos almacenados"
    }
    const dataString = localStorage.getItem(key);
    return JSON.parse(dataString)
}    


if (!localStorage.getItem(KEY_PRODUCTOS)) {//Comprueba si no hay datos almacenado bajo esa clave
    const productos = [
        {
            id: 1,
            nombre: "Camisa",
            precio: 119000,
            categoria: "Camisas",
            talla: ["S", "M", "L", "XL"],
            color: "Blanco",
            descripcion: "Camisa manga corta en tela tejida y largo regular...",
            material: "Algodón",
            stock: 50,
            imagen: "../img/camisa1.jpg"
        },
        {
            id: 2,
            nombre: "Camisa polo",
            precio: 99000,
            categoria: "Camisas",
            talla: ["S", "M", "L", "XL"],
            color: "Beige",
            descripcion: "Cómoda y elegante, ideal para cualquier ocasión...",
            material: "Algodón",
            stock: 30,
            imagen: "../img/camisapolo2.jpg"
        },
        {
            id: 3,
            nombre: "Chaqueta de Cuero Negra",
            precio: 195000,
            categoria: "Chaquetas",
            talla: ["S", "M", "L"],
            color: "Negro",
            descripcion: "Chaqueta de cuero sintético con cierre frontal y bolsillos.",
            material: "Cuero",
            stock: 10,
            imagen: "../img/chaquetaCuero3.jpg"
        },
        {
            id: 4,
            nombre: "Chaqueta beige",
            precio: 185000,
            categoria: "Chaquetas",
            talla: ["S", "M", "L"],
            color: "Beige",
            descripcion: "Elegante y moderna, esta chaqueta beige con botones es ideal para un look sofisticado y único. Su diseño ajustado ofrece comodidad y estilo.",
            material: "Poliéster",
            stock: 15,
            imagen: "../img/chaqueta-beige4.png"
        },
        {
            id: 5,
            nombre: "Falda Short Café Basico",
            precio: 129000,
            categoria: "Faldas",
            talla: ["S", "M", "L"],
            color: ["Café"],
            descripcion: "Falda short café. Diagonal marcada,tiro alto,tapa delantera con tablas y medio cinturón con hebilla ajustable en costado, bolsillo cargo en costado contrario.",
            material: "Algodón",
            stock: 20,
            imagen: "../img/faldaShort5.jpg"
        },
        {
            id: 6,
            nombre: "Falda Short Negra",
            precio: 129000,
            categoria: "Faldas",
            talla: ["S", "M", "L"],
            color: ["Negro"],
            descripcion: "Falda short. Fit regular, cortes en delantero y posterior, cierre invisible en costado.",
            material: "Cuero",
            stock: 15,
            imagen: "../img/faldaNegra6.jpg"
        },
        {
            id: 7,
            nombre: "Enterizo Beige Basico",
            precio: 135000,
            categoria: "Enterizos",
            talla: ["S", "M", "L","XL"],
            color: ["Beige"],
            descripcion: "No se decolora, no le salen motas, no hay transparencia",
            material: "Lino",
            stock: 30,
            imagen: "../img/enterizo7.jpg"
        },
        {
            id: 8,
            nombre: "Enterizo Negro Básico",
            precio: 140000,
            categoria: "Enterizos",
            talla: ["S", "M", "L","XL"],
            color: ["Negro"],
            descripcion: "Este enterizo combina estilo y comodidad en una sola pieza. Con un diseño moderno y corte favorecedor",
            material: "Algodón",
            stock: 10,
            imagen: "../img/enterizoNegro8.jpg"
        },
        {
            id: 9,
            nombre: "Jean",
            precio: 169000,
            categoria: "Jeans",
            talla: ["S", "M", "L","XL"],
            color: ["Azul claro"],
            descripcion: "Fit straight, tiro medio con estética básica 5 bolsillos, detalle de garra y botón contramarcadas,lavandería con efecto raid wash, bigotes y sandblast para un desgaste más natural",
            material: "Algodón",
            stock: 40,
            imagen: "../img/pantalon9.jpg"
        },
        {
            id: 10,
            nombre: "Jean",
            precio: 189000,
            categoria: "Jeans",
            talla: ["S", "M", "L","XL"],
            color: ["Azul oscuro"],
            descripcion: "Jean carpintero azul oscuro. Fit regular, bolsillo carpintero en posterior con detalle de conejo bordado sobre este bolsillo, trabilla en posterior y garra contramarcada,lavandería con Raid Wash, realce en costuras y Dirty",
            material: "Algodón",
            stock: 50,
            imagen: "../img/pantalon10.jpg"
        },
        {
            id: 11,
            nombre: "Jean & Short azul claro",
            precio: 189000,
            categoria: "Jeans",
            talla: ["S", "M", "L","XL"],
            color: ["Azul oscuro"],
            descripcion: "Fit regular, bolsillos cargo en los costados,pestaña a la altura del muslo con cierres desprendibles para que se transforme en short, lavandería raid wash azul clara con realce en costuras para efecto sal y pimienta",
            material: "Algodón",
            stock: 25,
            imagen: "../img/pantalon11.jpg"
        },
        {
            id: 12,
            nombre: "Camiseta Deportiva",
            precio: 99000,
            categoria: "Camisetas",
            talla: ["S", "M", "L", "XL"],
            color: ["Negro", "Gris"],
            descripcion: "Camiseta de alto rendimiento, transpirable y ligera, perfecta para entrenamientos intensivos.",
            material: "Poliéster",
            stock: 75,
            imagen: "../img/camiseta12.jpg"
        },
        {
            id: 13,
            nombre: "Camiseta Estampada",
            precio: 75000,
            categoria: "Camisetas",
            talla: ["S", "M", "L", "XL"],
            color: ["Blanco", "Negro"],
            descripcion: "Camiseta de algodón con estampado gráfico en el frente, perfecta para un look casual y moderno.",
            material: "Algodón",
            stock: 110,
            imagen: "../img/camiseta13.jpg"
        },
        {
            id: 14,
            nombre: "Camiseta Oversize",
            precio: 89000,
            categoria: "Camisetas",
            talla: ["M", "L", "XL", "XXL"],
            color: ["Verde", "Gris"],
            descripcion: "Camiseta de corte oversize con cuello redondo, perfecta para un estilo relajado y cómodo.",
            material: "Algodón",
            stock: 95,
            imagen: "../img/camiseta14.jpg"
        },
        {
            id: 15,
            nombre: "Vestido de Noche",
            precio: 250000,
            categoria: "Vestidos",
            talla: ["S", "M", "L"],
            color: ["Rojo", "Negro"],
            descripcion: "Vestido largo de noche con escote en V y detalle de lentejuelas.",
            material: "Seda",
            stock: 25,
            imagen: "../img/vestido15.jpg"
        },
        {
            id: 16,
            nombre: "Vestido Maxi Bohemio",
            precio: 180000,
            categoria: "Vestidos",
            talla: ["S", "M", "L", "XL"],
            color: ["Beige", "Verde Oliva"],
            descripcion: "Vestido largo con diseño bohemio, escote cruzado y falda con vuelo, perfecto para eventos al aire libre.",
            material: "Viscosa",
            stock: 35,
            imagen: "../img/vestido16.jpg"
        },
        {
            id: 17,
            nombre: "Vestido Corto Estampado",
            precio: 135000,
            categoria: "Vestidos",
            talla: ["S", "M", "L"],
            color: ["Azul", "Blanco"],
            descripcion: "Vestido corto con estampado floral y tirantes ajustables, ideal para el verano.",
            material: "Algodón",
            stock: 45,
            imagen: "../img/vestido17.jpg"
        },
        {
            id: 18,
            nombre: "Botines de Cuero",
            precio: 220000,
            categoria: "Calzado",
            talla: ["38", "39", "40", "41", "42"],
            color: ["Negro", "Marrón"],
            descripcion: "Botines de cuero con suela de goma y cierre lateral, ideales para el día a día.",
            material: "Cuero",
            stock: 35,
            imagen: "../img/calzado18.jpg"
        },
        {
            id: 19,
            nombre: "Zapatillas Deportivas",
            precio: 190000,
            categoria: "Calzado",
            talla: ["38", "39", "40", "41", "42", "43"],
            color: ["Blanco", "Negro"],
            descripcion: "Zapatillas deportivas ligeras y transpirables con suela de goma antideslizante, perfectas para correr.",
            material: "Poliéster",
            stock: 60,
            imagen: "../img/zapatillas19.jpg"
        },
        {
            id: 20,
            nombre: "Mocasines de Cuero",
            precio: 220000,
            categoria: "Calzado",
            talla: ["39", "40", "41", "42", "43", "44"],
            color: ["Marrón", "Negro"],
            descripcion: "Mocasines de cuero suave con detalle de costura y suela de goma, ideales para un look elegante y casual.",
            material: "Cuero",
            stock: 50,
            imagen: "../img/mocasines20.jpg"
        },
        {
            id: 21,
            nombre: "Camisa de Rayas",
            precio: 135000,
            categoria: "Camisas",
            talla: ["S", "M", "L", "XL"],
            color: ["Blanco/Azul"],
            descripcion: "Camisa de manga larga con diseño a rayas verticales, ideal para un look casual y elegante.",
            material: "Algodón",
            stock: 40,
            imagen: "../img/camisa21.jpg"
        },
        {
            id: 22,
            nombre: "Camisa Casual Denim",
            precio: 150000,
            categoria: "Camisas",
            talla: ["S", "M", "L", "XL"],
            color: ["Azul Claro"],
            descripcion: "Camisa de mezclilla de manga larga, perfecta para un estilo casual moderno.",
            material: "Denim",
            stock: 55,
            imagen: "../img/camisa22.jpg"
        },
        {
            id: 23,
            nombre: "Camisa de Lino",
            precio: 160000,
            categoria: "Camisas",
            talla: ["M", "L", "XL"],
            color: ["Blanco", "Beige"],
            descripcion: "Camisa de lino de manga larga con un corte clásico, perfecta para climas cálidos.",
            material: "Lino",
            stock: 35,
            imagen: "../img/camisa23.jpg"
        },
        {
            id: 24,
            nombre: "Camisa Oxford",
            precio: 145000,
            categoria: "Camisas",
            talla: ["S", "M", "L", "XL"],
            color: ["Gris", "Blanco"],
            descripcion: "Camisa de estilo Oxford con bolsillo en el pecho, ideal para un look formal o casual.",
            material: "Algodón",
            stock: 60,
            imagen: "../img/camisa24.jpg"
        },
        {
            id: 25,
            nombre: "Camisa Estampada Tropical",
            precio: 125000,
            categoria: "Camisas",
            talla: ["S", "M", "L", "XL"],
            color: ["Verde", "Amarillo"],
            descripcion: "Camisa de manga corta con estampado tropical, ideal para vacaciones o días soleados.",
            material: "Poliéster",
            stock: 50,
            imagen: "../img/camisa25.jpg"
        },
        {
            id: 26,
            nombre: "Zapatillas de Cuero",
            precio: 240000,
            categoria: "Calzado",
            talla: ["39", "40", "41", "42", "43"],
            color: ["Blanco", "Marrón"],
            descripcion: "Zapatillas de cuero de estilo casual con suela de goma, ideales para el día a día.",
            material: "Cuero",
            stock: 45,
            imagen: "../img/zapatillas26.jpg"
        },
        {
            id: 27,
            nombre: "Botas Altas de Gamuza",
            precio: 320000,
            categoria: "Calzado",
            talla: ["37", "38", "39", "40", "41"],
            color: ["Marrón", "Negro"],
            descripcion: "Botas altas de gamuza con cierre lateral y tacón bajo, ideales para un look elegante.",
            material: "Gamuza",
            stock: 25,
            imagen: "../img/botas27.jpg"
        },
        {
            id: 28,
            nombre: "Zapatos Formales",
            precio: 280000,
            categoria: "Calzado",
            talla: ["40", "41", "42", "43", "44"],
            color: ["Negro", "Café"],
            descripcion: "Zapatos formales de cuero con cordones, ideales para trajes y eventos formales.",
            material: "Cuero",
            stock: 30,
            imagen: "../img/zapatos28.jpg"
        },
        {
            id: 29,
            nombre: "Zapatillas Running",
            precio: 180000,
            categoria: "Calzado",
            talla: ["38", "39", "40", "41", "42"],
            color: ["Gris", "Azul"],
            descripcion: "Zapatillas deportivas diseñadas para running, con amortiguación y soporte para el pie.",
            material: "Poliéster",
            stock: 70,
            imagen: "../img/zapatillas29.jpg"
        },
        {
            id: 30,
            nombre: "Alpargatas",
            precio: 75000,
            categoria: "Calzado",
            talla: ["38", "39", "40", "41"],
            color: ["Beige", "Negro"],
            descripcion: "Alpargatas cómodas y ligeras de estilo casual, ideales para climas cálidos.",
            material: "Lona",
            stock: 80,
            imagen: "../img/calzado30.jpg"
        },
        {
            id: 31,
            nombre: "Falda de Cuero",
            precio: 145000,
            categoria: "Faldas",
            talla: ["S", "M", "L"],
            color: ["Negro"],
            descripcion: "Falda corta de cuero sintético con detalle de cremallera lateral, ideal para un look atrevido.",
            material: "Cuero",
            stock: 40,
            imagen: "../img/falda31.jpg"
        },
        {
            id: 32,
            nombre: "Falda Plisada",
            precio: 125000,
            categoria: "Faldas",
            talla: ["S", "M", "L"],
            color: ["Rosa", "Verde Oliva"],
            descripcion: "Falda midi plisada de tela ligera, ideal para ocasiones formales o casuales.",
            material: "Poliéster",
            stock: 60,
            imagen: "../img/falda32.jpg"
        },
        {
            id: 33,
            nombre: "Falda Lápiz",
            precio: 135000,
            categoria: "Faldas",
            talla: ["S", "M", "L", "XL"],
            color: ["Negro", "Gris"],
            descripcion: "Falda lápiz de corte ajustado, ideal para el trabajo o eventos formales.",
            material: "Algodón",
            stock: 50,
            imagen: "../img/falda33.jpg"
        },
        {
            id: 34,
            nombre: "Falda de Mezclilla",
            precio: 110000,
            categoria: "Faldas",
            talla: ["S", "M", "L"],
            color: ["Azul"],
            descripcion: "Falda corta de mezclilla con detalle de botones en el frente, perfecta para un look casual.",
            material: "Denim",
            stock: 75,
            imagen: "../img/falda34.jpg"
        },
        {
            id: 35,
            nombre: "Falda Asimétrica",
            precio: 140000,
            categoria: "Faldas",
            talla: ["S", "M", "L"],
            color: ["Negro", "Rojo"],
            descripcion: "Falda midi asimétrica con detalle de volantes, ideal para un look moderno y atrevido.",
            material: "Poliéster",
            stock: 55,
            imagen: "../img/falda35.jpg"
        },
        {
            id: 36,
            nombre: "Jeans Skinny Fit",
            precio: 160000,
            categoria: "Jeans",
            talla: ["28", "30", "32", "34", "36"],
            color: ["Azul Oscuro", "Negro"],
            descripcion: "Jeans de corte skinny fit con diseño ajustado y moderno, ideales para un look casual.",
            material: "Algodón",
            stock: 70,
            imagen: "../img/jean36.jpg"
        },
        {
            id: 37,
            nombre: "Jeans Rectos",
            precio: 145000,
            categoria: "Jeans",
            talla: ["28", "30", "32", "34", "36"],
            color: ["Azul Claro", "Azul Oscuro"],
            descripcion: "Jeans de corte recto clásico con cinco bolsillos, perfectos para un estilo atemporal.",
            material: "Denim",
            stock: 60,
            imagen: "../img/jean37.jpg"
        },
        {
            id: 38,
            nombre: "Jeans Mom Fit",
            precio: 155000,
            categoria: "Jeans",
            talla: ["26", "28", "30", "32", "34"],
            color: ["Azul Claro", "Negro"],
            descripcion: "Jeans de corte mom fit de tiro alto, ideales para un look vintage y cómodo.",
            material: "Algodón",
            stock: 65,
            imagen: "../img/jean38.jpg"
        },
        {
            id: 39,
            nombre: "Jeans Boyfriend",
            precio: 170000,
            categoria: "Jeans",
            talla: ["28", "30", "32", "34"],
            color: ["Azul Medio"],
            descripcion: "Jeans de estilo boyfriend con corte suelto y relajado, ideales para un look casual y moderno.",
            material: "Denim",
            stock: 50,
            imagen: "../img/jean39.jpg"
        },
        {
            id: 40,
            nombre: "Jeans Desgastados",
            precio: 165000,
            categoria: "Jeans",
            talla: ["28", "30", "32", "34", "36"],
            color: ["Azul Medio"],
            descripcion: "Jeans con efecto desgastado y roturas, perfectos para un look rebelde y moderno.",
            material: "Algodón",
            stock: 55,
            imagen: "../img/jean40.jpg"
        }

    ];
    guardarDatos(KEY_PRODUCTOS, productos);
}

function iniciarCompra() {
    const nombre = document.getElementById("nombre").value;
    const presupuesto = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const direccion = document.getElementById("direccion").value;
    const tipoEntrega = document.querySelector('input[name="tipoEntrega"]:checked')?.value;

    const formulario = document.getElementById('formulario');
    if (formulario.checkValidity()) {
        const datosCompra = {
            nombre,
            presupuesto: parseFloat(presupuesto),
            cantidad: parseInt(cantidad),
            direccion,
            tipoEntrega
        };
        guardarDatos(KEY_COMPRA, datosCompra);
        window.location.href = 'ListaProductos.html';
    }
    formulario.reportValidity(); 
    return;
}

function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("direccion").value = "";
    document.getElementsByName("tipoEntrega").forEach(input => input.checked = false);
}

// Función mostrar Productos
function mostrarProductos(productosMostrar = productos) { 
    const contenedorProductos = document.querySelector(".contenedorDeProductos");

    if (!contenedorProductos) {
        console.error("El contenedor de productos no se encontró.");
        return;
    }

    if (!productosMostrar || productosMostrar.length === 0) {
        console.error("No se encontraron productos.");
        contenedorProductos.innerHTML = "<p>No se encontraron productos.</p>";
        return;
    }

    contenedorProductos.innerHTML = ""; // Limpiamos el contenedor antes de mostrar

    productosMostrar.forEach(producto => {
        const productoElement = document.createElement("div");
        productoElement.classList.add("productos");
        productoElement.setAttribute("data-id", producto.id);

        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="info">
                <div>
                    <p>${producto.nombre}</p>
                    <p>$${producto.precio.toLocaleString()}</p>
                    <p>Stock: ${producto.stock}</p>
                </div>
                <figure>
                    <img src="../img/carrito.png" alt="carroCompras">
                </figure>              
            </div>
        `;

        contenedorProductos.appendChild(productoElement);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    mostrarProductos();
});

//Función mostrar detalle 
function mostrarDetalleProducto(producto) {
    const detalleProducto = document.querySelector(".detalleProducto");

    document.querySelector(".imgProducto").src = producto.imagen;
    document.querySelector(".nombreProducto").innerText = producto.nombre;
    document.querySelector(".precioProducto").innerText = `Precio: $${producto.precio}`;
    document.querySelector(".categoriaProducto").innerText = `Categoría: ${producto.categoria}`;
    document.querySelector(".tallaProducto").innerText = `Tallas: ${producto.talla.join(", ")}`;
    document.querySelector(".colorProducto").innerText = `Color: ${producto.color}`;
    document.querySelector(".descripcionProducto").innerText = `Descripción: ${producto.descripcion}`;
    document.querySelector(".materialProducto").innerText = `Material: ${producto.material}`;
    document.querySelector(".stockProducto").innerText = `Stock: ${producto.stock}`;

    detalleProducto.style.display = "block";

    document.getElementById("agregarProducto").onclick = function () {
        agregarAlCarrito(producto);
    };
}

//Busca en que lugar del contenedor del producto se dio click exactamente y trae ese producto
document.addEventListener("DOMContentLoaded", function() {
    const contenedorProductos = document.querySelector(".contenedorDeProductos"); 

    if (!contenedorProductos) {
        console.error("El contenedor de productos no se encontró.");
        return;
    }

    // const productos = cargarProductos();
    mostrarProductos(productos);

    contenedorProductos.addEventListener("click", function (event) {
        const productoElement = event.target.closest(".productos");
        if (productoElement) {
            const productoId = parseInt(productoElement.getAttribute("data-id"));
            const productoSeleccionado = productos.find(p => p.id === productoId);
            if (productoSeleccionado) {
                mostrarDetalleProducto(productoSeleccionado);
            }
        }
    });
});

//Aquí es para darle la funcionalidad de ue cuando presionen la imagen se cierre el datelle del producto
const closeBtn = document.getElementById("close-btn");
const detalleProducto = document.querySelector(".detalleProducto");

if (closeBtn && detalleProducto) {
    closeBtn.addEventListener("click", function () {
        detalleProducto.style.display = "none";
    });
}

function limpiaCantidad() {
    document.getElementById("cantidad").value = ""; 
}

function cargarProductos() {
    return obtenerDatos(KEY_PRODUCTOS) || [];
}


const categoriaSelect = document.getElementById("categoria");
const materialInput = document.getElementById("material");
let productos = cargarProductos(); // Asegúrate de que productos esté definido globalmente.


function filtrar() {
    const categoria = categoriaSelect.value.toLowerCase();
    const material = materialInput.value.trim().toLowerCase();

    // Filtrar productos usando los valores de categoría y material
    const productosFiltrados = productos.filter((producto) => {
        const coincideCategoria = categoria === "todos" || producto.categoria.toLowerCase() === categoria;
        const coincideMaterial = !material || producto.material.toLowerCase().includes(material);
        return coincideCategoria && coincideMaterial;
    });

    mostrarProductos(productosFiltrados); // Mostrar solo los productos filtrados
}


function limpiarFiltro() {
    categoriaSelect.value = "todos";
    materialInput.value = "";
    mostrarProductos(); // Llamar a mostrarProductos sin parámetros muestra todos los productos
}


document.addEventListener("DOMContentLoaded", function() {
    // Obtener los botones por ID
    const botonFiltrar = document.getElementById("filtrar");
    const botonLimpiarFiltro = document.getElementById("limpiarFiltro");

    // Asegurarse de que los elementos existen antes de asignarles un evento
    if (botonFiltrar) {
        botonFiltrar.addEventListener("click", filtrar);
    }

    if (botonLimpiarFiltro) {
        botonLimpiarFiltro.addEventListener("click", limpiarFiltro);
    }

    // Mostrar productos al cargar la página
    mostrarProductos();
});


//VISTA DE CARRITO. 

function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    return carrito;
}

function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(producto) {
    const cantidadInput = document.getElementById("cantidad").value;
    const cantidad = parseInt(cantidadInput);

    if (!cantidad || cantidad < 1) {
        alert("Por favor, ingresa una cantidad válida.");
        return;
    }
    const carrito =cargarCarrito();

    const productoEnCarrito = carrito.find(item => item.id === producto.id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad });
    }

    guardarCarrito(carrito);
    alert("Producto agregado al carrito.");
}


function mostrarCarrito() {
    const carrito = cargarCarrito();  
    const tbodyCarrito = document.getElementById("tbodyCarrito");
    const costoDomicilio = 15000;

    if (!tbodyCarrito) {
        console.log("Elemento tbodyCarrito no encontrado");
        return;
    }

    tbodyCarrito.innerHTML = ""; 

    if (carrito.length === 0) {
        const filaVacia = document.createElement("tr");
        filaVacia.innerHTML = "<td colspan='6'>El carrito está vacío.</td>";
        tbodyCarrito.appendChild(filaVacia);
        return;
    }

    let totalCompra = 0;
    carrito.forEach(producto => {
        const totalProducto = producto.precio * producto.cantidad;
        totalCompra += totalProducto;
        
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td class="nombre">${producto.nombre}</td>
            <td class="img"><img src="${producto.imagen}" alt="${producto.nombre}" style="width: 50px; height: auto;"></td>
            <td class="precio">$${producto.precio.toLocaleString()}</td>
            <td class="cantidad">${producto.cantidad}</td>
            <td class="total">$${totalProducto.toLocaleString()}</td>
            <td class="accion"><button onclick="eliminar(${producto.id})" type="button">Eliminar</button></td>
        `;
        tbodyCarrito.appendChild(fila);
    });

    // Mostrar el total de la compra y el costo del domicilio
    const filaTotal = document.createElement("tr");
    filaTotal.innerHTML = `
        <td colspan="4">Costo total de los productos</td>
        <td colspan="2">$${totalCompra.toLocaleString()}</td>
    `;
    tbodyCarrito.appendChild(filaTotal);

    const filaDomicilio = document.createElement("tr");
    filaDomicilio.innerHTML = `
        <td colspan="4">Costo del domicilio</td>
        <td colspan="2">$${costoDomicilio.toLocaleString()}</td>
    `;
    tbodyCarrito.appendChild(filaDomicilio);

    const filaTotalFinal = document.createElement("tr");
    filaTotalFinal.innerHTML = `
        <td colspan="4"><strong>Total de la compra</strong></td>
        <td colspan="2"><strong>$${(totalCompra + costoDomicilio).toLocaleString()}</strong></td>
    `;
    tbodyCarrito.appendChild(filaTotalFinal);
}


function completarCompra() {
    const carrito = cargarCarrito();
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }
    
    guardarCarrito(carrito);
    window.location.href = 'CarritoCompras.html';
    // mostrarCarrito();
}

function eliminar(id) {
    let carrito = cargarCarrito();
    carrito = carrito.filter(producto => producto.id !== id);
    guardarCarrito(carrito);
    mostrarCarrito();
}

// Ejecuta mostrarCarrito cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", mostrarCarrito);


let compraEnProgreso = false;

function validarCompra() {
    const carrito = cargarCarrito();
    const totalProductos = carrito.reduce((sum, producto) => sum + producto.cantidad, 0);
    const totalCompra = carrito.reduce((sum, producto) => sum + (producto.precio * producto.cantidad), 0) + 15000; // Incluye el costo del domicilio

    const presupuesto = obtenerDatos(KEY_COMPRA).presupuesto; // Asumiendo que ya tienes un presupuesto almacenado

    return new Promise((resolve, reject) => {
        const tiempoProcesamiento = Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000;

        setTimeout(() => {
            if (totalProductos > 20) {
                reject("No puedes comprar más de 20 productos.");
            } else if (totalCompra > presupuesto) {
                reject("El costo total excede tu presupuesto.");
            } else {
                resolve("Compra validada correctamente.");
            }
        }, tiempoProcesamiento);
    });
}

function confirmarCompra() {
    if (compraEnProgreso) {
        alert("Ya hay una compra en progreso, por favor espera.");
        return;
    }

    compraEnProgreso = true;  // Activamos el estado de compra en progreso
    const botonConfirmar = document.querySelector("button[type='button'][onclick='confirmarCompra()']");
    botonConfirmar.disabled = true;  // Deshabilitar el botón de compra

    validarCompra().then(mensaje => {
        alert(mensaje);
        compraEnProgreso = false;  // Reiniciar el estado de compra
        window.location.href = 'Index.html'; // Redirigir a la página inicial
    }).catch(error => {
        alert(`Error: ${error}`);
        compraEnProgreso = false;  // Reiniciar el estado de compra si hay un error
        botonConfirmar.disabled = false;  // Rehabilitar el botón si hay un error
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los botones excepto el botón de confirmar compra
    const botones = document.querySelectorAll("button:not([onclick='confirmarCompra()'])");

    botones.forEach(boton => {
        boton.addEventListener("click", function(event) {
            if (compraEnProgreso) {
                event.preventDefault();  // Evitamos que el botón haga su acción
            }
        });
    });
});

function cancelarCompra() {
    if (compraEnProgreso) {
        alert("Ya hay una compra en progreso, por favor espera.");
        return;
    }

    localStorage.removeItem("carrito");
    window.location.href = 'Index.html';
}

function seguirComprando() {
    if (compraEnProgreso) {
        alert("Ya hay una compra en progreso, por favor espera.");
        return;
    }

    window.location.href = 'ListaProductos.html';
}

function limpiarFormulario() {
    if (compraEnProgreso) {
        alert("Ya hay una compra en progreso, por favor espera.");
        return;
    }
    document.getElementById("formTarjeta").reset();
}