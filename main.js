/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/



//---------------------оператори---------------------------------//


//&& - І
//|| - або
//! - заперечення



//===============ПАРАМЕТРИ ТА АРГУМЕНТИ ДЛЯ ФУНКЦИЇ==================//
//function sayHi(name) {
//   console.log(`привіт, ${name}! Як твої справи?`)
//}

//sayHi(`makr`)
//sayHi(`bob`)

//================================================================//

//---------------------return---------------------------------//

//function summ(a, b, c) {
//   const result = a + b - c;
//   return result
//}

//let res = summ(20, 15, 10)
//console.log(res);

//================================================================//

//---------------------ФУНЦІЯ ЯК АРГУМЕНТ--------------------------//

//function summ(a, b,) {
//   return a + b;
//}

//const result = summ(summ(15, 10), summ(25, 30));
//console.log(result);

//================================================================//

//---------------------СТРІЛОЧНІ ФУНЦІЇ--------------------------//

//const arrsayHi = (name) => {

//   console.log(`привіт, ${name}! Як твої справи?`);
//}

//arrsayHi(`mark`);

//================================================================//
//---------------------МАСИВИ--------------------------//

//const autoBrand1 = `audi`;
//const autoBrand2 = `BMW`;
//const autoBrand3 = `MAZDA`;
//const autoBrand4 = `TOYOTA`;

//const autoBrands = [`audi`, `BMW`, `MAZDA`, `TOYOTA`];
//console.log(autoBrands)

//--------------------- МЕТОДИ МАСИВІВ--------------------------//

/*
.push(), .pop(), .shift(), .splice(), .forEach(), .indexOf(),
.includes()
*/

/*
arr.push(...items ) - Добавить елемент кінець масиву
arr.pop() - Удалить елемент з кінця масиву
arr.shift() - Удалить елемент з початку масиву
arr.unshift(... items) - Добавить елемент на початок масиву
arr.splice([start]],[deletedCount. newElements])
*/

//const autoBrands = [`audi`, `BMW`, `MAZDA`, `TOYOTA`];
//console.log(autoBrands)

//autoBrands.push(`nissan`);
//console.log(autoBrands)


/*

let usersOne = ['vanya', 'lola', 'vanyasdsaa', 'loasdasla',];

usersOne.splice(6, 1, 'loshara')


//arrNew.push('bazar')

console.log(usersOne)
*/



//================================================================//

//---------------------ЦИКЛИ--------------------------//

//for (let i = 0; i < 10; i++) {
//console.log(i)
// }

//--------------------- ОБХІД МАСИВА ЦИКЛОМ for------------------------//

//const autoBrands = [`audi`, `BMW`, `MAZDA`, `TOYOTA`, `nissan`];

//for (let i = 0; i < autoBrands.length; i++) {
//   console.log(autoBrands[i])
//}

//--------------------- ОБХІД МАСИВА ЦИКЛОМ for (of)------------------------//

//const autoBrands = [`audi`, `BMW`, `MAZDA`, `TOYOTA`];
//for (let item of autoBrands) {
//   console.log(item)
//}

//================================================================//

//---------------------ОБЄКТИ--------------------------//
/*--СВОТВА ОБЄКТІВ--*/

//let userName = `Makr`;
//let age = 30;
//let isMarried = false;
//-----------------------//
//const persone = {
//   userName: `Makr`,
//   age: 30,
//   isMarried: true
//}

//console.log(persone)

//--------------------- МЕТОДИ В ОБЄКТАХ--------------------------//
//const persone = {
//   userName: 'Makr',
//   age: 30,
//  isMarried: true,
/*МЕТОД*/
//  sayHi: function (name) {
//    console.log(`hello, ${name}`)
//   }
//};

//persone.sayHi('klcsd')

/*--або--*/

//persone.sayHi = function () {
//   console.log(`hello`)
//}
//persone.sayHi()

//---------------------КЛЮЧОВЕ СЛОВО this--------------------------//

//const persone = {
//   userName: 'Makr',
//   age: 30,
//   isMarried: true,
//   /*МЕТОД*/
//   sayHi: function (name) {
//      console.log(this)
//      console.log(`hello, ${name} мене звати ${this.userName}.`);
//   }
//};

//persone.sayHi('Данило')

//---------------------ОБЄКТИ ОБХІД ЦІКЛИВ FOR IN (НЕ ПЛУТАТІ З for of)--------------------------//

//const persone = {
//   userName: 'Makr',
//   age: 30,
//  isMarried: true,
//  /*МЕТОД*/
//   sayHi: function (yourname) {
//      console.log(this)
//     console.log(`hello, ${yourname} мене звати ${this.userName}.`);
//   }
//};
//
//for (let key in persone) {
//   console.log(key, ':', persone[key])
//}


//------------------КЛАСИ. КОСТРУКТОРИ ОБЄКТІВ-------------------//


//class Persone {
//   constructor(userName, age, isMarried) {
//      this.userName = userName;
//      this.age = age;
//      this.isMarried = isMarried;
//   }
//
//   sayHi(name) {
//      console.log(`hello, ${name} мене звати ${this.userName}.`);
//   }
//}
//
//const persone1 = new Persone('Dark', 45, true)
//console.log(persone1)
//persone1.sayHi('dada')

//================================================================//

//------------------ВИБІР DOM ЕЛЕМЕНТІВ-------------------//

/*--ВИБІР ОДНОГО ДОМ ЕЛЕМЕНТА ПО СЕЛЕКТРУ--*/

//const heading3 = document.querySelector('h3');
//heading3.classList.add('red')

/*--ВИБІР КОЛЕКЦІІ ЕЛЕМЕНТІИВ--*/

//const headings = document.querySelectorAll('h2');
//
//for (let item of headings) {
//   item.classList.add('red-text')
//}

//const paragraphs = document.querySelectorAll('p')

//for (let p of paragraphs) {
//   p.classList.add('green-text')
//}

/*
Навігация по documentHTML

...ChildNods - пошук всіх узлів,які знаходяться в body
...children - пошук всіх елементів

метод closest() шукає ближнього предка по класу
*/

 

//------------------ІНШІ МЕТОДИ-------------------//

//document.getElementsByClassName() // вибір елементу по css класу
//document.getElementsByTagName()  // вибір елементу по тегу
//document.getElementById()       // вибір елементу по  ID
//================================================================//

//--------------------РОБОТА З CSS КЛАСАМU-------------------//

/*
element.classlist.add()

.add() - добаляє css класи

.remove() -  удаляє css  класи

.toggle() - перемикає css  класи

.contains() -  повертає тру або фолс

*/

//const heading = document.querySelector('h1')
//heading.classList.add('red-text')
//heading.classList.toggle('green-text')

//================================================================//

//--------------------РОБОТА З АТРИБУТАМИ-------------------//
/*
getAttribute(attrName) - повертаєм значення вказаного атрибута

setAttribute(name, value) - добавляєм вказаний атрибут і його значення до елементу

hasAttribute(attrName) - повертаємо тру при наявновсті у елемента вказаного атрибута

removeAttribute(attrName) - видаляємо вказаний атрибут

*/


//================================================================//

//--------------------РОБОТА З ПРОСЛУХОВУВАННЯМ ПОДІЙ-------------------//

/*
item.addEventListener('ckick', listener, options, function)

      //Or//
item.onclick =
*/

//-------------event------------------//

//item.addEventListener('ckick', function(event) {
//console.log(this);
//console.log(event);
//console.log(event.target);
//})

//================================================================//
//-----практика---------//

//const todolist = document.querySelector('#todo-list');
//const todoForm = document.querySelector('#todo-form');
//const todoInput = document.querySelector('#todo-input');

//todoForm.addEventListener('submit', formHandler);

//function formHandler(ev ent) {
//   event.preventDefault();

//Отриймуєм назву задачі з инпута
//  const taskText = todoInput.value;

//Створюєм тег li через розмітку
//   const liHTML = `<li>${taskText}</li>`

//Добавляємо розмитку на сторінку
//  todolist.insertAdjacentHTML(`beforeend`, liHTML)

//Очищажмо полн вооду
//  todoInput.value = ''

//  todoInput.focus()
//}

//================================================================//

//--------------------setInterval-------------------//

//const timeIntervalId = setInterval(function () {
//    console.log('fired')
//}, 1000)

//clearInterval(timeIntervalId)

//--------------------setTimeOut-------------------//

//setTimeout(function () {
//   console.log('setTimeout fired')
//}, 2000)

//--------------------setInterval + setTimeOut-------------------//

//const timerId = setInterval(function () {
//   console.log('setInterval fired!')
//}, 1000)


//setTimeout(function () {
//   clearInterval(timerId)
//}, 10000)


//========================================================================================//
//-------------------------------------практика------------------------------------------//

//const counterElement = document.querySelector('#counter')
//let counter = 0;
//let timerID;
//
//START
//const btnStart = document.querySelector('#start')
//btnStart.onclick = function () {
//   timerID = setInterval(function () {
//      //counter = counter + 1 //
//      //counter++//
//      counter += 1;
//      counterElement.innerText = counter
//
//   }, 1000)
//}


//PAUSE
//const btnPause = document.querySelector('#pause')
//btnPause.onclick = function () {
//  clearInterval(timerID)
//}

//RESET

//const btnReset = document.querySelector('#reset')
//btnReset.onclick = function () {
//   counter = 0;
//   counterElement.innerText = counter
//  clearInterval(timerID)
//}

//================================================================//

//--------------------callback. callback hell-------------------//

//setTimeout(function () {
//  console.log('Step1')
//   setTimeout(function () {
//      console.log('Step2')
//      setTimeout(function () {
//         console.log('Step3')
//      }, 1000)
//   }, 1500)
//}, 2000)

//------------------------------------------------------------------------------//

/*const chekRoom = new Promise(function () {
   setTimeout(function () {
      console.log('perevirka nomera hotels')
      const availableRooms = false;
      console.log(availableRooms)


      if (availableRooms) {
         console.log('there are rooms')
      } else {
         console.log('there is no room')
      }
   }, 1500)
})*/

//================================================================//
//--------------------async   functoin. Асинхроні функціїю Використання промисівю-------------------//

/*function promiseFunction() {
   return new Promise(function (resolve, reject) {
      setTimeout(() => {
         const result = false;
         if (result) {
            resolve('done')
         } else {
            reject('falt')
         }
      }, 1500);
   });

}/


async function startPromise() {
   try {
      let result = await promiseFunction();
      console.log(result)
   } catch (err) {
      console.log(err)
   }

}
startPromise();*/

//--------------------ДЕКІЛЬКА  АСИНХРОНИХ ОПЕРАЦІЙ. СЕРІЇ ПРМИСІВ-------------------//

//function checkRooms() {
//   return new Promise(function (resolve, reject) {
//      setTimeout(() => {
//         console.log('we check the hotel rooms...')
//         const availableRooms = true;

//         if (availableRooms) {
//           resolve('there are rooms')
//        } else {
//           reject('there are no rooms')
//        }
//      }, 1500);
//   });

//}

//function checkTickets(data) {
//   return new Promise(function (resolve, reject) {
//      setTimeout(() => {
//         console.log('qwdqwdqdq')
//         console.log('повертає те що зверху', data)
//
//         console.log('перевіряємо білети')
//
//         let availableTickets = true;
//
//         if (availableTickets) {
//            let message = ('there are ticket')
//            resolve(message)
//       } else {
/*        let message = ('there are no ticket')
          reject(message)
       }
    }, 1000);
 });

}

function submitVacation(data) {
 console.log('submitVacation')
 console.log('повертає те що зверху', data)
 console.log('їдем у відпустаку')
}

function canselVacation(data) {
 console.log('canselVacation')
 console.log('повертає те що зверху', data)
 console.log('відпустка відміняється')
}

async function checkVacation() {
 try {
    let roomsResult = await checkRooms();
    let ticketsResult = await checkTickets(roomsResult);
    submitVacation(ticketsResult)
 } catch (err) {
    canselVacation(err)
 }
}

checkVacation()
*/

//================================================================//


/*let userInfo = {
   name: 'lana',
   age: 'age',
}


let Soursnum = 1.005 + Number.EPSILON;
let numOne = Math.round(Soursnum * 100) / 100;

console.log(numOne);

let value = parseFloat('135.58px');
console.log(value);
console.log(typeof value);

let numTwo = Math.floor(58.858);

console.log(numTwo);

let numThree = (10, 58, 39, -150)

console.log(Math.max(numThree));
console.log(Math.max(10, 58, 39, -150));

*/

/*let value = 58 + "Фриланесер по жизни";
if (58 + "Фриланесер по жизни" !== NaN) {
   console.log('результат NaN');
} */

/*let fls = 'asjkcsabn';
let text = `'hello! ${fls}'`;

console.log(text);


let textUpercase = 'dsjcksdcjk';

console.log(textUpercase.toUpperCase());

let Title = 'фрилансер';

console.log(Title.includes('лан', ));
*/



