$(function() {
    $('#mostrar-menu').on('click', function() {
        $('.menu-principal').toggleClass('mostrar-menu-principal');
        $('#top').toggleClass('visible');
    });


});

$(document).ready(main);

var contador = 1;

function main() {
    $('.submenu a').click(function() {
        if (contador == 1) {
            $('.children').addClass('children1');
            $('.children1').animate({
                left: '0%',
            });
            contador = 0;
        } else {
            contador = 1;
            $('.children').removeClass('children1');
            $('.children').animate({
                left: '-100%',
            });
        }


    });
}