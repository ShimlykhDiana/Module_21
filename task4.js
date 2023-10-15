/* Создать Promise, в котором c задержкой в три секунды сгенерировать 
случайное целое число от 1 до 100. 
Для создания задержки использовать setTimeout. 
Если сгенерированное число четное — Promise выполнится успешно 
(resolve), если нечетное — выполнится с ошибкой (reject). 
После разрешения Promise обработать результат его выполнения и 
вывести сообщение в консоль:

«Завершено успешно. Сгенерированное число — number», 
если Promise завершился успешно. 
Вместо number подставить сгенерированное число
«Завершено с ошибкой. Сгенерированное число — number»,
 если Promise завершился с ошибкой. Вместо number подставить
  сгенерированное число */
  function round() { 
    return Math.round(Math.random()* 100);
   };
   let randomNumber;

function delay() {
    console.log(round)
};

   const myPromise = new Promise ((resolve, reject) => {
   randomNumber = round();
    if (randomNumber % 2 == 0) {
    setTimeout((delay) => {
    resolve (randomNumber);
    } ,3000);
    } else {
        setTimeout((delay) => {
            reject (randomNumber);
            } ,3000);
    }
   });

   myPromise
   .then((result)=> {
    console.log("Завершено успешно. Сгенерированное число — " + result);
   })
   .catch ((error)=> {
    console.log("Завершено с ошибкой. Сгенерированное число — " + error);
   })
   .finally(()=> {
    console.log("Так работает асинхронный код");
   });
// if ( round % 2 == 0) {
//     return new Promise ((resolve, reject) => {
//         resolve (`Завершено успешно. Сгенерированное число — ${num}`);    
//        });
// }
// else {
//         reject (`Завершено с ошибкой. Сгенерированное число — ${num}`);    
    
// }

 
// setTimeout(delay, 3000);

// function delay() {
//     console.log(round)
// };

//   const randomNumber = () => {
//     return new Promise ((resolve, reject) => {
//      resolve ('Завершено успешно. Сгенерированное число — ${even}');    
//     });
//   };