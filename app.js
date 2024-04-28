alert('Bem vindo ao jogo do número secreto');
let numeroSecreto = parseInt (Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;



while(chute != numeroSecreto) {
    chute = prompt('escolha um número entre 1 e 100');

    if (numeroSecreto == chute) {
        break;
        
    } else{
        if ( chute > numeroSecreto){
            alert (`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';


alert(`Isso aí cara! Você descobriu o numero secreto ${numeroSecreto}. Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`);



