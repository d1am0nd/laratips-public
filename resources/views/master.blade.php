<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="Dev Kordeš">
        <title>Laratips</title>
        <style>
            html, body {
                margin: 0;
                {{-- background-color: #fbfbfd; --}}
            }
            #root {
                position: relative;
                max-width: 100em;
                margin: 0 auto;
            }
            img {
                max-width: 100%;
            }
        </style>
    </head>
    <body>
        <div id="root"/>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
