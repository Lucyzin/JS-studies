var num = []
let contador = -1
let resultado = document.querySelector('.resultado')

var selec = document.querySelector('#add') 

function adicionar(){

    resultado.innerHTML= ''

    let numString = document.querySelector('.numero').value

    let n = Number(numString)

    if(numString == 0 || numString>100){

        alert('[ERRO] Numero inválido, verifique as regras!')

    }else{

        if(num.indexOf(n)==-1){

            contador++

            num.push(n)
        
            let item = document.createElement('option')

            item.setAttribute('value', `v${contador}`)

            item.text = `Valor ${num[contador]} adicionado!`
        
            selec.appendChild(item)

        }else{

            alert('[ERRO] Numero ja adicionado!')

        }
    }
}

let finalizaBotão = document.querySelector('.finalizar')

    finalizaBotão.addEventListener('click', function(){finalizar(num)})

function finalizar(num){

    if(num==0){

        alert('[ERRO] Numero não adicionado!')

    }else{

        num.sort() 
        
        console.log(num[num.length-1])

        let soma = 0
  
        for(let pos in num){
            soma += num[pos]

        }
        
        let media = soma/num.length


        resultado.innerHTML = `Ao todo, temos ${num.length} números cadastrados.<br>O maior valor informado foi ${num[num.length - 1]}<br>O menor valor informado foi ${num[0]}<br>Somando todos os valores temos ${soma}<br>A média dos valores digitados é ${media}`
    }

}

