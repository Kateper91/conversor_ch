document.getElementById("button1").onclick = function() {
    let valor = parseInt(prompt("Ingresa la cantidad a cotizar"));
    let dolar = 0.0080;
    if( valor) {
        resultado = valor*dolar;
        alert (valor + " pesos argentinos son U$S" + resultado.toFixed(2) + " dolares")
    }else {
    alert ("El valor ingresado no es valido")
    };
}

document.getElementById("button2").onclick = function() {
    let valor = parseInt(prompt("Ingresa la cantidad a cotizar"));
    let mexicanos = 0.16;
    if( valor) {
        resultado = valor*mexicanos;
        alert (valor + " pesos argentinos son  " + resultado.toFixed(2) +" pesos mexicanos")
    }else {
    alert ("El valor ingresado no es valido")
    };
}
document.getElementById("button3").onclick = function() {
    let valor = parseInt(prompt("Ingresa la cantidad a cotizar"));
    let euro = 0.0076;
    if( valor) {
        resultado = valor*euro;
        alert (valor + " pesos argentinos son € " + resultado.toFixed(2)+ " euros")
    }else {
    alert ("El valor ingresado no es valido")
    };
}

