export const hamburguesas = [
  { id: 1, imagen: "./img/burgers/icon_paticomple.png", nombre: "PATICOMPLE", descripcion: "Queso Pategrás - Tomates Marinados - Lechuga Capuchina - Alioli.", precio: 950.0 },
  { id: 2, imagen: "./img/burgers/icon_parrillera.png", nombre: "PARRILLERA", descripcion: "Queso Provoleta con Chimmichurri - Morrón a la Plancha - Cebolla Roja - Ketchup ahumado. ", precio: 980.0 },
  { id: 3, imagen: "./img/burgers/icon_cuzco.png", nombre: "CUZCO", descripcion: "Queso Reggianito - Batata Frita - Sarza (cebolla, limón, jalapeño, cilantro) - Salsa Huancaína", precio: 980.0 },
  { id: 4, imagen: "./img/burgers/icon_yankee.png", nombre: "YANKEE", descripcion: "Queso Cheddar - Panceta Ahumada - Pepinos en Pickle - Ketchup", precio: 990.0 },
  { id: 5, imagen: "./img/burgers/icon_costanera.png", nombre: "COSTANERA", descripcion: "Queso Danbo - Huevo a la Plancha - Jamón Cocido - Cebolla a la Plancha - Mayonesa de Oliva", precio: 990.0 },
  { id: 6, imagen: "./img/burgers/icon_mortal.png", nombre: "MORTAL", descripcion: "Doble Hamburguesa (300grs.) Doble Cheddar - Doble Panceta - Cebolla Caramelizada - Ketchup", precio: 1200.0 },
  { id: 7, imagen: "./img/burgers/icon_tentacion.png", nombre: "TENTACION", descripcion: "Queso pategrás - Tomates Frescos - Escabeches de Jalapeño - Guacamole", precio: 950.0 },
  { id: 8, imagen: "./img/burgers/icon_donatelo.png", nombre: "DONATELO", descripcion: "Queso Cheddar - Huevo a la Plancha - Panceta - Fideos Moñito con Cheddar - Salsa Barbacoa", precio: 990.0 },
  { id: 9, imagen: "./img/burgers/icon_smash.png", nombre: "SMASH", descripcion: "Queso Danbo, Tomate, Lechuga Capuchina, Pepinillos, Cebolla Blanca, Mostanesa", precio: 980.0 },
  { id: 10, imagen: "./img/burgers/icon_antojo.png", nombre: "ANTOJO", descripcion: "Queso Azul - Cebolla Caramelizada - Rúcula - Mayonesa de Berenjena", precio: 950.0 },
  { id: 11, imagen: "./img/burgers/icon_gino.png", nombre: "GINO", descripcion: "Queso Muzzarella - Tomates Asados - Salchicha Parrillera - Pesto de Albahaca", precio: 980.0 },
  { id: 12, imagen: "./img/burgers/icon_bum.png", nombre: "BUM", descripcion: "Queso Parmesano - Ajos Confitados - Rúcula - Mollejas a la Plancha - Mayonesa de Lima y Cilantro", precio: 1100.0 },
  { id: 13, imagen: "./img/burgers/icon_sicilia.png", nombre: "SICILIA", descripcion: "Tomates Secos - Cebollita Frita - Rúcula- Mozzarella - Alioli", precio: 950.0 },
  { id: 14, imagen: "./img/burgers/icon_bosque.png", nombre: "BOSQUE", descripcion: "Queso Ahumado - Rúcula - Menta - Pickle de Hongos de Pino - Mayonesa de Merken", precio: 950.0 },
  { id: 15, imagen: "./img/burgers/icon_bigtinky.png", nombre: "BIG TINKY", descripcion: "Doble Hamburguesa – Doble Cheddar – Pepino en Pickle – Cebolla – Lechuga Capuchina – Mostaza", precio: 1100.0 },
  { id: 16, imagen: "./img/burgers/icon_azteca.png", nombre: "AZTECA", descripcion: "Queso Ahumado - Guacamole - Aros de Cebolla - Rúcula - Lechuga Capuchina - Mostaza", precio: 990.0 },
  { id: 17, imagen: "./img/burgers/icon_granchoripan.png", nombre: "GRANCHORIPAN", descripcion: "Chorizo de Entraña – Queso Provoleta – Ajo Frito – jalapeño – Provenzal de Menta - Cilantro", precio: 800.0 },
  { id: 18, imagen: "./img/burgers/icon_choripanmyke.png", nombre: "CHORIPAN MIKE", descripcion: "Chorizo de Entraña – Tomate – Cebolla – Pepinos en Pickle – Sal de Apio – Mostanesa", precio: 800.0 },
  { id: 19, imagen: "./img/burgers/icon_srpollo.png", nombre: "SR.POLLO", descripcion: "Sánguche de Pechuga de Pollo Frita, Panceta Ahumada, Lechuga Capuchina -Tártara", precio: 950.0 },
];

const extras = [
  { id: 20, imagen: "./img/extras/icon_papasCombo.png", nombre: "PAPAS CLÁSICAS", descripcion: "Clasico acompañamiento para tu hamburguesa", precio: 530.0 },
  { id: 21, imagen: "./img/extras/icon_bunueloEspinaca.png", nombre: "BUNUELO DE ESPINACA", descripcion: "Espinaca - queso reggianito -alioli", precio: 630.0 },
  { id: 22, imagen: "./img/extras/icon_papaCheddar.png", nombre: "PAPAS CON CHEDDAR", descripcion: "Papas fritas - queso cheddar - panceta - cebolla de verdeo", precio: 650.0 },
  { id: 23, imagen: "./img/extras/icon_papasTinky.png", nombre: "PAPAS TINKY", descripcion: "Crema de quesos - salchicha parrillera - cebolla de verdeo", precio: 650.0 },
  { id: 24, imagen: "./img/extras/icon_patitasPollo.png", nombre: "PATITAS DE POLLO", descripcion: "Supremas marinadas (en 11 especias) - mayonesa", precio: 630.0 },
];

export const comidas = [...hamburguesas, ...extras];
