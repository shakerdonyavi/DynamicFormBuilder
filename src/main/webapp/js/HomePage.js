define(['jquery', 'HomePageFunctions', 'FormAdd'], function ($, Page, Form) {

    $(document).ready(function() {$(function() {

        $.getJSON('formData', Form.createForm);

        $("#SubmitButton").click(Page.submitForm);

    })
    });
});

