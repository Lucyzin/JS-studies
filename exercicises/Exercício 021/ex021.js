let num = [5, 8, 2, 9, 3]
num.push(2)
num.sort()
console.log(num)
console.log(`Nosso array tem ${num.length} elementos`)
console.log(`A primeira posição do nosso array é ${num[0]}`)

/*
for (let pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}
*/

for(let pos in num){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}

console.log(num.indexOf(9))