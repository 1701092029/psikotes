const mix = require('laravel-mix');
const VuetifyLoader = require('vuetify-loader/lib/plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */




mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

    mix.webpackConfig({
        plugins: [
            new VuetifyLoader(),
        ]
    }).sourceMaps();

    // mix.webpackConfig(module.exports = {
    //     rules: [
    //       {
    //         use: [
    //           'vue-style-loader',
    //           'css-loader',
    //           {
    //             loader: 'sass-loader',
    //             // Requires sass-loader@^7.0.0
    //             options: {
    //               implementation: require('sass'),
    //               fiber: require('fibers'),
    //               indentedSyntax: true // optional
    //             },
    //             // Requires sass-loader@^8.0.0
    //             options: {
    //               implementation: require('sass'),
    //               sassOptions: {
    //                 fiber: require('fibers'),
    //                 indentedSyntax: true // optional
    //               },
    //             },
    //           },
    //         ],
    //       },
    //     ],
    //   })

    // mix.extend('vuetify', new class {
    //     webpackRules(){
    //         return [
    //             {
    //                 type:'javascript/auto',
    //                 loader:'vuetify-loader'
    //             }
    //         ]
    //     }
    // })

    // mix.vuetify().mix.js('resources/js/app.js', 'public/js')
    // .sass('resources/sass/app.scss', 'public/css');
