require.config({
    paths: {
        'jquery': 'vendor/jquery/dist/jquery.min',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        "bootstrap": { "deps": ['jquery'] }
    }
});

require(['app/app']);
