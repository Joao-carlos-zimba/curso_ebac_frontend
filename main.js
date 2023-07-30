$(document).ready(function() {
    $('button').click(function() {
        $('form').slideDown();
})

    $('form').on('submit', function(e) {
        e.preventDefault();
        const adicionaNovaTarefa = $('#nova-tarefa').val();
        const novaTarefa = $('<li>');
        $(`<li> = "${adicionaNovaTarefa}" </li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('li');
    })
})
