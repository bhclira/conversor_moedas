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

function convertToDolar() {
    let valor = document.getElementById("valor").value;
    let valorConvertido = valor * 5.25; // peguei o valor obtido do usuário e multipliquei pela cotação do dolar atural
    document.getElementById("valorConvertido").innerText = "Valor em Dólar: $" + valorConvertido.toFixed(2); // exibindo o valor convertido em dolar arredondado para 2 casas decimais
}

function convertToEuro() {
    let valor = document.getElementById("valor").value;
    let valorConvertido = valor *6.20; // peguei o valor obtido do usuário e multipliquei pela cotação do euro atual
    document.getElementById("valorConvertido").innerText = "Valor em Euro: €" + valorConvertido.toFixed(2); // exibindo o valor convertido em euro arredondado para 2 casas decimais e joga pro html

}

function convertToBitcoin() {
    let valor = document.getElementById("valor").value;
    let valorConvertido = valor * 0.000008; // peguei o valor obtido do usuário e multipliquei pela cotação do bitcoin atual
    document.getElementById("valorConvertido").innerText = "Valor em Bitcoin: ₿" + valorConvertido.toFixed(8); // exibindo o valor convertido em bitcoin arredondado para 8 casas decimais e joga pro html
}

function limparCampos() {
    document.getElementById("valor").value = "";
    document.getElementById("valorConvertido").innerText = "Valor Convertido:";
}