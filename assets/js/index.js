$(document).ready(function(){$("#buscarEnderecoBTN").click(function(){var n=$("#CEP").val();if(""!=n){new BuscaEndereco(n).busca()}}),$("#banner").load("http://localhost:3000/banner")});