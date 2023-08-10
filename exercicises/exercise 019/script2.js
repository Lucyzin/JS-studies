var result = document.querySelector('.result')


        function contar(){

            result.innerHTML= ('Resultado: <br>')

            let start = document.querySelector('#start')
            let end = document.querySelector('#end')
            let passo = document.querySelector('#passo')
            
            console.log(start.length)


            if(start.value.length == 0 || end.value.length == 0 || passo.value.length == 0){

                result.innerHTML = ('Impossivel contar')

            }else{

                inicio = Number(start.value)
                fim = Number(end.value)
                pass = Number(passo.value)
                
                if(pass == 0 || pass < 0){
                    result.innerHTML= ('Passo inválido')
                }else{

                if(inicio<fim){
                    for(let cont = inicio ; cont <= fim ; cont+=pass){
                        result.innerHTML += (cont.toString()+ " ▶️")
                    }
                }else{
                    for(let cont = inicio ; cont>= fim ; cont-=pass){
                        result.innerHTML += (cont.toString()+ " ▶️")
                    }    
                }
                result.innerHTML += (" ✔️")

            }

        } 
            


        }