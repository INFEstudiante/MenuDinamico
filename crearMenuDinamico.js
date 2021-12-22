
//Estructura de datos Json para el menu y los submenus.

var MenuDinamico=[

    //menu 1: Cuentas con sus hijos (submenus)
    {
        "Codigo":1,
        "Nombre_Opcion": "Cuentas",
        "Opcion_padre":1,
    },

    {
        "Codigo":1.1,
        "Nombre_Opcion": "Ahorros",
        "Opcion_padre":1,
        "Programa": "Cuentas/Ahorros",
       
    },
    
    {
        "Codigo":1.2,
        "Nombre_Opcion": "Corrientes",
        "Opcion_padre":1,
        "Programa": "Cuentas/Corrientes",
    },
    
    //menu 2:Inversiones con sus hijos(submenus)
    {
        "Codigo":2,
        "Nombre_Opcion": "Inversiones",
        "Opcion_padre":2,  
    },

    {
        "Codigo":2.1,
        "Nombre_Opcion": "Certificados",
        "Opcion_padre":2,
        "Programa": "Inversiones/Certificados",
        
    },

    {
        "Codigo":2.2,
        "Nombre_Opcion":"Mercado de Valores",
        "Opcion_padre":2,
        "Programa": "Inversiones/Mercado de Valores",
    },

    //menu 3: Tarjetas con sus hijos(submenus).
    {
        "Codigo":3,
        "Nombre_Opcion": "Tarjetas",
        "Opcion_padre":3,  
    },
    
    {
        "Codigo":3.1,
        "Nombre_Opcion": "Débito",
        "Opcion_padre":3,
        "Programa": "Tarjetas/Débito",   
    },
    

    {
        "Codigo":3.2,
        "Nombre_Opcion": "Crédito",
        "Opcion_padre":3,
        "Programa": "Tarjetas/Crédito",
    },
    
    {
        "Codigo":3.21,
        "Nombre_Opcion": "Mastercard Clásica",
        "Opcion_padre":3.2,
        "Programa": "Tarjetas/Crédito/Mastercard Clásica.",
    },

    {
        "Codigo":3.22,
        "Nombre_Opcion": "Mastercard Gold.",
        "Opcion_padre":3.2,
        "Programa": "Tarjetas/Crédito/Mastercard Gold",
    },

    {
        "Codigo":3.23,
        "Nombre_Opcion": "Mastercard Platinum.",
        "Opcion_padre":3.2,
        "Programa": "Tarjetas/Crédito/Mastercard Platinum",
    },

    //menu 4: Préstamos con sus hijos (submenus)
    {
        "Codigo":4,
        "Nombre_Opcion": "Préstamos",
        "Opcion_padre":4,
    },

    {
        "Codigo":4.1,
        "Nombre_Opcion": "Personales",
        "Opcion_padre":4,
        "Programa": "Préstamos/Personales",
    },

    {
        "Codigo":4.2,
        "Nombre_Opcion":"Hipotecarios",
        "Opcion_padre":4,
        "Programa": "Préstamos/Hipotecarios",
    },

    {
        "Codigo":4.3,
        "Nombre_Opcion":"Vehículos",
        "Opcion_padre":4,
        "Programa": "Préstamos/Vehículos",
    },

    {
        "Codigo":4.31,
        "Nombre_Opcion":"Préstamos Vehículos Nuevos.",
        "Opcion_padre":4.3,
        "Programa": "Préstamos/Préstamos Vehículos Nuevos",
    },

    {
        "Codigo":4.32,
        "Nombre_Opcion":"Préstamos Vehículos Usados.",
        "Opcion_padre":4.3,
        "Programa": "Préstamos/Préstamos Vehículos Usados",
    },

   //menu 5: sobre nosotros con sus hijos (submenus)
    {
        "Codigo":5,
        "Nombre_Opcion": "Sobre nosotros",
        "Opcion_padre":5,
        "Error": false,  
    },
    
    {
        "Codigo":5.1,
        "Nombre_Opcion": "Visión,Misión y Valores.",
        "Opcion_padre":5,
        "Programa": "Sobre nosotros/Visión,Misión y Valores",
        "Error": false, 
    },

    {
        "Codigo":5.2,
        "Nombre_Opcion":"Responsabilidad social.",
        "Opcion_padre":5,
        "Programa": "Sobre nosotros/Responsabilidad social",
        "Error": false,
    },

    {
        "Codigo":5.3,
        "Nombre_Opcion":"Principales Ejecutivos.",
        "Opcion_padre":5,
        "Programa": "Sobre nosotros/Principales Ejecutivos",
        "Error": false,
    },

    {
        "Codigo":5.4,
        "Nombre_Opcion":"Ley Orgánica y Estatutos.",
        "Opcion_padre":5,
        "Programa": "Sobre nosotros/Ley Orgánica y Estatutos",
        "Error": false,
    },

    //menu 6: Contactos con sus hijos (submenus)
    {
        "Codigo":6,
        "Nombre_Opcion": "Contactos",
        "Opcion_padre":6,  
    },

    {
        "Codigo":6.1,
        "Nombre_Opcion": "Teléfono.",
        "Opcion_padre":6,
        "Programa": "Contactos/Teléfono",  
    },

    {
        "Codigo":6.2,
        "Nombre_Opcion":"Correo eléctronico.",
        "Opcion_padre":6,
        "Programa": "Contactos/Correo eléctronico",
    },

    {
        "Codigo":6.3,
        "Nombre_Opcion":"Ubicación.",
        "Opcion_padre":6,
        "Programa": "Contactos/Ubicación",
    }

]



//funciones de Js 
var crearMenu = function () {
    var source = [];
    var items = [];
    // construir una fuente jerárquica.
    for (i = 0; i < MenuDinamico.length; i++) {
        var item = MenuDinamico[i];
        var nombre = item["Nombre_Opcion"];
        var elementoPadre = item["Opcion_padre"];
        var id = item["Codigo"];

        if (items[elementoPadre]) {
            var item = {elementoPadre: elementoPadre, nombre: nombre, item: item };
            if (!items[elementoPadre].items) {
                items[elementoPadre].items = [];
            }
            items[elementoPadre].items[items[elementoPadre].items.length] = item;
            items[id] = item;
        }
        else {
            items[id] = {elementoPadre:elementoPadre, nombre: nombre, item: item };
            source[id] = items[id];
        }
    }
    return source;
}
var source = crearMenu();

var buildUL = function (padre, items) {
    $.each(items, function () {
        if (this.nombre) {
            // crear elemento <li> y añadirlo al elemento padre.
            var li = $("<li>" + this.nombre + "</li>");
            li.appendTo(padre);
            // si hay elementos secundarios (submenus), llame a la función buildUL.
            if (this.items && this.items.length > 0) {
                var ul = $('<ul class="subNav"></ul>');
                ul.appendTo(li);
                buildUL(ul, this.items);
               
            }
        }
    });
}
var ul = $("<ul></ul>");
ul.appendTo(".nav");
buildUL(ul, source);