function calcular(){
    let capital = parseFloat(document.getElementById("capitalInicial").value);

    let txJuros = parseFloat(document.getElementById("taxaJuros").value);

    let periodo = parseInt(document.getElementById("periodo").value);
    
    let tempo = parseInt(document.getElementById("tempo").value);

    //let prPeriodo = document.querySelector('input[name="tipoPr"]:checked').value;
    
    let juros = (capital * (txJuros / 100) * periodo);

    let jurosAcumulado = (tempo * juros);
    
    resultado.innerHTML = juros;
    jurosAcu.innerHTML = jurosAcumulado;
}