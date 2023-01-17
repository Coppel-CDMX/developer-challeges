<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="shortcut icon" href="./images/EnriqueCB.ico" type="image/x-icon">
        <title>{{ config('app.name', 'TODO App | Enrique Carranza') }}</title>
        <!-- Styles -->
        <link rel="stylesheet" type="text/css" href="{{asset(mix('css/app.css'))}}">
    </head>
    <body class="antialiased">
        <noscript>
            <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>

        <div id="app">
            <router-view></router-view>
        </div>

        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
