function criptografar() {
    var texto = document.getElementById("input").value.toLowerCase();
    //i es para que afecte a tanto mayus como minus
    //g afecta a toda la linea
    //m afecta a multiples lineas
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
    /* document.getElementById("input").innerHTML = " "; */
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
    /* document.getElementById("inputtexto").innerHTML = " "; */
    document.getElementById("botao-copiar").style.display = "block";
  }

const botaoCopiar = document.getElementById("botao-copiar");
const output = document.getElementById("output");
const message = document.getElementById("mensagem");

botaoCopiar.addEventListener("click", async function(){
    try {
    await navigator.clipboard.writeText(output.value);
    mensagem.innerHTML = "Texto copiado";
    mensagem.style.display = "inline-block";
    setTimeout(function(){
        mensagem.style.display = "none";
    }, 2000);
    } catch (err) {
    console.error('Não foi possível copiar o texto: ', err);
    mensagem.innerHTML = "Erro ao copiar o texto";
    mensagem.style.display = "inline-block";
    setTimeout(function(){
        mensagem.style.display = "none";
    }, 2000);
    }
});
  
  
  


/* // Obtenha o botão de criptografia/descriptografia
const encryptionButton = document.getElementById("botao-criptografar");

// Obtenha a imagem e o cabeçalho
const image = document.getElementById("imagem");
const header = document.getElementById("h3");
const copiar = document.getElementById("copiar");

// Adicione um ouvinte de evento de clique ao botão
encryptionButton.addEventListener("click", function() {
    // Esconda a imagem e o cabeçalho
    image.style.display = "none";
    header.style.display = "none";
    copiar.style.display = "block";
}); */
