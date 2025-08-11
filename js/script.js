
 function executar(){
 
  var nome = document.getElementById("nome").value;

  var telefone = (  document.getElementById("telefone").value   );

  var teste = telefone.startsWith("11")

  if (telefone.startsWith("11") ) {

    alert(telefone);
    console.log(nome);
    console.log(telefone);

  } else {

    alert("DDD não é 11.");

  }

}