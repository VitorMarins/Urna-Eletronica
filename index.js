const som = new Audio("urna.mp3");
          function confirma(){
            var valor1 = document.getElementById("campo1").value;
            var valor2 = document.getElementById("campo2").value;
            if (valor1 != "" & valor2 != ""){
            som.play("urna.mp3")
            alert("Confirmado o Voto no candiato " + document.getElementById("campo1").value + document.getElementById("campo2").value);
            document.getElementById("campo1").value = "";
            document.getElementById("campo2").value = "";
            }
          }
          function inserir(valor){
            var valor1 = document.getElementById("campo1").value;
            var valor2 = document.getElementById("campo2").value;
            if(valor1 == "") {
              document.getElementById("campo1").value = valor;
            } else if(valor2 == ""){
              document.getElementById("campo2").value = valor;
            }
          }
          function corrigir(){
            document.getElementById("campo1").value = "";
            document.getElementById("campo2").value = "";
          }
          function branco(){
            som.play("urna.mp3")
            alert("Confirmado o Voto Branco");
            document.getElementById("campo1").value = "";
            document.getElementById("campo2").value = "";
          }