$(document).on("click", "#register", function(){
  var parametros = {
    "sabor":$("#nome").val(),
    "valor":$("#valor").val()
  };

  $.ajax({
    type:"post", // Como vai enviar os dados
    url:"https://appbdpizzaria.000webhostapp.com/cadastro.php", // pra onde vai enviar
    data:parametros, // o que eu vou enviar
    // caso sucesso
    success: function(data){ 
      navigator.notification.alert(data);
      $("#nome").val("")
      $("#valor").val("")
    },
    // caso erro
    error: function(data){
      navigator.notification.alert("Erro ao cadastrar!");
    }
  });
});

function carregaLista(){
    $.ajax({
    type:"post", // Como vai enviar os dados
    url:"https://appbdpizzaria.000webhostapp.com/listar.php", // pra onde vai enviar
    dataType:"json", // o que eu vou enviar
    // caso sucesso
    success: function(data){ 
      var itemlista = "";
      $.each(data.pizzas, function(i,dados){
        itemlista += "<option value="+dados.codigo+">"+dados.sabor+"</option>"
      });
      $("#selectListas").html(itemlista);
    },
    // caso erro
    error: function(data){
      navigator.notification.alert("Erro ao buscar registros!");
    }
  });
}


