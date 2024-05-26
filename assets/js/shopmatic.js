$(document).ready(function (){
    $('.show-hide-password').on('click', function () {
        $(this).toggleClass("hide show");
            var type = $(this).hasClass("hide") ? "text" : "password";
            $("#password").attr("type", type);
    });
    $('.show-hide-create-password').on('click', function () {
        $(this).toggleClass("hide show");
            var type = $(this).hasClass("hide") ? "text" : "password";
            $("#create-password").attr("type", type);
    });
    $('.show-hide-confirm-password').on('click', function () {
        $(this).toggleClass("hide show");
            var type = $(this).hasClass("hide") ? "text" : "password";
            $("#confirm-password").attr("type", type);
    });

    // open forgot tab

    $('.open-forgot').on('click', function (e) {
        e.preventDefault();
        $('#default-tab-content > div').addClass('hidden');
        $('#forgot').removeClass('hidden');

        var targetTab = $('#heading-tab > li > button[aria-selected="true"]');
            targetTab.html('Forgot Password');
    });

    $('#login-tab').on('click', function (e) {
        e.preventDefault();
        $('#forgot').addClass('hidden');
        $(this).html('Login');
        $('#register-tab').html('Register');

        $('#register-tab').attr('aria-selected', false);
        $('#default-tab-content > div').addClass('hidden');

        $('#login').removeClass('hidden');
    });

    $('#register-tab').on('click', function (e) {
        e.preventDefault();
        $('#forgot').addClass('hidden');

        $(this).html('Register');
        $('#login-tab').html('Login');

        $('#login-tab').attr('aria-selected', false);
        $('#default-tab-content > div').addClass('hidden');

        $('#register').removeClass('hidden');
    });

    $('.open-register').on('click', function (e) {
        e.preventDefault();
        $('#default-tab-content > div').addClass('hidden');
        $('#register').removeClass('hidden');

        $('#register-tab').attr('aria-selected', true);

        $('#heading-tab > li > button').removeClass('bg-shopmatic-primary');
        $('#heading-tab > li > button').removeClass('text-white');

        $('#heading-tab > li > button').addClass(' text-black');        
        $('#register-tab').addClass('bg-shopmatic-primary text-white hover:text-white rounded-t-lg');
    });

    $('.open-login').on('click', function (e) {
        e.preventDefault();
        $('#default-tab-content > div').addClass('hidden');
        $('#login').removeClass('hidden');
        $('#login-tab').attr('aria-selected', true);

        $('#heading-tab > li > button').removeClass('bg-shopmatic-primary');
        $('#heading-tab > li > button').removeClass('text-white');
        $('#heading-tab > li > button').addClass(' text-black');
        $('#login-tab').addClass('bg-shopmatic-primary text-white hover:text-white rounded-t-lg');
    });
});