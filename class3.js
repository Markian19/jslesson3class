// // зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//
let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// console.log(numbers);
//
// // 1. перебрати його циклом while
//
// let i = 0;
// while (i < numbers.length){
//     console.log(numbers[i]);
//     i++;
//     // console.log(number)
// }
//
// // 2. перебрати його циклом for
// document.write('<ul>')
//
// for (let i = 0; i<numbers.length;i++){
//   document.write(`<li>${numbers[i]}</li>`)
//     console.log(numbers[i])
// }
// document.write('</ul>');

// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//  i = 0;
// while (i < numbers.length) {
//     if (i % 2  !==0)
//        console.log(numbers[i]);
//     i++
// }
//
//
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
//  for(i =0;i<numbers.length;i++){
// if( i % 2 !==0)
//      console.log(numbers[i])
//
//  }
//
// // 5. перебрати циклом while та вивести  числа тільки парні  значення
//
// i = 0;
// while (i < numbers.length) {
//     if (i%2 ===0)
//         console.log(numbers[i]);
//     i++
// }
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for(i =0;i<numbers.length;i++){
//     if( i % 2 ===0)
//         console.log(numbers[i])
// }
//
// // 7. замінити кожне число кратне 3 на слово "okten"
// let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//         console.log(numbers[i]);
//     }
// }
// 8. вивести масив в зворотньому порядку.

// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = numbers.length-1;i>=0;i--){
//     console.log(numbers[i])
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)



// ////////////////////////////
// let i = numbers.length-1;
// while (i>=0){
//     console.log(numbers[i])
// i--
// }
// ///////////////////////////

//  for(let i = numbers.length-1;i>=0;i--){
//     console.log(numbers[i])
// }
// ////////////////////////////

// let i=numbers.length-1;
// while(i>=0){
//     if(i%2===0)
//         console.log(numbers[i])
//     i--
// }
// /////////////////////////////
// for(let i = numbers.length-1;i>=0;i--){
// if( i % 2 ===0)
//      console.log(numbers[i])
//
//   }
/////////////////////////////////
// let i= numbers.length-1
// while (i >=0) {
//      if (i % 2  !==0)
//         console.log(numbers[i]);
//      i--
//  }
 /////////////////////////////////

for(i = numbers.length-1;i>=0;i--){
if( i % 2 !==0)
      console.log(numbers[i])
 }