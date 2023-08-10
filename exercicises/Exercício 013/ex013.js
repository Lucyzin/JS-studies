agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas!`)

if (hora<=5 && hora>=1){
    console.log('Boa Madrugada!')
}else if(hora>=6 && hora<=11){
    console.log('Bom Dia!')
}else if(hora   >=12 && hora<=17){
    console.log('Boa Tarde!')
}else{
    console.log('Boa Noite!')
}