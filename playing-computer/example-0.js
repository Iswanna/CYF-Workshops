// WARM UP ROUND
// no function declarations in here
// so only one person "plays" the global frame

/*
let height = 10;
let length = 20;
let area = height * length;
console.log(`area is ${area}`);

height += 3;
length = length * 5;

console.log(`height is now ${height}`);
console.log(`length is now ${length}`);

area = height * length;
console.log(`area is ${area}`);
*/

/*for (let i=0; i<=20; i+=1) {
    let result = "";
    let status = "";
    if (i % 2 === 0) {
        status = "even"
        result = `${i} is ${status} number`;
    }
    else {
        status = "odd"
        result = `${i} is ${status} number`;
    }
    console.log(result);
}
    */

// for (let i = 1; i <= 5; i ++) {
//     let name ;
//     if (i === 1) {
//         name = "first";
//     }
//     else if (i === 2) {
//         name = "second";
//     }
//     else if (i === 3) {
//         name = "third";
//     }

//     console.log(name);
// }

function loopNumber(n) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    let status = "";
    if (i % 2 === 0) {
      status = "even";
      result = `${i} is ${status} number`;
    } else {
      status = "odd";
      result = `${i} is ${status} number`;
    }
    console.log(result);
  }
}

const actualOutput = loopNumber(30);
console.log(actualOutput);
