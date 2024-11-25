/* function calculator () {
   let num1  = +prompt("Введие  первую цифру :")
   let tanba = prompt("Введите знак :")
   let num2 = +prompt("Введие  вторую цифру :")
  let result;


  while(tanba )
    if( tanba == "+" ){
        result =  num1 + num2 
}else if (  tanba === "-" ){
   result =  num1 + num2 
 }else if (  tanba === "/" ){
   result =  num1 + num2 }
   else if (  tanba == "*" ){
      result =  num1 + num2 
   } else{
      alert ("Қате ")
   }
      alert (`результат ${result}`)
      return result 

   }
 calculator (result);

function secretNumber() {
    let secret = 80;
    let attemps = 0
  

    while (true)  {
        let user = +prompt("Найдите секретную цифру от 1 до 100: ");
      

        if (user === secret) {
            alert(`Правильно! Вот ваш результат : ${attemps} попытки ` );
            break;
        } else if (user >= secret - 5 && user <= secret + 5) {

            alert("Сәл жоғары");
            attemps++

        } else {
            alert("Сәл төмен");
       
        }
    } user += attemps
}  
 
secretNumber ();


function number () {
   let a = 10
   let b = 15

   if ( a == b ) {
      alert (a)
   }else if ( b == a ) {
      alert (b)
   }

}number();*/



function superMarket () {
   let user = prompt("Введите продукты которые вы приобрели ")
   let costs = +prompt("Введите цену для получения скидки ")
   let skidki;

   if (user =+ 5000){
      skidki++
      skidki = user / costs
      return skidki 
   }else if (user =+ 10000) {
      skidki++
      skidki = user / costs
      return skidki 
   }
}