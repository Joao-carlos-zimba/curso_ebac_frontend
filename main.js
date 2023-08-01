$("form").on("submit", function (e) {
    e.preventDefault();
    const adicionaNovaTarefa = $("#nova-tarefa").val();
    const novaTarefa = $("<li>");
    $(`<li> = "${adicionaNovaTarefa}" </li>`).appendTo(novaTarefa);

    $(novaTarefa).appendTo("ul");

$("li").click(function () {
    $(this).css('text-decoration', 'line-through');
});
});