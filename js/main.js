
/*

******* APUNTES ********
******* APUNTES ********
******* APUNTES ********

//Declaracion de variables

let nombre;
let apellido;
let anio;

//Asignacion

nombre = "Cristian";
apellido = "Gomez";
anio = 2022;

//Inicializar

let user = "Daniel";
const DNI = "12345678";

//Reasignacion

user = "Pedro";  //Las constantes no se pueden reasignar

//Concatenacion de variables

nombreCompleto = nombre + " " + apellido;

//Metodo de entrada

let nombreUser = prompt("Ingresa tu nombre", "Ej: Cristian Gomez");

//Metodos de salida

//Consol.log sirve para ver valores en la consola (operaciones, strings, etc)
console.log("Mensaje en consola");   //puede recibir un STRING; NUMERO; VARIABLE, COMBINACION
console.log(nombreCompleto);
//alert
alert("Mensaje ALERT");   //Sirve para dar mensajes al usuario
*/





// **********  PROYECTO   **********
// **********  PROYECTO   **********
// **********  PROYECTO   **********


function nombrePresentacion(){

    //Ingreso de nombre de usuario

    do{

        nombreUsuario = prompt("Saludos Aprendíz. Por favor recuerdanos tu nombre.");

    }while(nombreUsuario.length <= 0);

    //Instrucciones

    alert("Recuerda " + nombreUsuario + ", que tienes una oportunidad para crear una pócima mágica. Si lo consigues, serás un ser digno de aprender con nosotros. Si no lo consigues y agotas tus energías, deberás regresar por donde viniste.")

    alert("Para conseguir la fórmula de la pócima, deberás colocar las cucharadas necesarias de cada ingrediente en un recipiente. Podrás intentarlo nuevamente, mientras conserves energías. Buena suerte.")

}

function colocarIngredientes() {

    let cucharadas = true;

    let ingrediente;

    while (cucharadas) {

        ingrediente = parseFloat(prompt("Cuantas cucharadas deseas colocar? (1-10)"))

        if (ingrediente > 0 && ingrediente < 11) {
            
            alert("Perfecto.")

            cucharadas = false;

            return ingrediente;

        }else{

            alert("Sólo puedes colocar de 1 a 10 cucharadas por ingrediente.");

        }

    }

}

function energiaRestante(a,b,c,d){
 
    //Se verifica el nivel de energia
    
    return a - ((b - (c/2)) + (d/2));

}

function comprobarFormula(funNivelEnergia,funFormulaCorrecta){

    if (funNivelEnergia > 0){

        aciertos++;

        funFormulaCorrecta = aciertos;

        //Se comprueban los aciertos en la formula

        if (funFormulaCorrecta >= 3){

            alert("¡LO HAS LOGRADO!")
    
            return false;
    
        }else{
    
            alert("Casi lo logras! Todavía tienes fuerza. Vuelve a intentarlo!");
            
            return true;
    
        }

    }else{

        alert("Ya no tienes fuerzas. Regresa en un millón de años!");

        return false;

    }

}


//Declaracion de variables

let nombreUsuario;

let mezclar = true;

let energia = 10;

let aciertos = 0;

//Ingresar nombre y presentacion del juego

nombrePresentacion()

//Loop principal

while (mezclar){

    let formulaCorrecta;

    //Coloca primer ingrediente
    let ingrediente1 = colocarIngredientes();

    //Coloca segundo ingrediente
    let ingrediente2 = colocarIngredientes();

    //Coloca tercer ingrediente
    let ingrediente3 = colocarIngredientes();

    //Llamado funcion 
    let nivelEnergia = energiaRestante(energia,ingrediente1,ingrediente2,ingrediente3);

    console.log("nivel energia" + nivelEnergia);

    //Se asigna nuevo valor a variable
    energia = nivelEnergia;

    mezclar = comprobarFormula(nivelEnergia,formulaCorrecta);

    console.log("aciertos" + aciertos);

}



