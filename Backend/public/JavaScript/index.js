 window.addEventListener("load", function() {
     const logo = document.getElementById("inputjs");

     logo.addEventListener("keydown", function(e) {
         console.log("Clicou na tecla: " + e.key)
     });
     logo.addEventListener("keypress", function(e) {
         console.log("segurou na tecla: " + e.key)
     });
     logo.addEventListener("keyup", function(e) {
         console.log("Soltou na tecla: " + e.key)
     });
 });