// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt('Qual o dia da semana?');
if (diaSemana == 'Sábado' || diaSemana == 'Domingo'){
    alert('Bom fim de semana!')
} else {
    alert('Boa semana!')
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('Digite um número');
if (numero >= 0){
    alert('Seu número é positivo');
} else {
    alert('Seu número é negativo');
}

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = 1000;
alert(`Cliente, seu saldo atual é de R$ ${saldoConta}`);
// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let meuNome = prompt ('Qual seu nome?');
alert(`Olá ${meuNome}. Boas vindas ao nosso site`);