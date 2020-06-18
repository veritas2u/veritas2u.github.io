$(window).on('load', function () {
    setTimeout(function () {
        $('.v2u_loader').addClass("hide_loader");
        $('body').addClass("loaded");
        setTimeout(function () {
            $('.v2u_loader').hide();
        }, 1000);
    }, 2000);

    //    localStorage.setItem("v2u_mode", "light_mode");

    /* onload theme */
    function onloadmode() {
        if (localStorage.v2u_mode == "dark_mode") {
            $("body").addClass("dark_mode").removeClass("light_mode");
            localStorage.setItem("v2u_mode", "dark_mode");
        } else {
            $("body").addClass("light_mode").removeClass("dark_mode");
            localStorage.setItem("v2u_mode", "light_mode");
        }
    }
    onloadmode();
    /* onload theme */

    /* click theme */
    $(".mode").click(function () {
        //console.info("clicked mode");
        if (localStorage.v2u_mode == "light_mode") {
            $("body").addClass("dark_mode").removeClass("light_mode");
            localStorage.setItem("v2u_mode", "dark_mode");
        } else {
            $("body").addClass("light_mode").removeClass("dark_mode");
            localStorage.setItem("v2u_mode", "light_mode");
        }
    });
    /* click theme */

});


$(document).ready(function () {
    /* validation for contact form */
    $('#fullname').on('input', function () {
        var input = $(this);
        var is_name = input.val();
        if (is_name) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    $('#email').on('input', function () {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());
        if (is_email) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    $('#mobile').on('input', function () {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());
        if (is_email) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    $('#message').keyup(function (event) {
        var input = $(this);
        var message = $(this).val();
        console.log(message);
        if (message) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    $("#send").click(function (event) {
        var form_data = $("#contact").serializeArray();
        var error_free = true;
        for (var input in form_data) {
            var element = $("#contact_" + form_data[input]['name']);
            var valid = element.hasClass("valid");
            var error_element = $("span", element.parent());
            if (!valid) {
                error_element.removeClass("error").addClass("error_show");
                error_free = false;
            } else {
                error_element.removeClass("error_show").addClass("error");
            }
        }
        if (!error_free) {
            event.preventDefault();
        } else {
            //alert('Thank you for sharing submitted');
        }
    });
    /* validation for contact form */

    /* determining device */
    var testExp = new RegExp('Android|webOS|iPhone|iPad|' +
        'BlackBerry|Windows Phone|' +
        'Opera Mini|IEMobile|Mobile',
        'i');

    if (testExp.test(navigator.userAgent)) {
        var deviceType = "mobile";
//        console.log(deviceType, "deviceType");
    } else {
        var deviceType = "desktop";
//        console.log(deviceType, "deviceType");
    }
    /* determining device */

    /* desktop conditions */
        /* Tab focus */
//    if (deviceType == "desktop") {
//        setInterval(checkPageFocus, 2000);
//        function checkPageFocus() {
//            if (document.hasFocus()) {
//                $('.v2u_loader').addClass("hide_loader");
//                setTimeout(function () {
//                    $('.v2u_loader').hide();
//                }, 1000);
//            } else {
//                $('.v2u_loader').show();
//                $('.v2u_loader').removeClass("hide_loader");
//            }
//        }
//    }
        /* Tab focus */
    /* desktop conditions */


    /* Side Menu click */
    $('.side_menu .social_menu a').click(function (e) {
        e.preventDefault(); // prevent default anchor behavior
        var goTo = this.getAttribute("href"); // store anchor href
        // do something while timeOut ticks ... 
        setTimeout(function () {
            //             window.location = goTo;
            window.open(goTo);
        }, 500);
    });
    /* Side Menu click */

});

/* Mouse right click */
//$(document).on("contextmenu", function (e) {
//    e.preventDefault();
//});

/* disable F12 and Ctrl+Shift+I */
//$(document).keydown(function (event) {
//    if (event.keyCode == 123) { // Prevent F12
//        return false;
//    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
//        return false;
//    }
//});
