let sum = +prompt("Сколько хочешь откладывать?")
let month = +prompt("Сколько месяцев?")
let i = 1;
let resultSum = 0


while(i<=month) {
    resultSum = resultSum +sum
    i++;
    if(i % 2 ==0) {
        resultSum -= 100;
    }

}
console.log(resultSum)