$(document).ready(function() {  // incializando o jquery
    $('#carousel-imagens').slick({  // iniciando o carousel
        autoplay: true   // deixando o carousel automatico
    });
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle(); // verificada sem esta aparecendo ou não.
    });

    $('#telefone').mask('(00) 00000-0000', {  // chamando a mascara para o telefone
        placeholder: '(00) 00000-0000'
    })

    $('form').validate({   //validação do formulario
        rules: {
            nome:  {
                required:true
            },
            email:  {
                required:true,
                email:true
            },
            telefone:  {
                required:true
            },
            mensagem: {
                required:true
            },
            veiculoDeInteresse: {
                required:false,
            }
        },
        messages: {  //alterando a mensagem de alerta
            nome: 'Por favor, insira o seu nome'
        },
        
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {  //clicando no produto ir direto para area tenho interesse
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text(); //colocando no campo tenho interesse o texto do h3 
        $('#veiculo-interesse').val(nomeVeiculo);


        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})