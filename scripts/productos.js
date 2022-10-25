const hamburguesas = [
  { id: 101, imagen: "./img/burgers/icon_paticomple.png", nombre: "PATICOMPLE", descripcion: "Queso Pategrás - Tomates Marinados - Lechuga Capuchina - Alioli.", precio: 950.0 },
  { id: 102, imagen: "./img/burgers/icon_parrillera.png", nombre: "PARRILLERA", descripcion: "Queso Provoleta con Chimmichurri - Morrón a la Plancha - Cebolla Roja - Ketchup ahumado. ", precio: 980.0 },
  { id: 103, imagen: "./img/burgers/icon_cuzco.png", nombre: "CUZCO", descripcion: "Queso Reggianito - Batata Frita - Sarza (cebolla, limón, jalapeño, cilantro) - Salsa Huancaína", precio: 980.0 },
  { id: 104, imagen: "./img/burgers/icon_yankee.png", nombre: "YANKEE", descripcion: "Queso Cheddar - Panceta Ahumada - Pepinos en Pickle - Ketchup", precio: 990.0 },
  { id: 105, imagen: "./img/burgers/icon_costanera.png", nombre: "COSTANERA", descripcion: "Queso Danbo - Huevo a la Plancha - Jamón Cocido - Cebolla a la Plancha - Mayonesa de Oliva", precio: 990.0 },
  { id: 106, imagen: "./img/burgers/icon_mortal.png", nombre: "MORTAL", descripcion: "Doble Hamburguesa (300grs.) Doble Cheddar - Doble Panceta - Cebolla Caramelizada - Ketchup", precio: 1200.0 },
  { id: 107, imagen: "./img/burgers/icon_tentacion.png", nombre: "TENTACION", descripcion: "Queso pategrás - Tomates Frescos - Escabeches de Jalapeño - Guacamole", precio: 950.0 },
  { id: 108, imagen: "./img/burgers/icon_donatelo.png", nombre: "DONATELO", descripcion: "Queso Cheddar - Huevo a la Plancha - Panceta - Fideos Moñito con Cheddar - Salsa Barbacoa", precio: 990.0 },
  { id: 109, imagen: "./img/burgers/icon_smash.png", nombre: "SMASH", descripcion: "Queso Danbo, Tomate, Lechuga Capuchina, Pepinillos, Cebolla Blanca, Mostanesa", precio: 980.0 },
  { id: 110, imagen: "./img/burgers/icon_antojo.png", nombre: "ANTOJO", descripcion: "Queso Azul - Cebolla Caramelizada - Rúcula - Mayonesa de Berenjena", precio: 950.0 },
  { id: 111, imagen: "./img/burgers/icon_gino.png", nombre: "GINO", descripcion: "Queso Muzzarella - Tomates Asados - Salchicha Parrillera - Pesto de Albahaca", precio: 980.0 },
  { id: 112, imagen: "./img/burgers/icon_bum.png", nombre: "BUM", descripcion: "Queso Parmesano - Ajos Confitados - Rúcula - Mollejas a la Plancha - Mayonesa de Lima y Cilantro", precio: 1100.0 },
  { id: 113, imagen: "./img/burgers/icon_sicilia.png", nombre: "SICILIA", descripcion: "Tomates Secos - Cebollita Frita - Rúcula- Mozzarella - Alioli", precio: 950.0 },
  { id: 114, imagen: "./img/burgers/icon_bosque.png", nombre: "BOSQUE", descripcion: "Queso Ahumado - Rúcula - Menta - Pickle de Hongos de Pino - Mayonesa de Merken", precio: 950.0 },
  { id: 115, imagen: "./img/burgers/icon_bigtinky.png", nombre: "BIG TINKY", descripcion: "Doble Hamburguesa – Doble Cheddar – Pepino en Pickle – Cebolla – Lechuga Capuchina – Mostaza", precio: 1100.0 },
  { id: 116, imagen: "./img/burgers/icon_azteca.png", nombre: "AZTECA", descripcion: "Queso Ahumado - Guacamole - Aros de Cebolla - Rúcula - Lechuga Capuchina - Mostaza", precio: 990.0 },
  { id: 117, imagen: "./img/burgers/icon_granchoripan.png", nombre: "GRANCHORIPAN", descripcion: "Chorizo de Entraña – Queso Provoleta – Ajo Frito – jalapeño – Provenzal de Menta - Cilantro", precio: 800.0 },
  { id: 118, imagen: "./img/burgers/icon_choripanmyke.png", nombre: "CHORIPAN MIKE", descripcion: "Chorizo de Entraña – Tomate – Cebolla – Pepinos en Pickle – Sal de Apio – Mostanesa", precio: 800.0 },
  { id: 119, imagen: "./img/burgers/icon_srpollo.png", nombre: "SR.POLLO", descripcion: "Sánguche de Pechuga de Pollo Frita, Panceta Ahumada, Lechuga Capuchina -Tártara", precio: 950.0 },
];

const extras = [
  { id: 201, imagen: "./img/extras/icon_papasCombo.png", nombre: "PAPAS CLÁSICAS", descripcion: "Clasico acompañamiento para tu hamburguesa", precio: 530.0 },
  { id: 201, imagen: "./img/extras/icon_bunuelosEspinaca.png", nombre: "BUNUELO DE ESPINACA", descripcion: "Espinaca - queso reggianito -alioli", precio: 630.0 },
  { id: 202, imagen: "./img/extras/icon_papasCheddar.png", nombre: "PAPAS CON CHEDDAR", descripcion: "Papas fritas - queso cheddar - panceta - cebolla de verdeo", precio: 650.0 },
  { id: 203, imagen: "./img/extras/icon_papasTinky.png", nombre: "PAPAS TINKY", descripcion: "Crema de quesos - salchicha parrillera - cebolla de verdeo", precio: 650.0 },
  { id: 204, imagen: "./img/extras/icon_patitasPollo.png", nombre: "PATITAS DE POLLO", descripcion: "Supremas marinadas (en 11 especias) - mayonesa", precio: 630.0 },
];

const bebidas = [
{id:301, imagen: "./img/bebidas/cocaCola.png", nombre: "COCA COLA", descripcion: "Lata 354ml", precio: 250.0},
{id:302, imagen: "./img/bebidas/apaSorachi.png", nombre: "APA SORACHI", descripcion: "Cerveza 500 cc", precio: 600.0},
{id:303, imagen: "./img/bebidas/honey.png", nombre: "HONEY", descripcion: "Lata 500 cc", precio: 600.0},
{id:304, imagen: "./img/bebidas/irishRed.png", nombre: "IRIS RED", descripcion: "Lata 500 cc", precio: 600.0},      
{id:305, imagen: "./img/bebidas/jimMorrison.png", nombre: "JIM MORRISON", descripcion: "Lata 500 cc", precio: 600.0},
{id:306, imagen: "./img/bebidas/porter.png", nombre: "PORTER", descripcion: "Lata 500 cc", precio: 600.0}
]

export const productos = [...hamburguesas, ...extras,...bebidas];
