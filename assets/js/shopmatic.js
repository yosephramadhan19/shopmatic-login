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
});