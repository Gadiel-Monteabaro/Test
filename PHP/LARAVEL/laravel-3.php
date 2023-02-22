<?php
/*
    Estructura de Directorios de Laravel.
    app/entidades -> Entidades.
    resources/view -> Vistas.
    public -> js/css, imagenes, files.
*/
/*
    Rutas -> routes/web.php

    Route::get('/', function () {    
        return view('welcome');
    });

    Route::get('/', function () {

        $name = 'Gadiel';

        return view('welcome', ['name' => $name]);
    });

    {{ $name }} //Mostramos el contenido de la variable.

    Route::get('/categorias','CategoriesController@index');


/* Controladores -> app/http/controllers -> Controladores.

php artisan make:controller CategoriesController

*/