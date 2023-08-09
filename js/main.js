$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    });

    $('form').validate({
        rules: {
            nome: {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            telefone: {
                required:true
            }

        },
        messages: {
            nome: 'Por favor, insira seu Nome',
            email: 'Por favor, insira o seu e-mail',
            telefone: 'Por favor, insira o seu telefone'
        }
    })
        $('form').submit(function(){
            alert("Formulário enviado com Sucesso")
        });
});

