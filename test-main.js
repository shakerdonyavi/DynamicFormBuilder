var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

requirejs.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: 'base/src/main/webapp/libraries',
    paths:{
        bootstrapCollapse : 'bootstrap-collapse',
        bootstrapTab: 'bootstrap-tab',
        bootstrapTransition: 'bootstrap-transition',
        jquery: 'jquery.min',
        owlCarousel: 'owl.carousel',
        owlCarouselMin: 'owl.carousel.min',
        prettify: 'prettify',
        runPrettify: 'run_prettify',
        FormAdd: '../js/NewForm/FormAdd',
        FormSubmitted: '../js/FormSubmitted/FormSubmitted',
        HomePage: '../js/NewForm/HomePage',
        HomePageFunctions: '../js/NewForm/HomePageFunctions',
        TableAdd: '../js/FormSubmitted/TableAdd',
        ObjectCompare: '../js/test/ObjectCompare',
        createForm: '../js/CreateForm/createForm',
        createFormAdd: '../js/CreateForm/createFormAdd',
        currentForm: '../js/CurrentForm/currentForm',
        currentFormJSON: '../js/CurrentForm/currentFormJSON',
        formValues: '../js/FormValues/formValues',
        formValuesAdd: '../js/FormValues/formValuesAdd'
    },
    shim: {
        jQuery:{
            exports: '$'
        },
        FormAdd: {
            deps: ['jquery']
        },
        FormSubmitted: {
            deps: ['jquery']
        },
        HomePage: {
            deps: ['jquery']
        },
        HomePageFunctions: {
            deps: ['jquery']
        },
        TableAdd: {
            deps: ['jquery']
        },
        createForm: {
            deps: ['jquery']
        },
        createFormAdd: {
            deps: ['jquery']
        },
        currentForm: {
            deps: ['jquery']
        },
        currentFormAdd: {
            deps: ['jquery']
        },
        formValues: {
            deps: ['jquery']
        },
        formValuesAdd: {
            deps: ['jquery']
        }
    },

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(file);
    }
});

