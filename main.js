$(document).ready(function() {
    $('body button').click(function() {
        $('form').slideDown();
})

    $('form').on('submit', function(e) {
        e.preventDefault();
        const adicionaNovaTarefa = $('#nova-tarefa').val();
        const novaTarefa = $('<li></li>');
        $(`<li> = "${adicionaNovaTarefa}" </li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('li');
    })
})
