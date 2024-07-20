 const lampon = document.getElementById("turnOn");
 const lampoff = document.getElementById("turnOff");
 const lamp = document.getElementById("lamp");
 const quebb = 0

function ligou() {
    return lamp.src = 'img/ligada.jpg' 
}

function desligou() {
    return lamp.src = 'img/desligada.jpg'
}

function quebrou() {
    lamp.src = 'img/quebrada.jpg';
    lampon.disabled = true
    lampoff.disabled = true
    lamp.onmouseout = null
    lamp.onmouseover = null
    
}

