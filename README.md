[![](https://smashburger-ig.netlify.app/img/logo.png)](https://smashburger-ig.netlify.app/)
# Bienvenido al repositorio del proyecto SmashBurger!
## Introducción
El proyecto SmashBurger es una página web que simula un E-commerce de una hamburguesería, dando lugar, a que el usuario pueda interactuar añadiendo y eliminando los distintos productos que la página ofrece. Una vez escogidos los productos, el usuario deberá iniciar sesión para poder efectuar la compra, posteriormente, podrá presionar el botón pagar y completar el formulario de registro sin problemas. Dicho registro enviará un mail con la información del carrito a la dirección de correo con el que se registró el usuario anteriormente. La página también cuenta con un campo de búsqueda en donde el usuario podrá buscar algún producto en particular mediante un valor asignado por el mismo.

Dicha página está diseñada y desarrollada con las siguientes herramientas:
 - HTML
 - CSS
 - BOOTSTRAP
 - SASS
 - JAVASCRIPT ( librerias jQuery, SweetAlert.)
 
 Para lograr un dinamismo a la página e interactividad con el usuario se hizo uso del DOM, storage, asiganción de eventos y también, se usó el método fetch
 para que la página obtenga los datos de los productos desde un archivo JSON local para poder renderizarlos, de igual forma, se usó para simular consultas y renderizar datos de acuerdo al valor que otorgue el usuario en el campo de búsqueda. También se usó la API llamada EmailJS para enviarle al usuario un mail con los datos de su compra.

### Características de la pagina web
La pagina web posee las siguientes características como producto de las herramientas aplicadas:
- **Diseño responsivo**: el sitio se adapta a todos los dispositivos ya sea en computadoras de escritorio, laptops, smartphones o tablets.- **Estructuración**: cuenta con una estructura ordenada que permite que el sitio sea fácil de modificar y mantener a través del tiempo.
- **Imágenes**: las imágenes fueron tomadas de bancos de imágenes gratuitas, modificadas y comprimidas con Adobe Photoshop CS6.
- **Interactividad**: Posee funciones que el usuario puede realizar como añadir, eliminar o vaciar productos en el pedido. Registrarse, iniciar o cerrar sesión.
- **host**: La página se encuentra desplegada en Netlify, pueden verla haciendo [click aquí](https://smashburger-ig.netlify.app/ "click aquí").