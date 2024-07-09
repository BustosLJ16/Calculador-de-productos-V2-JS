// Función para ingresar Nombre del Usuario y ejecutar en caso que sea distinto a "ESC"
let nombreUsuario; // Declaro variable global
function ingresoNombreUsuario() {
    nombreUsuario = prompt("Por favor, Ingrese su Nombre aqui: - (ESC) para salir");

    if (nombreUsuario.toUpperCase() !== "ESC") {
        ejecutarPrograma();
    } else {
        alert("Decidiste salir. ¡Nos vemos pronto!");
    }
}

// Declaro una función para la ejecucion del programa
function ejecutarPrograma() {

    // Declaro Array principal con lista de productos
    const listaProductos = [{
            id: 1,
            nombre: "Auriculares Redragon H120",
            precio: 19500
        },
        {
            id: 2,
            nombre: "Teclado Kumara Redragon K552",
            precio: 45000
        },
        {
            id: 3,
            nombre: "Mouse Redragon Centrophorus M601",
            precio: 17700
        },
        {
            id: 4,
            nombre: "Webcam Logitech C925E",
            precio: 23450
        },
        {
            id: 5,
            nombre: "Monitor LG 24''",
            precio: 153900
        }
    ];


    // Constructor y Métodos para el procesamiento de los productos
    class productos {
        constructor(productos) {
            this.items = productos;
        }

        agregarProd(nombre, precio) {
            const producto = {
                id: this.darId(),
                nombre: nombreProd,
                precio: precioProd
            }; // Creación del nuevo producto como un objeto
            this.items.push(producto); // Agregar el nuevo Producto a mi Array de Productos
            alert(nombreUsuario + " Tu producto fue agregado con exito");
        }

        obtenerProd() {
            return this.items;
        }

        mostrarProd() {
            let salida = "";

            for (const producto of this.items) {
                salida += `Prod: #${producto.id} - ${producto.nombre} - ${producto.precio} \n`;
            }

            alert(salida);
        }

        darId() { // Le doy un ID al nuevo Producto Ingresado en base al último producto registrado
            let max = 0;

            this.items.forEach(prod => {
                if (prod.id > max) {
                    max = prod.id
                }
            });

            return max + 1;
        }

        borrarProd(id) {
            this.items = this.items.filter(item => item.id != id);

            console.log("Se eliminó el producto número #" + id)
        }


    }

    // Crear nueva instancia de productos
    const catalogo = new productos(listaProductos);

    // Ver mi lista de productos
    console.log(catalogo.obtenerProd());

    // Preguntar si quiere Agregar un Producto del array
    let productoNuevo = parseFloat(prompt(nombreUsuario + " ¿Usted desea agregar un nuevo producto?\n1-SI\n2-NO"));
    let nombreProd;
    let precioProd;

    //Procesamiento de la respuesta 
    if (productoNuevo === 1) {
        // Ingreso de datos del Producto
        nombreProd = prompt(nombreUsuario + " Ingrese aqui el Nombre del Producto");
        precioProd = parseFloat(prompt(nombreUsuario + " Ingrese aqui el Precio del Producto"));
        catalogo.agregarProd(nombreProd, precioProd);
    } else {
        alert("Usted decidio no agregar nada. La lista quedo de la siguiente forma:");
    }

    // Ver la lista de Productos
    catalogo.mostrarProd();

    // Preguntar si quiere eliminar un producto del array
    let eliminarProd = parseFloat(prompt(nombreUsuario + " ¿Desea eliminar un producto?\n1-SI\n2-NO"));
    let eliminarProdId;

    // Procesamiento y eliminación del Producto
    if (eliminarProd === 1) {
        eliminarProdId = parseFloat(prompt("Indique el Número del Producto"));
        catalogo.borrarProd(eliminarProdId);
        alert("Se eliminó el producto #" + eliminarProdId); // Confirmar Eliminación de un producto
        alert("Esta es la nueva lista de Productos:")
    } else {
        alert("No eliminaste ningún Producto.\n La lista quedo de la siguiente forma:");
    }
    catalogo.mostrarProd(); // Muesto lista final

    // Calculadora del valor Final

    function calcularValorProductos() {
        let total = 0;

        let calcularProductos = parseFloat(prompt(nombreUsuario + " ¿Deseas Calcular el valor final de tu compra?\n1-SI\n2-NO"));

        if (calcularProductos === 1) {
            let prodNumeroUno = parseFloat(prompt("Ingresa el ID del Producto seleccionado #1")); // Ingreso del ID #1
            let prodNumeroDos = parseFloat(prompt("Ingresa el ID del Producto seleccionado #2")); // Ingreso del ID #2

            // Buscar y comparar el ID del producto con los de mi Array, obtener el precio del producto y sumarlos
            for (let i = 0; i < listaProductos.length; i++) {
                if (listaProductos[i].id === prodNumeroUno || listaProductos[i].id === prodNumeroDos) {
                    total += listaProductos[i].precio
                }
            }

            alert(nombreUsuario + " El valor total de tu compra es: $" + total);
            alert(nombreUsuario + " Gracias por usar nuestro programa :)");

        } else {
            alert(nombreUsuario + " Decidiste no calcular el valor final. Nos Vemos Luego!");
        }
    }
    calcularValorProductos();
}
ingresoNombreUsuario();