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

//- Always target a <form> element
$('.js-form').validate(
  {
  //- 'ignore' sets up an <input> class variable
  //- to have it exempt from validation
    ignore: '.ignore'
  //- 'errorElement' is the element type of your
  //- post-input error elements
  , errorElement: 'span'
  //- 'onkeyup' defines whether to validate during typing
  , onkeyup: false
  //- 'errorPlacement' is a custom callback to create
  //- your own custom error messages etc. Takes (error, element)
  , errorPlacement: function(error, element) {
      // Required field
      if(error[0].innerHTML.indexOf('required') > -1){
        $(element).parents('.form-row').addClass('form-row-error').find('.error-text--required').css('display','block')
      }
    }
  //- 'unhighlight' is a custom callback for when
  //- validation standards have been met on a particular element
  , unhighlight: function(element) {
      $(element).parents('.form-row').removeClass('form-row-error').find('.form-row-error-text').fadeOut()
    }
  }
)