let boton=document.getElementById('convertir')
boton.addEventListener("click", function(){

    let marcador=document.getElementById('marcador').value
    /* console.log(marcador) */
    const resultado1=document.getElementById('resultado')
    
    function cambiar(celcius){
        let resultado=((celcius - 32 )/1.8).toFixed(1) ;
        return resultado
    }
    resultado1.textContent=cambiar(marcador)

    function barrita(){
        let barrita=cambiar(marcador)
       document.getElementById('calentando').style.height=`${cambiar(marcador)}px`
        
    }
    barrita()
    
})
