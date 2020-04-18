// Numero no visor
   function calcNum(num) {
      if (typeof gvisor == 'undefined') {
         document.calcform.visor.value = '';
      }
      document.calcform.visor.value = document.calcform.visor.value + num;
      gvisor = 1;
   }

// Função Limpar
   function calcLimpar() {
      document.calcform.visor.value = '';
      delete gvalor;
      delete goper;
      delete gvisor;
   }
// Função para operações da calculadora
   function calcOper(oper, valor1, valor2) {
      if (oper == "somar") {
         var valor = parseFloat(valor1) + parseFloat(valor2);
      } else {
         if (oper == "subtrair") {
            var valor = valor1 - valor2;
         } else {
            if (oper == "multiplicar") {
               var valor = valor1 * valor2;
            } else {
               var valor = valor1 / valor2;
            }
         }
      }

      return(valor);
   }

// Função de "passagem" das ações do usuário
function calcParse(oper) {
   var valor = document.calcform.visor.value;
   delete gvisor;

   if (typeof goper != 'undefined' && oper == 'resultado') {
      gvalor = calcOper(goper, gvalor, valor);
      document.calcform.visor.value = gvalor;
      delete oper;
      delete gvalor;
      return(0);
   }

   if (typeof gvalor != 'undefined') {
      gvalor = calcOper(goper, gvalor, valor);
      goper = oper;
      document.calcform.visor.value = gvalor;
   } else {
      gvalor = valor;
      goper = oper;
   }

}