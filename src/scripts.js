// Smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    500
  );
});

////// DOCUMENT LOAD
$(window).on('load', function () {
  wow = new WOW({
    boxClass: 'animate',
    animateClass: 'animated',
    offset: 200,
    mobile: true,
  });
  wow.init();
});

////// DISABLE ANIMATIONS ON MOBILE
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ||
  $(window).width() < 575
) {
  $('.animate').removeClass('animate'); // to remove transition
}

////// HERO FADE OUT

// Fade out content
var box = $('.scroll-out');

$(document).scroll(function () {
  // TOP FADING
  var st = $(this).scrollTop() - 180;
  box.css(
    {
      opacity: 1 - st / 200,
    },
    1000
  );
});
if ($(window).width() < 575) {
  box.removeClass('scroll-out').css({
    opacity: 1,
  }); // to remove transition
}

/////// FORM

$(document).ready(function () {
  var options_contact = {
    dataType: 'script',
    clearForm: false,
  };
  $('#register-form').ajaxForm(options_contact);
});

$(function () {
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbxsKAZqlvwxnoPz3vog7bztGhTWzYT1n7-GOH4GMzdkZiLA7n-FUxeIUOsVVFfnrlA/exec';
    
  const form = document.getElementById('register-form');
  form.addEventListener('submit', (e) => {
    $('#register-form').addClass('disabled');
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
          $('#register-form').addClass("success");
          $('#success-message').addClass("success");
      })
      .catch((error) => {
        console.error('Error!', error.message);
        $('#register-form button, #register-form input').removeAttr('readonly');
      });
  });
});

var today = new Date();
var myDate = 'Date: ' + today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
var hour = 'Time: ' + today.getHours() + ':' + today.getMinutes();

var dateWithHour = myDate + ' ' + hour;

window.onload = function () {
  document.getElementById('datetime').value = dateWithHour;
};
