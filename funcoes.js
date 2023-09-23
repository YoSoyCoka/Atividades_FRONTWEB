function escrever_data_extenso() {
    var data = document.getElementById("data1").value;
    var resultado = document.getElementById("resultado");

    var [ano, mes, dia] = data.split("-");

    switch (mes) {
        case "01":
            mes = "Janeiro";
            break;
        case "02":
            mes = "Fevereiro";
            break;
        case "03":
            mes = "Março";
            break;
        case "04":
            mes = "Abril";
            break;
        case "05":
            mes = "Maio";
            break;
        case "06":
            mes = "Junho";
            break;
        case "07":
            mes = "Julho";
            break;
        case "08":
            mes = "Agosto";
            break;
        case "09":
            mes = "Setembro";
            break;
        case "10":
            mes = "Outubro";
            break;
        case "11":
            mes = "Novembro";
            break;
        case "12":
            mes = "Dezembro";
            break;
    }
        resultado.innerHTML = dia + " de " + mes + " de " + ano;
}
function reajustarsalario() {
    var salario =  parseFloat(document.getElementById("salario").value);

    if (salario <= 280) {
        var percentual = 20;
    } else if (salario <= 700) {
        var percentual = 15;
    } else if (salario <= 1500) {
        var percentual = 10;
    } else {
        var percentual = 5;
    }
    var reajuste = salario * percentual / 100;
    var novo_salario = salario + reajuste;

    document.getElementById("antesreajuste").innerHTML = "Salario antes do reajuste: R$ " + salario;
    document.getElementById("percentualaumento").innerHTML = "Percentual do aumento aplicado: " + percentual + "%";
    document.getElementById("valoraumento").innerHTML = "Valor do aumento: R$ " + reajuste;
    document.getElementById("novosalario").innerHTML = " Novo Salario: R$ " + novo_salario;
}

function calcular(){
    var valor1 = parseFloat(document.getElementById("numero1").value);
    var valor2 = parseFloat(document.getElementById("numero2").value);

    var soma = valor1 + valor2;
    var multiplicacao = valor1 * valor2;
    var divisao = valor1 / valor2;
    var resto = valor1 % valor2;

    document.getElementById("soma").innerHTML = valor1 + " + " + valor2;
    document.getElementById("resusoma").innerHTML = soma;

    document.getElementById("multi").innerHTML = valor1 + " * " + valor2;
    document.getElementById("resumulti").innerHTML = multiplicacao;

    document.getElementById("divi").innerHTML = valor1 + " / " + valor2;
    document.getElementById("resudivi").innerHTML = divisao;

    document.getElementById("resto").innerHTML = valor1 + " % " + valor2;
    document.getElementById("resuresto").innerHTML = resto;
}

function mudarcor(cor){

    document.body.style.backgroundColor = cor;
}

function ocultarParagrafo() {
    var paragrafo = document.getElementById("paragrafo");
    paragrafo.style.display = paragrafo.style.display === "block" ? "none" : "block";   
  }

function pesquisar() {
  var texto = document.getElementById("texto").textContent;
  var palavra = document.getElementById("palavra").value;
  var resultado = document.getElementById("resultado_texto");

  var ocorrencias = texto.match(new RegExp(palavra, "gi"));

  if (ocorrencias === null) {
    resultado.innerHTML = "A palavra " + palavra + " não foi encontrada no texto.";
    return;
  }

  resultado.innerHTML = "A palavra " + palavra + " ocorre " + ocorrencias.length + " vezes no texto.";

  var novoTexto = texto;
  for (var i = 0; i < ocorrencias.length; i++) {
    novoTexto = novoTexto.replace(new RegExp(ocorrencias[i], "gi"), "<span class='destaque'>" + ocorrencias[i] + "</span>");
  }

  document.getElementById("texto").innerHTML = novoTexto;
}

function validarnumero(){
    var numero = window.prompt("Digite um numero");

    while (numero < 0 || numero > 10) {
        numero = window.prompt("Numero Invalido, digite novamente");
    }  
    
}

function validarsenha(){
    var senha = document.getElementById("senha").value;
    var login = document.getElementById("usuario").value;
    var resultado = document.getElementById("resultadologin");

    
    resultado.innerHTML = "Senha valida";
    senha.style.display = "none";
    login.style.display = "none";

}
