// let sum = +prompt("Сколько хочешь откладывать?")
// let month = +prompt("Сколько месяцев?")

// let resultSum = 0


// fot(i= 0, resultSum = 0; i< month; i++) {
//     resultSum = resultSum +sum

//     if(i % 2 ==0) {
//         resultSum -= 100;
//     }

// }
// alert(resultSum)

// for (i =0, s="*"; i<5;i++, s=s+"*") {
//     console.log(s)
// // } 
// arr=[1,2,3,4,5]
// for(i in arr) console.log(i)

for (i = 0; i < 10; i++) {
    rnd = Math.round(Math.random() * 6) + 1;
    if (rnd == 4) {
        alert("Выпало 4");
        
        break;
    };
    if (rnd == 5) {
        alert("Выпало 5");
        continue;
      
    };
    console.log(rnd);
}
console.log("Конец")
Math.max(2,5,6,7,8)

function createRandom() {
   return Math.round(Math.random() * 6) + 1;
}
x = createRandom();
alert(x)

for(i=i;i<5;i++) {
    console.log(createRandom())
}

