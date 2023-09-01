
resultSum = 0
let mounth = 0
let sum = 0
do {
sum = +prompt("Сколько хочешь откладывать?", sum)
resultSum += sum
mounth++
alert("Молодец ты копишь уже "+mounth + " месяцев")
y =  confirm("Будешь ещё откладывать в следующем месяце Да/нет?")    

} 
while(y == true)
alert("Ты накопил "+ resultSum + "и держался " + mounth + " месяцев" )

