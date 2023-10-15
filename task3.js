// let myKey = localStorage.getItem('myKey');

// if(myKey === null) {
//   let welcome = prompt(`Добро пожаловать! Назовите, пожалуйста, ваше имя`);
//   let today = new Date();

//   const jsonString = `{
//   "name": ${welcome},
//   "date": ${today}
//   }`;
// localStorage.setItem('myKey', jsonString)
// }
// else {
//   alert(`Добрый день, ${myKey.name}! Давно не виделись. В последний раз вы были у нас ${myKey.date}`);

// 	const jsonString = `{ 
//   "name": ${myKey.name},
//   "date": ${new Date()}
//   }`;
//   localStorage.setItem('myKey', jsonString);
// }


let myKey = localStorage.getItem('myKey');
let setDate =localStorage.getItem('setDate');
// let welcome
// let today 

if (myKey === null) {
  let welcome = prompt(`Добро пожаловать! Назовите, пожалуйста, ваше имя`);
  let today = new Date();

localStorage.setItem('myKey', welcome);
localStorage.setItem('setDate', today);

}
else {
  alert(`Добрый день, ${myKey}! Давно не виделись. В последний раз вы были у нас ${setDate}`);
  today = new Date();
  localStorage.setItem('setDate', today);
};

