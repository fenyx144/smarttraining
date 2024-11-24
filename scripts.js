$(document).on('scroll', function () {
    $('.section').each(function () {
        const offsetTop = $(this).offset().top;
        const scrollPos = $(document).scrollTop() + $(window).height();
        if (scrollPos > offsetTop + 50) {
            $(this).addClass('visible');
        }
    });
});
animacionTexto('typewriter-0');
// Iniciar registro 
function animacionTexto(seccion) {
    setTimeout(() => {
        $(`#${seccion}`).addClass('finished');
    }, 2000);
}
function startRegistration() {
    $('.section').not('#registration-section').hide();
    $('#registration-section').addClass('visible');
    $('#question-1').addClass('visible');
    setTimeout(() => {
        $('#typewriter-1').addClass('finished');
        $('#question-1 .form-control').focus();
    }, 2000); // Esperar el tiempo de la animación de tipeo 
}
function ocultarForm() {
    $('.section').show();
    $('#registration-section').removeClass('visible');
}
// Cambiar entre preguntas
function nextQuestion(next) {
    $('.question-container').removeClass('visible');
    $(`#question-${next}`).addClass('visible');
    
    setTimeout(() => {
        $(`#typewriter-${next}`).addClass('finished');
        $(`#question-${next} .form-control`).focus();
    }, 2000);
}

function previousQuestion(previous) {
    $('.question-container').removeClass('visible');
    $(`#question-${previous}`).addClass('visible');
    $(`#question-${previous} .form-control`).focus();
}

// Enviar formulario
function submitForm() {
    alert("¡Formulario enviado!");
}