

resultSum = 0
let month = 0

do {let sum = +prompt("Сколько хочешь откладывать?", sum)
    resultSum += sum
    month++
    alert("Молодец ты копишь уже"+month +" месяцев")
 y =   confirm("Будешь еще откладывать в следующем месяце Да/нет")


} while(y == true)
alert("Ты накопил "+ resultSum + "и держался" + month +"месяцев")