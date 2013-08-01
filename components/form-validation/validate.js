//- The script can either be used globally (index.js)
//- or can be used locally with more specific selectors


//-
//- This must be include AFTER jQuery has been sourced
//- For example; require('http://code.jquery.com/jquery.min.js')
//-
//- jQuery Validation docs for extra reading can be found at
//- http://jqueryvalidation.org/validate
//-
require('jquery.validate.min.js')


//-
//- Begin the actual validation!
//-
//- The script can either be used globally (index.js)
//- or can be used locally with more specific selectors


//-
//- Begin the actual validation!
//-

// set validator defaults for all form validation
$.validator.setDefaults(
  {
    ignore: '.ignore'
  , errorElement: 'span'
  , onkeyup: false
  , errorPlacement: function(error, element) {
      if( !$(element).parents('.form-row').find('.error-text--' + error[0].innerHTML).is(':visible') ) {
        $(element).parents('.form-row').removeClass('form-row-error').find('.form-row-error-text').hide()
        $(element).parents('.form-row').addClass('form-row-error').find('.error-text--' + error[0].innerHTML).css('display','block')
      }
    }
  , unhighlight: function(element) {
      $(element).parents('.form-row').removeClass('form-row-error').find('.form-row-error-text').hide()
    }
  }
)

// Extend messages to reduce to the keyword
$.extend(
  $.validator.messages, {
    required: "required"
  , remote: "remote"
  , email: "email"
  , url: "url"
  , date: "date"
  , dateISO: "dateISO"
  , number: "number"
  , digits: "digits"
  , creditcard: "creditcard"
  , equalTo: "equalTo"
  , maxlength: "maxlength"
  , minlength: "minlength"
  , rangelength: "rangelength"
  , range: "range"
  , max: "max"
  , min: "min"
  }
)

// validate all forms
$('form').validate()