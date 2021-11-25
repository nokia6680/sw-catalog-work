$(function() {
    var regExp = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;

    $('[type="tel"]').on('keyup', function() {
        regExp.test($(this).val()) ? $('.checkout__error--tel').hide() : $('.checkout__error--tel').addClass('active');
    });
});


$(function() {
    var regExp2 = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;

    $('[type="email"]').on('keyup', function() {
        regExp2.test($(this).val()) ? $('.checkout__error--mail').removeClass('active') : $('.checkout__error--mail').addClass('active');
    });
});
