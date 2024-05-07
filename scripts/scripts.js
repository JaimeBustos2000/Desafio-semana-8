let intentos = 0;
let numero = Math.floor(Math.random() * 99) + 1;


function numeroAleatorio() {
    playmusic()

    let inicio = document.getElementById('enviar')
    inicio.innerHTML = 'Enviar'

    let a = document.getElementById("numero").value;


    let bucle = true;
    while (bucle == true) {

        if (a < 0 || a > 100) {
            window.alert('Ingresa un numero entre 1 y 100')
            break;
        }
        else {
            if (a == '' && intentos == 0 && (inicio.value!='Enviar')) {
                window.alert("Que comience el juego jajajaja")
                console.log(numero)
                break;
            }
            else if (a == '') {
                window.alert("Introduce un número valido");
                break;
            }
            else if (a == numero) {
                intentos += 1;
                document.getElementById('intentos').innerHTML = intentos
                window.alert("Has acertado el número");
                window.alert("Has necesitado " + intentos + " intentos");
                intentos = 0;
                document.getElementById("audio").pause();
                document.getElementById('numero').value = '';
                numero = Math.floor(Math.random() * 99) + 1;
                document.getElementById("intentos").innerHTML = "0";
                break;
            }
            else if (a > numero) {
                window.alert("Mi número es menor");
                console.log(numero);
                intentos += 1;
                int();
                break;
            } else if (a < numero) {
                window.alert("Mi número es mayor");
                console.log(numero);
                intentos += 1;
                int();
                break;
            }
        }


    }

}

function int() {
    if (intentos < 1) {
        document.getElementById('intentos').innerHTML = '0';
    }
    else if (intentos == 1) {
        document.getElementById('intentos').innerHTML = '1';
    }
    else {
        document.getElementById('intentos').innerHTML = intentos;
    }
}

let clickNumber = 0
function show() {
    let bucle = true
    let pista = document.getElementById('txtpista');
    let inicio=document.getElementById('enviar')
    clickNumber += 1

    while (bucle == true && inicio.innerHTML=='Enviar') {
        if (clickNumber % 0) {
            pista.style.visibility = 'hidden';
        }
        else {
            pista.style.visibility = 'visible';
        }

        let numero10 = numero + Math.floor(Math.random() * 11) + 1;
        let numerom10 = numero - Math.floor(Math.random() * 11) + 1;

        if (intentos == 10) {
        }
        else {
            pista.innerHTML = 'El numero se encuentra entre: ' + numerom10 + ' y ' + numero10
        }
        break;

    }
    console.log(clickNumber)
}


function playmusic() {
    var audio = document.getElementById('audio');
    audio.loop = true;
    audio.play();
}