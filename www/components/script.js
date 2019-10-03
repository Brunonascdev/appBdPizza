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
        itemlista += "<option value="+dados.codigo+" title"+dados.sabor+" alt"+dados.valor+">"+dados.sabor+"</option>"
      });
      $("#selectListas").html(itemlista);
    },
    // caso erro
    error: function(data){
      navigator.notification.alert("Erro ao buscar registros!");
    }
  });
}

$(document).on("click", "#registerPizza", function(){
  $("#codigo").removeAttr('readonly');
  $("#sabor").removeAttr('readonly');
  $("#preço").removeAttr('readonly');
});

 $(document).ready(function (){
    carregaLista();
        $.ajax({
    type:"post", // Como vai enviar os dados
    url:"https://appbdpizzaria.000webhostapp.com/listar.php", // pra onde vai enviar
    dataType:"json", // o que eu vou enviar
    // caso sucesso
    success: function(data){ 
    $( ".listas" ).change(function() {
      var cd = $("select option:selected").val();
      $("#codigo").val(cd);
      var sabor = $("select option:selected").text();
      $("#sabor").val(sabor);
      var preço = '';
      $.each(data.pizzas, function(i,dados){
        if (cd == dados.codigo){
          preço = this.valor;
        }
      });
      $("#preço").val(preço);
    });
    },
    // caso erro
    error: function(data){
      navigator.notification.alert("Erro ao buscar registros!");
    }
  });
    
});




