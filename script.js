/* Capturando cards */
let carta1 = document.getElementById("card1");
let carta2 = document.getElementById("card2");
let carta3 = document.getElementById("card3");

/* Capturando Valores de la Entrada */
let costoEnTitulo = document.getElementById('costoEnTitulo');
let costo = document.getElementById('costo');

/* Capturandop Elementos del Formulario*/
let cantidad = document.getElementById("inputCant");
let categoria = document.getElementById("categoria");

/*Capturando Botones*/
let btnBorrar = document.getElementById('btnBorrar');
let btnResumen = document.getElementById('btnResumen');

let valorBoleto = 200;
let boletoConDescuento;


/* ---------------------------------------- */
/*         Seleccionar Tarjetas             */
/* ---------------------------------------- */

carta1.addEventListener('click', () => {
    //Cambio de Color
    carta1.classList.replace('borde-color-azul', 'borde-color-naranja');
    carta2.classList.replace('borde-color-naranja', 'borde-color-azul');
    carta3.classList.replace('borde-color-naranja', 'borde-color-azul');
    categoria.value = "Estudiante";
    //Calculo del Valor del Boleto - Desc. 80%
    boletoConDescuento = valorBoleto * 0.2;
    costoEnTitulo.textContent = boletoConDescuento;
    costo.textContent = boletoConDescuento;
}
)

carta2.addEventListener('click', () => {
    //Cambio de Color
    carta2.classList.replace('borde-color-azul', 'borde-color-naranja');
    carta1.classList.replace('borde-color-naranja', 'borde-color-azul');
    carta3.classList.replace('borde-color-naranja', 'borde-color-azul');
    categoria.value = "Trainee";
    //Calculo del Valor del Boleto - Desc. 50%
    boletoConDescuento = valorBoleto * 0.5;
    costoEnTitulo.textContent = boletoConDescuento;
    costo.textContent = boletoConDescuento;
}
)

carta3.addEventListener('click', () => {
    //Cambio de Color
    carta3.classList.replace('borde-color-azul', 'borde-color-naranja');
    carta2.classList.replace('borde-color-naranja', 'borde-color-azul');
    carta1.classList.replace('borde-color-naranja', 'borde-color-azul');
    categoria.value = "Junior";
    //Calculo del Valor del Boleto - Desc. 15%
    boletoConDescuento = valorBoleto * 0.85;
    costoEnTitulo.textContent = boletoConDescuento;
    costo.textContent = boletoConDescuento;
}
)

/* ---------------------------------------- */
/*           Accion de Botones              */
/* ---------------------------------------- */

/* Boton Borrar */
btnBorrar.addEventListener('click', () => {
    //Cambio de Color
    carta1.classList.replace('borde-color-naranja', 'borde-color-azul');
    carta2.classList.replace('borde-color-naranja', 'borde-color-azul');
    carta3.classList.replace('borde-color-naranja', 'borde-color-azul');
    //Valor de las Entradas Inicial
    boletoConDescuento = valorBoleto;
    costoEnTitulo.textContent = boletoConDescuento;
    costo.textContent = boletoConDescuento;
    //Borrar Campos
    let eraser = document.getElementById('nombre');
    eraser.value ="";
    eraser = document.getElementById('apellido');
    eraser.value ="";
    eraser = document.getElementById('mail');
    eraser.value = "";
    cantidad.value = 1;
    categoria.value="Estudiante";
}
)

/* Boton Resumen */
btnResumen.addEventListener('click', () => {
    if(categoria.value=="Ninguna"){
        boletoConDescuento = cantidad.value * (valorBoleto);
        costoEnTitulo.textContent = valorBoleto;
        costo.textContent = boletoConDescuento;
    }

    if (categoria.value == "Estudiante") {
        //Cambio de Color la card
        carta1.classList.replace('borde-color-azul', 'borde-color-naranja');
        carta2.classList.replace('borde-color-naranja', 'borde-color-azul');
        carta3.classList.replace('borde-color-naranja', 'borde-color-azul');
        //Calcular Costo Total
        boletoConDescuento = cantidad.value * (valorBoleto * 0.2);
        costoEnTitulo.textContent = valorBoleto * 0.2;
        costo.textContent = boletoConDescuento;
    }

    if ((categoria.value == "Trainee")) {
        //Cambio de Color la card
        carta2.classList.replace('borde-color-azul', 'borde-color-naranja');
        carta1.classList.replace('borde-color-naranja', 'borde-color-azul');
        carta3.classList.replace('borde-color-naranja', 'borde-color-azul');
        //Calcular Costo Total
        boletoConDescuento = cantidad.value * (valorBoleto * 0.5);
        costoEnTitulo.textContent = valorBoleto * 0.5;
        costo.textContent = boletoConDescuento;
    }

    if (categoria.value == "Junior") {
        //Cambio de Color la card
        carta3.classList.replace('borde-color-azul', 'borde-color-naranja');
        carta2.classList.replace('borde-color-naranja', 'borde-color-azul');
        carta1.classList.replace('borde-color-naranja', 'borde-color-azul');
        //Calcular Costo Total
        boletoConDescuento = cantidad.value * (valorBoleto * 0.85);
        costoEnTitulo.textContent = valorBoleto * 0.85;
        costo.textContent = boletoConDescuento;
    }
}
)