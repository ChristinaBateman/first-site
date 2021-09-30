
// let num = 0; //number
// let str = 'asdasd' //string
// let bool = false; //boolean
// let big = BigInt(10n); //bigint
// let n = null; //null
// let un2; //undefined
// let s = Symbol('test') //symbol
// let o = {} //object
// let user = { 
//     name: 'Vasya', 
//     age: 13, 
//     sum: 10,
//     hasMarried: false, 
//     hasMoney: null,
// }

// console.log(test, 'innner')



// let counter = 1;
// let a = ++counter; // (*) меняем ++counter на counter++

// console.log(a); // 1
// console.log(counter)





// let message = (login == 'Сотрудник') ? 'Привет':
// (login == 'Директор') ? 'Здравствуйте':
// (login == '') ? 'Нет логина':
// '';

// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';



const age = +prompt()

if (!(age >= 14 && age <= 90)) {
    alert('true');
} else {
    alert('false');
}