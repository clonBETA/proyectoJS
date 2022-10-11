
// **********  PROYECTO   **********
// **********  PROYECTO   **********
// **********  PROYECTO   **********


function ingresarAnio(){

    const isInteger = /^(\d)+$/g;

    do{

        let nacimiento = prompt("La numerología definirá tu futuro. Ingresa el año en el que has nacido");  //Se declara e ingresa el valor del año de nacimiento

        if (isInteger.test(nacimiento)){

            let numeroArray = num => Number(num);  //Funcion para convertir string a numero

            nacimientoArray = Array.from(String(nacimiento), numeroArray);  //Se declara y asignan los elementos del array

        }else{

            nacimientoArray = Array.from(String("ERROR"));
        
        }

        console.log(nacimientoArray);

    }while (nacimientoArray.length > 4);

}

function dificultad(){

    let nacimientoNivel;

    do{

        let total = 0;

        nacimientoArray.forEach(element => {
            
            total = total + parseInt(element);

        });

        nacimientoNivel = Array.from(String(total));

        nacimientoArray = nacimientoNivel;

    }while(nacimientoNivel.length >= 2);

    return nacimientoNivel;

}

function dificultadAciertos(nacimientoNivel){

    if (nacimientoNivel >= 0 && nacimientoNivel<=3){

        return dificultad1.exito;

    }else  if (nacimientoNivel >= 4 && nacimientoNivel <=6){
        
        return dificultad2.exito;

    }else {

        return dificultad3.exito;
    
    }

}

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

function comprobarFormula(funNivelEnergia,funFormulaCorrecta, funNacNivel){

    if (funNivelEnergia > 0){

        aciertos++;

        funFormulaCorrecta = aciertos;

        //Se comprueban los aciertos en la formula

        console.log("dificultadAciertos = " + dificultadAciertos(funNacNivel));

        if (funFormulaCorrecta >= dificultadAciertos(funNacNivel)){

            alert("¡LO HAS LOGRADO! Has conseguido la formula correcta.")
    
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

let nacimientoArray;

let mezclar = true;

let energia = 10;

let aciertos = 0;

//Declaracion de objetos literales

const dificultad1={

    tipo:"Baja",
    exito: 3

}

const dificultad2={

    tipo:"Alta",
    exito: 5

}

const dificultad3={

    tipo:"Media",
    exito: 4

}

//Ingresar nombre y presentacion del juego

nombrePresentacion()

ingresarAnio()

let nacNivel = dificultad();

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

    console.log("nivel energia = " + nivelEnergia);

    //Se asigna nuevo valor a variable
    energia = nivelEnergia;

    //Comprueba bool
    mezclar = comprobarFormula(nivelEnergia,formulaCorrecta,nacNivel);

    //Comprueba cantidad de aciertos
    console.log("aciertos" + aciertos);

}