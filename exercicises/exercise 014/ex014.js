agora = new Date()
diaSem = agora.getDay()

switch(diaSem){
    case 0:
        diaSem = 'Domingo'
        break

    case 1:
        diaSem = 'Segunda'
        break

    case 2:
        diaSem = 'Terça'
        break

    case 3:
        diaSem = 'Quarta'
        break

    case 4: 
        diaSem = 'Quinta'
        break

    case 5:
        diaSem = 'Sexta'
        break
    
    case 6:
        diaSem = 'Sabado'
        break

    default:
        console.log('ERRO: Dia inválido!')
}

console.log(diaSem)