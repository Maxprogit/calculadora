function mostrarValor(value)  {
        document.getElementById("input").value += value //MOSTRAMOs EL VALOR DEL BOTON
}

function clearDisplay(){
    document.getElementById("input").value = ""
    const clear = document.getElementById("clear")
    clear.innerText = "CE"
    setTimeout(function(){
        clear.innerText = "C"
    }, 500)
}

const calcular = () => {
    try {
        const val = eval(document.getElementById("input").value) //EVALUA LA EXPRESION ARITMETICA Y REALIZA LA OPERACION
        document.getElementById("input").value = val //AGREGAMOS EL NUEVO VALOR AL INPUT
        console.log("🚀 ~ file: app.js:17 ~ calcular ~ val:", val)
        
    } catch (error) {
        document.getElementById("input").value = error;
    }
}


