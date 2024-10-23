//animazione per icona mobile sopra video
$(document).ready(function() {
    let isInside = false;

    $('.frame-container').on('mouseenter', function() {
        isInside = true;
        $('.circle-out').show(); // Mostra il cerchio quando il mouse entra
    });

    $('.frame-container').on('mouseleave', function() {
        isInside = false;
        $('.circle-out').hide(); // Nasconde il cerchio quando il mouse esce
    });

    // Gestisci il movimento del mouse per il cerchio
    $(document).on('mousemove', function(e) {
        if (isInside) {
            var xPos = e.pageX - 35; // Sottrae metà della larghezza
            var yPos = e.pageY - 35; // Sottrae metà dell'altezza
            $('.circle-out').css({
                'top': yPos,
                'left': xPos
            });
        }
    });

    // Mostra l'iframe con effetto fade e nascondi il cerchio al clic
    $('.frame-container').on('click', function() {
        $('#iframeContainer').fadeIn(400); // Mostra l'iframe con effetto fade-in
        $('.circle-out').hide(); // Nasconde il cerchio
    });
});
