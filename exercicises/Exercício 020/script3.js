function gerar(){

    let num = document.querySelector('.numero')
    let tabuada = document.querySelector('select')

    if (num.value.length == 0){
        
        alert('Erro, numero vazio')
    
    }else{

        tabuada.innerHTML = ''

        let n = Number(num.value)
      
        let cont = 1

        while(cont<=10){
            
            let item = document.createElement('option')
            
            item.setAttribute('value', 'v'+cont)
            
            item.text= `${n} x ${cont} = ${n*cont} `
            
            tabuada.appendChild(item)

            cont++
        }

    }
}