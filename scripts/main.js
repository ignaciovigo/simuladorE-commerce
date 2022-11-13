import { Carrito } from "./Carrito.js";
// --------------------Funciones------------------------
function pintarSiTotalVacio() {
  // se encarga de pintar el carrito vacio, si el mismo no contiene ningun producto.
  if (carrito1.getTotal == 0) {
    $pedido.innerHTML = `
    <div class="card bg-negroOscuro p-4 animate__animated animate__fadeIn">
      <img src="./img/index.svg" class="card-img" alt="foto que indica que el pedido esta vacio">
      <div class="card-img-overlay d-flex justify-content-center align-items-center">
        <p class="fs-5 ff-first text-crema m-0 text-center">Su pedido se encuentra vacio</p>
      </div>
    </div>`;
    $carMobile.innerHTML = document.querySelector("#columna_3 .card").innerHTML;
    document.querySelectorAll(`[data-btn|="pagar"]`).forEach((e) => e.setAttribute("disabled", true));
    return `$${0}`;
  } else {
    document.querySelectorAll(`[data-btn|="pagar"]`).forEach((e) => e.removeAttribute("disabled"));
    return `$${carrito1.getTotal}`;
  }
}

function modificarTemplate(templateProductos, pdcto) {
  //recibe el contenido templateProductos y un objeto producto, modifica el template asignando valores con los disintos atributos del objeto.
  templateProductos.querySelector("img").setAttribute("src", pdcto.imagen);
  templateProductos.querySelector("h5").textContent = pdcto.nombre;
  templateProductos.querySelectorAll("p")[0].textContent = pdcto.descripcion;
  templateProductos.querySelectorAll("p")[1].textContent = `$${pdcto.precio}`;
  templateProductos.querySelector(".botonAddPedido").setAttribute("data-btn", `${pdcto.id}`);
}

function evalNum(valor_input) {
  //evalua que el argumento que recibe sean solo numeros entre 1 y 99 enteros.
  if (/^[1-9]([0-9]+)?$/gm.test(valor_input)) {
    valor_input = Math.ceil(valor_input);
    if (valor_input <= 99) return valor_input;
    if (valor_input > 99) return (valor_input = 99);
  } else {
    return (valor_input = 1);
  }
}

function validarEmail(email) {
  //recibe un email, retorna true o false si hay coincidencia con el patron establecido.
  return /^[.a-zA-Z0-9_-]+@(hotmail|yahoo|gmail|outlook)\.(?:com|cl|net|es|com)(\.ar|\.mx|\.us|\.co|\.cr|\.pe|\.uy|\.ve|\.ec|\.cl|\.bo|\.br)?$/gim.test(email) ? true : false;
}

function mostrarComentarioEmail(input) {
  //recibe un elemento input, informa al usuario el correcto ingreso del email.
  const $textoAyuda = input.parentNode.lastElementChild;
  if (validarEmail(input.value)) {
    if (usuarios.some((e) => e.email === input.value)) {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      $textoAyuda.className = "invalid-feedback";
      $textoAyuda.textContent = "El email ingresado ya se encuentra registrado.";
      camposRegistro.email = false;
    } else {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      camposRegistro.email = true;
    }
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    $textoAyuda.className = "invalid-feedback";
    $textoAyuda.textContent = "Debe ingresar un email valido.";
    camposRegistro.email = false;
  }
}

function validarNuevaPass(nueva_contraseña) {
  //recibe una contraseña, retorna true o flase si hay coincidencia con el patron establecido.
  return /^[a-zA-Z0-9]{8,20}$/.test(nueva_contraseña);
}

function mostrarComentarioNuevaPass(input) {
  //recibe un elemento input, informa al usuario sobre como debe ser la creacion de una nueva contraseña.
  if (validarNuevaPass(input.value)) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    let $textoAyuda = input.parentNode.lastElementChild;
    $textoAyuda.className = "invalid-feedback";
    if (input.value.length < 8) $textoAyuda.textContent = "La contraseña no debe contener menos de 8 caracteres.";
    if (input.value.length > 20) $textoAyuda.textContent = "La contraseña no debe contener mas de 20 caracteres.";
    if (input.value.length == "") $textoAyuda.textContent = "No ha ingresado ninguna contraseña";
    if (/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gm.test(input.value) || /[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]/gm.test(input.value)) $textoAyuda.textContent = "La contraseña no debe contener caracteres especiales ni espacios.";
  }
}
function mostrarVerificarPass() {
  //renderiza comentarios de acuerdo si los campos de registro de contraseña coinciden o no
  const pwd1 = document.querySelector(`[data-pass|="nuevaPass"]`),
    pwd2 = document.querySelector(`[data-pass|="repetirPass"]`);
  if (pwd1.value === pwd2.value) {
    pwd2.value === "" ? pwd2.classList.remove("is-valid") : pwd2.classList.add("is-valid");
    pwd2.classList.remove("is-invalid");
    camposRegistro.pwd = true;
  } else {
    pwd2.classList.remove("is-valid");
    pwd2.classList.add("is-invalid");
    let $textoAyuda = pwd2.parentNode.lastElementChild;
    $textoAyuda.className = "invalid-feedback";
    $textoAyuda.textContent = "Las contraseñas no coinciden";
    camposRegistro.pwd = false;
  }
}

// -----variables----
const carrito1 = new Carrito(),
  d = document,
  usuarios = JSON.parse(sessionStorage.getItem("usuarios")) || [],
  usuario = JSON.parse(sessionStorage.getItem("usuario")) || { email: "" }, 
  camposRegistro = { email: false, pwd: false },
  $pedido = d.getElementById("carritoCard"), //
  $total = d.querySelector(".total"),
  $carMobile = d.querySelector("#carritoMobile"), //carrito mobile (carrito del DOM) representa un modal que aparece a partir de pantallas medianas para abajo.  
  $formularioRegistro = d.getElementById("formularioRegistro"),
  $formularioIniciarSession = d.getElementById("formularioIniciarSession"),
  $formularioEntrega = d.getElementById("formEntrega");

if (usuario.email !== "") {
  d.getElementById("nombreUsuario").textContent = usuario.email;
  d.getElementById("botonesLogOut").classList.replace("d-block", "d-none");
  d.getElementById("botonesLoggin").classList.replace("d-none", "d-block");
}
carrito1.productos = JSON.parse(localStorage.getItem("productos")) || [];
if (carrito1.cantidadPedidos != 0) {
  //traigo si existe el carrito en el storage y lo pinto si no esta vacio.
  $pedido.innerHTML = carrito1.mostrarCarritoHTML();
  $carMobile.innerHTML = d.querySelector("#columna_3 .card").innerHTML;
}
$total.textContent = pintarSiTotalVacio();

//renderizado de productos utilizando template y fragmentos
const $contenedorHamburguesas = d.getElementById("hamburguesas"),
  $contenedorExtras = d.getElementById("extras"),
  $contenedorBebidas = d.getElementById("bebidas"),
  $templateProductos = d.getElementById("templateProductos").content,
  $fragmentoHamburguesas = d.createDocumentFragment(),
  $fragmentoExtras = d.createDocumentFragment(),
  $fragmentoBebidas = d.createDocumentFragment();

async function renderizarDatos() {
  //traigo los datos del json local de manera asincrona con el metodo fetch
  try {
    let respuesta = await fetch("./productos.json");
    let datos = await respuesta.json();

    const productos = [...datos.hamburguesas, ...datos.extras, ...datos.bebidas];

    productos.forEach((pdcto) => {
      if (pdcto.id < 200) {
        modificarTemplate($templateProductos, pdcto);
        const $templateHamburguesas = $templateProductos.cloneNode(true);
        $fragmentoHamburguesas.appendChild($templateHamburguesas);
      }
      if (pdcto.id > 200 && pdcto.id < 300) {
        modificarTemplate($templateProductos, pdcto);
        const $templateExtras = $templateProductos.cloneNode(true);
        $fragmentoExtras.appendChild($templateExtras);
      }
      if (pdcto.id > 300) {
        modificarTemplate($templateProductos, pdcto);
        const $templateBebidas = $templateProductos.cloneNode(true);
        $fragmentoBebidas.appendChild($templateBebidas);
      }
    });
    $contenedorHamburguesas.appendChild($fragmentoHamburguesas); //inserto las cards en el DOM
    $contenedorExtras.appendChild($fragmentoExtras);
    $contenedorBebidas.appendChild($fragmentoBebidas);
  } catch (error) {
    console.log("Ha ocurrido un error" + error.message);
  }
}
// --------------------Eventos-------------------------
d.addEventListener("DOMContentLoaded", (e) => {
  //evento que se dispara una vez cargado el html con los estilos e imagenes,luego obtiene los datos para renderizar las cards de los productos almacenados en el json.
  renderizarDatos();
});

d.addEventListener("keypress", async (e) => {
  if (e.target.matches("#buscador")) {
    if (e.key === "Enter") {
      //  consulta y pinta cards de los productos en el DOM si es que existen coicidencias entre el valor ingresado por el usuario en el input buscador de productos
      // y los datos recibidos del json. Las coincidencias se basan en el nombre del producto o su descripcion.
      try {
        const $mostrarBus = d.getElementById("mostrarBusqueda"),
          $fragBus = d.createDocumentFragment();
        $mostrarBus.classList.replace("d-none", "d-block");
        $mostrarBus.innerHTML = `<h3 class="ff-first fs-5 text-uppercase text-crema m-0 p-2">Busqueda</h3><div class="col bg-negroOscuro px-1 rounded text-center"><img src="./img/loader2.svg" alt="Cargando..."/></div>`;
        let query = e.target.value.toUpperCase().trim(),
          res = await fetch("./productos.json"),
          json = await res.json();
        const productos = [...json.hamburguesas, ...json.extras, ...json.bebidas];
        const filtrarItems = (item) => productos.filter((el) => el.nombre.indexOf(item) > -1 || el.descripcion.toUpperCase().indexOf(item) > -1);
        let arrFiltro = filtrarItems(query);
        if (!query || arrFiltro.length === 0) {
          $mostrarBus.classList.replace("d-block", "d-none");
          Swal.fire({
            toast: true,
            position: "top-right",
            iconColor: "white",
            icon: "info",
            title: `No se encontraron coincidencias`,
            background: "#3fc3ee",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
        } else {
          $mostrarBus.classList.replace("d-none", "d-block");
          $mostrarBus.innerHTML = `<h3 class="ff-first fs-5 text-uppercase text-crema m-0 p-2">coincidencias encontradas: ${arrFiltro.length}</h3>`;
          arrFiltro.forEach((pdcto) => {
            modificarTemplate($templateProductos, pdcto);
            const clone = $templateProductos.cloneNode(true);
            $fragBus.appendChild(clone);
          });
          $mostrarBus.appendChild($fragBus);
          window.scroll(0, 100);
        }
      } catch (error) {
        $mostrarBus.innerHTML = `<h3 class="ff-first fs-5 text-uppercase text-crema m-0 p-2">Busqueda</h3><div class="col bg-negroOscuro px-1 rounded text-center p-5"><p class="fs-5 text-naranja ff-first">Ocurrió un error al buscar productos.</p></div>`;
        console.log(error, error.message);
      }
    }
  }
});

// Evento input
d.addEventListener("input", (evento) => {
  // evento para cada campo tipo number de las cartas renderizadas
  if (evento.target.matches("#columna_2 input")) evento.target.value = evalNum(evento.target.value);
  // evento para los inputs de REGISTRO.
  if (evento.target.matches("#formularioRegistro input")) {
    if (evento.target.dataset.email === "nuevoEmail") mostrarComentarioEmail(evento.target);
    if (evento.target.dataset.pass == "nuevaPass") {
      mostrarComentarioNuevaPass(evento.target);
      mostrarVerificarPass();
    }
    if (evento.target.dataset.pass == "repetirPass") mostrarVerificarPass();
  }
});

// Evento click
d.addEventListener("click", (evento) => {
  if (evento.target.matches("#columna_2 .botonAddPedido")) { //evento para el boton añadir pedido de las cards productos.
    let $cantidadIngresada = evento.target.previousElementSibling.children[2].value;
    const producto = {
      id: Number(evento.target.dataset.btn),
      nombre: evento.target.parentElement.parentElement.firstElementChild.textContent,
      precio: Number(evento.target.parentElement.firstElementChild.innerText.substring(1)),
      cantidad: Number($cantidadIngresada),
    };
    carrito1.addPedido(producto); //funcion de la clase carrito necesita un obj producto como parametro para añadirlo al carrito.
    evento.target.previousElementSibling.children[2].value = 1; //resetea el valor del input number (card) al valor  1.
    $pedido.innerHTML = carrito1.mostrarCarritoHTML();
    $total.textContent = pintarSiTotalVacio();
    $carMobile.innerHTML = d.querySelector("#columna_3 .card").innerHTML;
    localStorage.setItem("productos", JSON.stringify(carrito1.productos));
    Swal.fire({
      toast: true,
      position: "top-right",
      iconColor: "white",
      icon: "success",
      title: `${producto.nombre}x${producto.cantidad} Añadido.`,
      background: "#a5dc86 ",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }
  if (evento.target.matches("#columna_2 .btn-sumar")) if (evento.target.previousElementSibling.value < 99) evento.target.previousElementSibling.value++; //evento para los botones (de las cards productos) sumar y restar cantidad  asociados al valor del input number.
  if (evento.target.matches("#columna_2 .btn-disminuir")) if (evento.target.nextElementSibling.value > 1) evento.target.nextElementSibling.value--;
  if (evento.target.matches("#carritoCard .btn-remover")) { //evento para el boton eliminar de los productos pintandos en el carrito
    carrito1.delPedido(evento.target.dataset.btn);
    $pedido.innerHTML = carrito1.mostrarCarritoHTML();
    $total.textContent = pintarSiTotalVacio();
    $carMobile.innerHTML = d.querySelector("#columna_3 .card").innerHTML;
    localStorage.setItem("productos", JSON.stringify(carrito1.productos));
  }
  if (evento.target.matches(".limpiar")) {
    carrito1.clearPedido();
    $total.textContent = pintarSiTotalVacio();
    $carMobile.innerHTML = d.querySelector("#columna_3 .card").innerHTML;
    localStorage.removeItem("productos");
    Swal.fire({
      toast: true,
      position: "top-right",
      iconColor: "white",
      icon: "info",
      title: `Se vació el pedido.`,
      background: "#3fc3ee",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  }
  if (evento.target.matches(".cerrar")) {
    $formularioIniciarSession.reset();
    $formularioRegistro.reset();
    $formularioEntrega.reset();
  }
  if (evento.target.matches("#cerrarSession")) {
    Swal.fire({
      position: "center",
      icon: "info",
      text: "Sesión cerrada.",
      color: "#d77a61",
      background: "#192a33",
      showConfirmButton: false,
      timer: 1500,
    });
    usuario.email = "";
    sessionStorage.setItem("usuario", JSON.stringify(usuario));
    d.getElementById("nombreUsuario").textContent = "usuario";
    d.getElementById("botonesLogOut").classList.replace("d-none", "d-block");
    d.getElementById("botonesLoggin").classList.replace("d-block", "d-none");
  }
});
// Evento para el formulario de registro
$formularioRegistro.addEventListener("submit", (evento) => {
  evento.preventDefault();
  if (camposRegistro.email && camposRegistro.pwd) {
    const $pwd1 = d.querySelector(`[data-pass|="nuevaPass"]`),
      $pwd2 = d.querySelector(`[data-pass|="repetirPass"]`),
      $email = d.querySelector(`[data-email|="nuevoEmail"]`);
    $pwd1.classList.remove("is-valid");
    $pwd2.classList.remove("is-valid");
    $email.classList.remove("is-valid");
    usuarios.push({ email: $email.value, pwd: $pwd1.value });
    sessionStorage.setItem("usuarios", JSON.stringify(usuarios));
    $('#modalUsuarioRegistro').modal('hide');
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se ha registrado con exito!",
      color: "#d77a61",
      background: "#192a33",
      showConfirmButton: false,
      timer: 1500,
    });
    $formularioRegistro.reset();
    camposRegistro.email = false;
    camposRegistro.pwd = false;
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      text: "Asegurese de haber completado bien los campos.",
      color: "#d77a61",
      background: "#192a33",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});

//evento submit para el formulario de iniciar sesion
$formularioIniciarSession.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const $email_ingresado = d.querySelector(`[data-email|="email"]`).value,
    $pass_ingresada = d.querySelector(`[data-pass|="pass"]`).value;
  if (usuarios.some((e) => e.email === $email_ingresado && e.pwd === $pass_ingresada)) {
   $('#modalIniciarSession').modal('hide')
    usuario.email = $email_ingresado;
    sessionStorage.setItem("usuario", JSON.stringify(usuario));
    d.getElementById("nombreUsuario").textContent = $email_ingresado;
    d.getElementById("botonesLogOut").classList.replace("d-block", "d-none");
    d.getElementById("botonesLoggin").classList.replace("d-none", "d-block");
    $formularioIniciarSession.reset();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Ha iniciado sessión con exito!",
      color: "#d77a61",
      background: "#192a33",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      text: "Los datos ingresados son incorrectos. Asegurese de completar bien los campos.",
      color: "#d77a61",
      background: "#192a33",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});
// Evento para el formulario de entrega (datos necesarios para reazliar el pago)
$formularioEntrega.addEventListener("submit", (e) => {
  e.preventDefault();
  const $direccion = d.getElementById("direccion");
  const $localidad = d.getElementById("localidad");
  const $piso = d.getElementById("piso");
  const $referencia = d.getElementById("referencia");
  if (!usuario.email) {
    Swal.fire({
      position: "center",
      icon: "error",
      text: "Debe iniciar sesión antes de realizar una compra.",
      color: "#d77a61",
      background: "#192a33",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    if (!$direccion || !$localidad) {
      Swal.fire({
        position: "center",
        icon: "error",
        text: "Asegurese de rellenar los campos importantes.",
        color: "#d77a61",
        background: "#192a33",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      let resumen = carrito1.String();
      let $botonConf = d.getElementById("btnEntregaConfirm");
      $botonConf.setAttribute("disabled", true);
      $botonConf.innerHTML = `<img src="./img/loader4.svg"/>`;
      $botonConf.classList.replace("bg-naranja", "bg-negro");
      let templateParams = {
        user_email: usuario.email,
        message: resumen,
        direccion: $direccion.value,
        localidad: $localidad.value,
        piso: $piso.value,
        referencia: $referencia.value,
        total: carrito1.getTotal,
      };
      emailjs.send("ticketVenta", "templateVenta", templateParams).then( 
        //metodo de email js que se conecta con un servicio de email para enviar emails desde el cliente una vez completado los parametros necesarios. retorna una promesa.
        (resp) => {
          $('#modalEntrega').modal('hide');
          console.log("succes", resp.status, resp.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Solo un paso más.",
            text: "Le hemos enviado un email con los detalles de su compra en donde podra consultar las formas de pago con la información proporcinada.",
            color: "#d77a61",
            background: "#192a33",
            showConfirmButton: false,
            timer: 10000,
          });
          $formularioEntrega.reset();
          $botonConf.removeAttribute("disabled");
          $botonConf.classList.replace("bg-negro", "bg-naranja");
          $botonConf.innerHTML = `<p class="text-blanco p-0 m-0">confirmar</p>`;
          carrito1.clearPedido();
          $total.textContent = pintarSiTotalVacio();
          $carMobile.innerHTML = d.querySelector("#columna_3 .card").innerHTML;
          localStorage.removeItem("productos");
        },
        (error) => {
          console.log("failed..", error);
        }
      );
    }
  }
});
