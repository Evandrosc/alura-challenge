function criptografar() {
    var texto = document.getElementById("input").value.toLowerCase();
    
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    document.getElementById("imagem").style.display = "none";
    document.getElementById("h3").style.display = "none";
    document.getElementById("paragrafo").style.display = "none";
    document.getElementById("output").style.display = "block";
    document.getElementById("output").innerHTML = txtcifrado;
    document.getElementById("input").innerHTML = " ";
    document.getElementById("botao-copiar").style.display = "block";
}

function descriptografar() {
    var texto = document.getElementById("input").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
    document.getElementById("imagem").style.display = "none";
    document.getElementById("h3").style.display = "none";
    document.getElementById("paragrafo").style.display = "none";
    document.getElementById("output").style.display = "block";
    document.getElementById("output").innerHTML = txtcifrado;
    document.getElementById("botao-copiar").style.display = "block";
  }

const botaoCopiar = document.getElementById("botao-copiar");
const output = document.getElementById("output");

botaoCopiar.addEventListener("click", async function(){
    try {
    await navigator.clipboard.writeText(output.value);
    botaoCopiar.innerHTML = "Copiado";
    botaoCopiar.style.backgroundColor = "green";
    botaoCopiar.style.color = "white";
    setTimeout(function(){
        botaoCopiar.innerHTML = "Copiar";
        botaoCopiar.style.backgroundColor = "";
        botaoCopiar.style.color = "";
    }, 2000);
    } catch (err) {
    console.error('Não foi possível copiar o texto: ', err);

    }
});