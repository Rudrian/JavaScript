function exibirNome() {
    const nome = document.getElementById('usuario').value;
    alert("Seja bem-vindo " + nome);
}

function calcular(){
    //ENTRADA
    const valor1 = document.getElementById('vl1').value;
    const valor2 = document.getElementById('vl2').value;
    
    //Processamento
    let soma = parseInt(valor1) + parseInt(valor2);
    let multi = parseInt(valor1) * parseInt(valor2);
    let divi = parseInt(valor1) / parseInt(valor2);
    let sub = parseInt(valor1) - parseInt(valor2);
    
    //Saida
    alert("O resultado da sua soma é: " + soma);
    alert("O resultado da sua multiplicação é: " + multi);
    alert("O resultado da sua divisão é: " + divi);
    alert("O resultado da sua subtração é: " + sub);
    }

    function converterTemperatura() {
        let celsius = document.getElementById('celsius').value;
    
        let fahrenheit = (celsius * 9/5) + 32;
    
        alert("A temperatura é: " + fahrenheit);
    }
    
