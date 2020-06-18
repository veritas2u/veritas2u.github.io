$(window).on('load', function () {
    // setTimeout(() => {
        $('.v2u_loader').addClass("hide_loader");
        $('body').addClass("loaded");
        setTimeout(() => {
            $('.v2u_loader').hide();
        }, 400);
    // }, 2000);

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


    /* Menu click */
    $(".menu_btn, .menu_list li a").click(function () {
        $(".menu, .menu_btn").toggleClass("menu_show");
        $('.side_menu, .page_title').show();
    });
    /* Menu click */


    /* project tab click */
    $('.tab-link').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('.tab-link').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });
    /* project tab click */


    /* # hashtag navigation */
    function hashchanged() {
        var currentHash = window.location.hash;
        if (currentHash == "" || currentHash == "#home") {
            console.info("home here");
            $('.side_menu, .page_title').show();
            $('.main_container').addClass("home_container");
            $('.main_container').removeClass("skills_container projects_container contact_container");
            playHome.play();
        } else if (currentHash == "#skills") {
            console.info("skills here");
            $('.side_menu, .page_title').show();
            $('.main_container').addClass("skills_container");
            $('.main_container').removeClass("home_container projects_container contact_container");
            playSkills.play();
        } else if (currentHash == "#projects") {
            console.info("projects here", currentHash);
            $('.side_menu, .page_title').show();
            $('.main_container').addClass("projects_container");
            $('.main_container').removeClass("home_container skills_container contact_container");
            playProjects.play();
        } else if (currentHash == "#contact_me") {
            console.info("contact here");
            $('.side_menu, .page_title').show();
            $('.main_container').addClass("contact_container");
            $('.main_container').removeClass("home_container skills_container projects_container");
            playContact.play();
        }
    }
    hashchanged();
    window.addEventListener("hashchange", hashchanged, false);
    /* # hashtag navigation */

});

/* Mouse right click */
// $(document).on("contextmenu", function (e) {
//    e.preventDefault();
// });

/* disable F12 and Ctrl+Shift+I */
// $(document).keydown(function (event) {
//    if (event.keyCode == 123) { // Prevent F12
//        return false;
//    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
//        return false;
//    }
// });





// anime
// document.addEventListener('DOMContentLoaded', () => {
// });


var playHome = anime({
    targets: ['.home .v_g', '.home h1', '.home h2', '.home p', '.home p span'],
    translateY: [{
        value: -200,
        duration: 0,
    }, {
        value: 0,
        duration: 500
    }],
    scale: [0, 1],
    delay: function (el, i, l) {
        return i * 200
    },
    opacity: [0, 1],
    autoplay: false,
    loop: false,
    easing: 'easeInOutSine',
});
// document.querySelector('#home_links').onclick = playHome.play;


var playSkills = anime({
    targets: ['.developing_tools .skill', '.designing_tools .skill', '.other_tools .skill'],
    translateY: [{
        value: -200,
        duration: 0,
    }, {
        value: 0,
        duration: 500
    }],
    scale: [0, 1],
    delay: function (el, i, l) {
        return i * 200
    },
    opacity: [0, 1],
    autoplay: false,
    loop: false,
    easing: 'easeInOutSine',
});
// document.querySelector('#skills_links').onclick = playSkills.play;


var playProjects = anime({
    targets: ['.projects .project'],
    translateY: [{
        value: -200,
        duration: 0,
    }, {
        value: 0,
        duration: 500
    }],
    scale: [0, 1],
    delay: function (el, i, l) {
        return i * 200
    },
    opacity: [0, 1],
    autoplay: false,
    loop: false,
    easing: 'easeInOutSine',
});
// document.querySelector('#projects_links').onclick = playProjects.play;


var playContact = anime({
    targets: ['.contact div'],
    translateY: [{
        value: -200,
        duration: 0,
    }, {
        value: 0,
        duration: 500
    }],
    scale: [0, 1],
    delay: function (el, i, l) {
        return i * 200
    },
    opacity: [0, 1],
    autoplay: false,
    loop: false,
    easing: 'easeInOutSine',
})



// let tl = anime.timeline({
//     easing: 'easeInOutSine',
//     duration: 7000
// });

// tl
// .add({
//     targets: '.developing_tools div',
//     width: '20%',
//     opacity: 1,
//     duration: 4000,
// }, '-=1600')
// .add({
//     targets: '.designing_tools div',
//     width: '20%',
//     opacity: 1,
// }, '-=1600');





