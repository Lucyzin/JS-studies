function parimp(n){
    if(n%2==0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

console.log(parimp(10))

function soma(n1=0, n2=0){
    return n1+n2
}

console.log(soma(5,3))

let v = function (x){
    return x*2
}

console.log(v(5))