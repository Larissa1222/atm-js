// Cash Machine
// O Problema
// Desenvolva uma aplicação que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico.

// Sua aplicação deve:

// Entregar sempre o menor número de notas possíveis
// Sacar valores apenas com as notas disponíveis
// Ter saldo do cliente infinito
// Ter quantidade de notas infinita
// Possuir apenas notas de R$ 100,00, R$ 50,00, R$ 20,00 e R$ 10,00
// Retornar mensagens de erro em caso de entradas inválidas
// Observação:

// Exemplos:
// Entrada: 30.00
// Resultado: [20.00, 10.00]

// Entrada: 80.00
// Resultado: [50.00, 20.00, 10.00]

// Entrada: 125.00
// Resultado: Erro de notas indisponíveis

// Entrada: -130.00
// Resultado: Erro de valor inválido

// Entrada: NULL
// Resultado: Erro de valor nulo


let btnClear = document.getElementById('clear');        //CLEAR BUTTON
let btnConfirm = document.getElementById('confirm');    //CONFIRM BUTTON
let display = document.getElementById('displayer');
let bDisplay = document.getElementById('bills-displayer');
let valueInput;

document.querySelectorAll('.btn').forEach(btn => {      //EVERY TIME USER CLICK ANY NUMBER BUTTON
  btn.addEventListener('click', () => {                 //WILL SHOW ON INPUT
    display.value = display.value + btn.innerHTML;
  });
});

btnClear.addEventListener('click', () => {           //CLEAR BUTTON
  display.value = '';
  bDisplay.innerText = '';
});

btnConfirm.addEventListener('click', () => {        //CONFIRM BUTTON
  bDisplay.innerHTML = '';
  valueInput = display.value;
  
  if(valueInput >= 10){   //VALUE HAS TO BE ABOVE OR EQUAL 10 TO RUN THIS FUNCTION BELOW
    resultValue(valueInput);
  }else{
    alert('INVALID VALUE, TYPE A VALUE ABOVE 10');
    display.value = '';
  }
});

function resultValue(value) {
  if(value % 10 == 0) {//IF VALUE CAN'T BE DIVIDED BY 10, THEN WILL NOT EXCECUTE THE CODE BELOW
    while(value > 0){  //LOOP FOR CALCULATE QUANTITY OF MONEY BILLS, THIS LOOP WILL STOP ONLY IF THE VALUE
                       // IS EQUAL TO ZERO
      if(value >= 100){
        value = value - 100;    //SUBTRACT ONE HUNDRED FROM THE ORIGINAL VALUE 
        bDisplay.innerText = bDisplay.innerText + ' $100';//SHOW RESULT ON DISPLAY 

      }else if(value >= 50){
        value = value - 50;     //SUBTRACT FIFTY FROM THE ORIGINAL VALUE
        bDisplay.innerText = bDisplay.innerText + ' $50';//SHOW RESULT ON DISPLAY 

      }else if(value >= 20){
        value = value - 20;     //SUBTRACT TWENTY FROM THE ORIGINAL VALUE
        bDisplay.innerText = bDisplay.innerText + ' $20';//SHOW RESULT ON DISPLAY 

      }else if(value >= 10){
        value = value - 10;     //SUBTRACT TEM FROM THE ORIGINAL
        bDisplay.innerText = bDisplay.innerText + ' $10';//SHOW RESULT ON DISPLAY 
      }   
    }
  }else{
    alert('Value unavailable');
    display.value = '';
    btnClear();
  }  
}