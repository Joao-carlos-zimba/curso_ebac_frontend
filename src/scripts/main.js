const form = document.getElementById('formulario');

function validaFormulario(valorA, valorB) {
    return valorB > valorA
}

form.addEventListener('submit', function(e) {
    let validacaoForm
    e.preventDefault();


const valorA = document.getElementById('valorA').value;
const valorB = document.getElementById('valorB').value;
const sucesso = `Os valores atribuido estão seguindo a regra. O valor B = ${valorB} é maior que o valor A = ${valorA}`;

    validacaoForm = validaFormulario(valorA, valorB)
    if (validacaoForm) {
        const containerMensagem = document.querySelector('.mensagem');
        containerMensagem.innerHTML = sucesso;
        containerMensagem.style.display = "block"

        valorA.value = '';
        valorB.value = '';
        text.value = '';

    } else if (valorB == valorA) {
        document.querySelector('.error-valor').style.display = "block";
    } else {
        document.querySelector('.error-valor').style.display = "block";
    }
})

console.log(form);