/*let titulo=document.querySelector('h1');

titulo.innerHTML="Juego del número secreto";

let parrafo=document.querySelector('p');

parrafo.innerHTML="Numero del 1 al 10";*/

let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];

function cambiartexto(elemento,texto){
    let elementohtml=document.querySelector(elemento);
    elementohtml.innerHTML=texto;
    return;
}

function GenerarNumeroSecreto(){
    
    
    let numerosecreto=Math.floor(Math.random()*10+1);
    console.log(numerosecreto); 
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.includes(numerosecreto)){
        return GenerarNumeroSecreto()
    }else{
        listaNumerosSorteados.push(numerosecreto)
        if(listaNumerosSorteados.length===2){
            listaNumerosSorteados.shift();
        }
        return numerosecreto;
    }

    
}

function condicionesIniciales(){
    cambiartexto("h1","Juego del número secreto");
    cambiartexto("p","Numero del 1 al 10");
    numerosecreto=GenerarNumeroSecreto();
    intentos=1;
    
}
function reiniciar(){
    /*cambiartexto("p","Numero del 1 al 10");
    numerosecreto=GenerarNumeroSecreto();
    intentos=1;
    */
    condicionesIniciales();
    limpiarcaja();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function VerificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('ValorUsuario').value);
    
    
    
    if(numeroDeUsuario === numerosecreto){
        cambiartexto("p",`Acertaste el numero secreto en ${intentos} ${(intentos===1)? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
        
    }else{
        if(numeroDeUsuario>numerosecreto){
            cambiartexto("p","El numero es menor");
        }else{
            cambiartexto("p","El numero secreto es mayor")
        }
        intentos++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja(){
    document.querySelector('#ValorUsuario').value="";
    
}



condicionesIniciales();