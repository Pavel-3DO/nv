/* $(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock'); 
    });
}); 
 */

/* $(document).ready(()=> {
    $(document).on('click', '.header__burger', ()=> {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $(document).on('click', '.header_list > li > a', e => {

        Вот этот отрезок не обязателен!
        e.preventDefault();
        let url = $(e.target).attr('href');
        location.href = url;

        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    });
});
 */









$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});

$(document).ready(function () {
    $('.header__link').click(function (event) {
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock')
    });
});