$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    });

    $('#cpf').mask('000.000.000-00',{
        placeholder: '000.000.000-00'
    });

    $('#cep').mask('00000-000',{
        placeholder: '00000-000'
    });

    $('form').validate({
        rules: {
            primeiroNome: {
                required:true
            },
            sobrenome: {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            telefone: {
                required:true
            },
            cpf: {
                required:true
            },
            enderecoCompleto: {
                required:true
            },
            cep: {
                required:true
            }
        },
        messages: {
            primeiroNome: 'Por favor, insira o Primeiro Nome',
            sobrenome: 'Por favor, insira o Sobrenome',
            email: 'Por favor, insira o seu e-mail',
            telefone: 'Por favor, insira o seu telefone',
            cpf: 'Por favor, insira o seu CPF',
            enderecoCompleto: 'Por favor,insira seu endereço completo',
            cep: 'Por favor, insira o CEP'
        }
    })
    $('form').submit(function(){
        alert("Formulário enviado com Sucesso")
    });
});

