function obterPedidos(){
   const promise = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");
   promise.catch(erro =>{alert(erro)
   });
   promise.then(resposta =>{
      let div = document.getElementsByClassName('ultimosPedidos');
      const pedidos = resposta.data;
      for(let i of pedidos){
         for(let i of div){
            i.innerHTML = `<img src="${pedidos[0].image}" width="180px" height="180"> 
            <p>criador:${pedidos[0].owner}</p>`;         
         }
      }
      console.log(pedidos[0].image);
   })
}
obterPedidos();

function nome(){ 
    var nome = prompt("Digite seu nome: ");
}
nome();
//------------variáveis globais --------------//
 var modelo=null;
 var gola=null;
 var tecido=null;
 //---------------trocar a borda modelo--------------------//
 function escolherTshirt(){
    document.getElementById("t-shirt").style.borderColor = "#404EED";
    document.getElementById("camiseta").style.borderColor = "#C4C4C4";
    document.getElementById("mangaLonga").style.borderColor = "#C4C4C4";
    modelo="t-shirt";
 }
 function escolherCamiseta(){
    document.getElementById("t-shirt").style.borderColor = "#C4C4C4";
    document.getElementById("camiseta").style.borderColor = "#404EED";
    document.getElementById("mangaLonga").style.borderColor = "#C4C4C4";
    modelo="camiseta";
 }
 function escolherMangaLonga(){
    document.getElementById("t-shirt").style.borderColor = "#C4C4C4";
    document.getElementById("camiseta").style.borderColor = "#C4C4C4";
    document.getElementById("mangaLonga").style.borderColor = "#404EED";
    modelo="mangaLonga";
 }
 //----------------trocar a borda gola--------------------//
 function escolherGolaV(){
    document.getElementById("golav").style.borderColor = "#404EED";
    document.getElementById("golaRedonda").style.borderColor = "#C4C4C4";
    document.getElementById("golaPolo").style.borderColor = "#C4C4C4";
    gola="golav";
 }
 function escolherGolaRedonda(){
    document.getElementById("golav").style.borderColor = "#C4C4C4";
    document.getElementById("golaRedonda").style.borderColor = "#404EED";
    document.getElementById("golaPolo").style.borderColor = "#C4C4C4";
    gola="golaRedonda";
 }
 function escolherGolaPolo(){
    document.getElementById("golav").style.borderColor = "#C4C4C4";
    document.getElementById("golaRedonda").style.borderColor = "#C4C4C4";
    document.getElementById("golaPolo").style.borderColor = "#404EED";
    gola="golaPolo";
 }
  //----------------trocar a borda tecido--------------------//
  function escolherSeda(){
    document.getElementById("seda").style.borderColor = "#404EED";
    document.getElementById("algodão").style.borderColor = "#C4C4C4";
    document.getElementById("poliéster").style.borderColor = "#C4C4C4";
    tecido="seda";
 }
 function escolherAlgodao(){
    document.getElementById("seda").style.borderColor = "#C4C4C4";
    document.getElementById("algodão").style.borderColor = "#404EED";
    document.getElementById("poliéster").style.borderColor = "#C4C4C4";
    tecido="algodão";
 }
 function escolherPoliester(){
    document.getElementById("seda").style.borderColor = "#C4C4C4";
    document.getElementById("algodão").style.borderColor = "#C4C4C4";
    document.getElementById("poliéster").style.borderColor = "#404EED";
    tecido="poliéster";
 }
//--------muda cor do botão enviar-----------//
document.getElementById("texto").focus();

function link(){ 
   valor=document.getElementById('texto').value;
   if (modelo !== null && gola !== null && tecido !== null && valor.startsWith("https")){
      document.getElementById("botão").style.background = "#404EED";
   }else{
      document.getElementById("botão").style.background = "#C4C4C4";
   }
}
//-------alert na tela após o click-------------
function confirmação(){
   if(modelo !== null && gola !== null && tecido !== null && valor.startsWith("https")){
      alert("Encomenda confirmada, obrigado! ^^");
   }
}
//-----------enviar pedido-------------
// function enviarPedido() {
//    const input = document.querySelector("footer input");
//    const mensagem = input.value;
//    const promise = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts"), {
//       "model": "t-shirt" | "camiseta" | "mangaLonga",
//       "neck": "golav" | "golaRedonda" | "golaPolo",
//       "material": "seda" | "algodão" | "poliéster",
//       "image": string no formato de url,
//       "owner": string,
//       "author": string
//       }  
//    }
// }