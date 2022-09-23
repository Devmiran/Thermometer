let boton = document.getElementById('convertir')
boton.addEventListener("click", function () {

    let marcador = document.getElementById('marcador').value
    const resultado1 = document.getElementById('resultado')



    let resultado = ((marcador - 32) / 1.8).toFixed(1);
    if (resultado > 100 || resultado < 0) {
        alert('ERROR!!! Desbordamiento de valores');

    }else{
        resultado1.textContent = `${resultado}`;

    document.getElementById('calentando').style.height = `${resultado}px`


    }
    

}

)

let boton1 = document.getElementById('reiniciar')
boton1.addEventListener("click", function () {

    document.getElementById('marcador').value = ``
    document.getElementById('resultado').textContent = ``

    document.getElementById('calentando').style.height = ``


})

