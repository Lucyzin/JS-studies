    document.querySelector('input[type=submit]').addEventListener('click', verificar)

    var data = new Date()

    var anoAtual = data.getFullYear()
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

function verificar(){
    var ano = document.querySelector('.ano').value
    
    var sexo = document.getElementsByName('sexo')

    if (ano.length == 0 || ano>anoAtual){

        alert('ERRO: Ano inválido')
    
    }else{
        
        idade =  anoAtual - Number(ano)

        if(sexo[0].checked){
            
            sexo = 'um Homem'

            if(idade>=0 && idade<13){

                img.setAttribute('src', '../Source/CriançaM.jpg')

            }else if(idade<21){
                
                img.setAttribute('src', '../Source/jovemM.jpg')
    
            }else if(idade<50){
    
                img.setAttribute('src', '../Source/adultoM.jpg')
    
            }else{
    
                img.setAttribute('src', '../Source/idosoM.jpg')
                
            }

        }else if(sexo[1].checked){
            
            sexo = 'uma Mulher'

            if(idade>=0 && idade<10){

                img.setAttribute('src', '../Source/CriançaF.jpg')


            }else if(idade<21){
                
                img.setAttribute('src', '../Source/jovemF.jpg')
    
            }else if(idade<50){
    
                img.setAttribute('src', '../Source/adultoF.jpg')
    
            }else{
    
                img.setAttribute('src', '../Source/idosoF.jpg')
                
            }
            
        }

        document.querySelector('.resultado').innerText = (`Detectamos ${sexo} com ${idade} anos`)
        document.querySelector('.imagem').appendChild(img)
        
    }


}