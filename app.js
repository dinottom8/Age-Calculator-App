var botao = document.getElementById("clicktofunction");

botao.addEventListener("click",loadDate);

function loadDate() {

    //Captação de Inputs
    
    var diaInformado = document.getElementById("day_input").value;
    var mesInformado = document.getElementById("month_input").value;
    var anoInformado = document.getElementById("year_input").value;

    //Declaração de Datas

    var dataInserida = new Date(anoInformado,mesInformado-1,diaInformado);
    var dataAtual = new Date()

    //Calculando a idade

    var saidaDias = dataAtual.getDate() - dataInserida.getDate();
    if(saidaDias < 0){
        saidaDias *= -1;
    }

    var saidaMes = dataAtual.getMonth() - dataInserida.getMonth();
    if(saidaMes < 0){
        saidaMes *= -1;
    }

    var saidaAno = dataAtual.getFullYear() - dataInserida.getFullYear();
    
    if (dataInserida > dataAtual) {
        alert("Insira uma data válida!");
    } else {
        window.document.getElementById("years_number").innerHTML = saidaAno;
        window.document.getElementById("months_number").innerHTML = saidaMes;
        window.document.getElementById("days_number").innerHTML = saidaDias;

        window.document.getElementById("years_phrase").innerHTML = " years";
        window.document.getElementById("months_phrase").innerHTML = " months";
        window.document.getElementById("days_phrase").innerHTML = " days";
    }
}