alert('Boas vindas ao jogo do mundo secreto!');

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto repetir
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao número secreto
    if(chute == numeroSecreto){
        break;
    } else{
        if(chute > numeroSecreto){
        alert(`O número é menor que o chute ${chute}`);
        }else{
        alert(`O número é maior que o chute ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Voce descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if(tentativas > 1){
//    alert(`Voce descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//}else{
//    alert(`Voce descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}
