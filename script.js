/* function Dolar() {
    var valor = document.getElementById("valor").value;
    var valorConvertido = valor * 5.25; // Example conversion rate
    document.getElementById("valorConvertido").innerText = "Valor em Dólar: $" + valorConvertido.toFixed(2);
}

function Euro() {
    var valor = document.getElementById("valor").value;
    var valorConvertido = valor * 6.20; // Example conversion rate
    document.getElementById("valorConvertido").innerText = "Valor em Euro: €" + valorConvertido.toFixed(2);
}

function Bitcoin() {
    var valor = document.getElementById("valor").value;
    var valorConvertido = valor * 0.000008; // Example conversion rate
    document.getElementById("valorConvertido").innerText = "Valor em Bitcoin: ₿" + valorConvertido.toFixed(8);
} */

function Dolar() {
    let valor = document.getElementById("valor").value;
    let valorConvertido = valor * 5.25; // peguei o valor obtido do usuário e multipliquei pela cotação do dolar atural
    document.getElementById("valorConvertido").innerText = "Valor em Dólar: $" + valorConvertido.toFixed(2); // exibindo o valor convertido em dolar arredondado para 2 casas decimais


}