$(document).ready(function() {
    $('body button').click(function() {
        $('div').slideDown();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const adicionaNovaTarefa = $('#nova-tarefa').val();
        console.log(adicionaNovaTarefa);
        const novaTarefa = $('<ul></ul>');
        $(`<li = "${adicionaNovaTarefa}" </li>`).appendTo(novaTarefa);
    
        $(`
            <div class="container"
                <ul = "${adicionaNovaTarefa}" </ul>
            </div>
        `).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
    })
})

