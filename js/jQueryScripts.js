/*
===================================================
  jQuery Scripts for Chinese Notebook 
  2016, Stacy Bridges
===================================================
*/

/*************************************************** 
* SET DEFAULT DISPLAY PROPERTIES FOR CONTACT FORM MODAL 
***************************************************/
$(document).ready(function() {
  $('#contactForm-title').show();
  $('#confirmation-title').hide();
  $('#contactForm-body').show();
  $('#confirmation-body').hide();
  $('#contactForm-submit').show();
  $('#confirmation-submit').hide();          
});


/*************************************************** 
* CLEAR THE CONTACT FORM UPON MODAL CLOSE 
***************************************************/
$(document).ready(function(){
  $('#contactForm-close').click(function(){
    
    // clear the contact form fields
    $('#form')[0].reset();

    // swap confirmation content for contactForm content
    $("#contactForm-title").show();
    $('#confirmation-title').hide(); 
    $("#contactForm-body").show();
    $('#confirmation-body').hide();
    $('#contactForm-submit').show(); 
    $('#confirmation-submit').hide();

    // enable the popover for the updated title
    $('[data-toggle = "popover"]').popover(); 
  });
});

/*************************************************** 
* SMOOTH SCROLLING EFFECT
***************************************************/
// this smooth-scroll code was written and made available by
// Chris Coyier, https://css-tricks.com/snippets/jquery/smooth-scrolling/)
$(document).ready(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/*************************************************** 
* ENABLE TOOLTIPS
***************************************************/
$(document).ready(function(){
  $('[data-toggle = "tooltip"]').tooltip();
});

/*************************************************** 
* ENABLE POPOVERS
***************************************************/
$(document).ready(function(){
  $('[data-toggle = "popover"]').popover();
});


