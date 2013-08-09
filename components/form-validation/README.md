# jQUERY VALIDATION

Form validation is a useful front-end tool for any site with forms.

This lightweight, but effective plugin has many options and capabilities outside
of this example. The full documentation can be viewed at http://jqueryvalidation.org/validate

## Example
You can find a working example at JS Bin: http://jsbin.com/iqowak/2/edit

## Usage
Following the form foundations build to create form elements.

After adding the JS to the index.js from validate.js, all forms on the site will be able to validate.

In your form-row, you will have inputs. These will need to have a class for the validation. You
can find a list of validation classes from line 46 in the validate.js and you can look at the http://jqueryvalidation.org/documentation/
under the heading 'List of built-in Validation methods' for a list of what these validation methods do.

The below example has a class of required on the input. This means that the input will be required, it needs to be filled in by the user.

```html
.form-row.form-row-full-width
  label
    span.form-label-text Customer Number
      abbr(title='This field is required') *
    input.form-field.required(type='text', name='custNumber', placeholder='Enter customer number')
    span.form-row-description.form-row-error-text.error-text--required This field is required
```

The .form-row-error-text requires a class on it to match with the rule you placed on the input. This classs is .error-text--{rule}
In the example above, .error-text--required has been added to .form-row-error-text because the input above it is .required.

The reason we leave error messages in the HTML is because we would like as much abstraction from the JS as possible. The above code allows for this
to happen. When we need to write specific form validation for a project, we can override the defaults per form.

## Custom Validators
There are two ways to create customer validators

### Add Method
Documentation: http://jqueryvalidation.org/jQuery.validator.addMethod

You can add a custom method for validiting a field that isn't covered in the predefined validator methods provided.

You will need to give the message returned the same name as the method for it to work in our system.

Example: http://jsbin.com/ipitax/1/edit

```js
jQuery.validator.addMethod('domain', function(value, element) {
  return this.optional(element) || /^http:\/\/clock.co.uk/.test(value);
}, 'domain');
```

### Add Class Rules
Documentation: http://jqueryvalidation.org/jQuery.validator.addClassRules

You can simplify the code by adding customer class rules. By joining validator methods together under the one class, it's possible to reuse multiple validators under one name.

The caveat is that you still need to add each specific validitor message rather than one main one for the class.

Example: http://jsbin.com/adutat/1/edit

```js
$.validator.addClassRules('name', {
  required: true,
  minlength: 2
});
```

```html
.form-row.form-row-full-width
  label
    span.form-label-text Customer Number
      abbr(title='This field is required') *
    input.form-field.name(type='text', name='custNumber', placeholder='Enter customer number')
    span.form-row-description.form-row-error-text.error-text--required This field is required
    span.form-row-description.form-row-error-text.error-text--minlength This field needs to be more than 2 characters
```
