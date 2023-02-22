<?
/*
Laravel
Instalacion -> composer global require laravel/installer(Windows)
Nuevo Proyecto -> laravel new nombre_proyecto (Windows)
Instalacion -> composer create-project --prefer-dist laravel/laravel nombre_proyecto (MadOs)
Ejecutar Servidor -> php artisan serv 

Migrations -> Son los archivos mediante los cuales laravel genera una tablas en BD.
 public function up()
    { 
        Schema::create('nombre_tabla', function (Blueprint $table){
            $table->tipoDato('nombre_campo')
        });
    }

El metodo create de la clase schema es una metodo STATIC. Esto siginifica que no necesitamos crear un objeto de tipo Schema para poder invocarlo.
Al hacerlo STATIC, se permite que laravel lo llame directamente cada vez que necesitamos crea una nueva tabla de BD.

PRIMER PASO -> Crear las Entidades (Clases) de nuestro modelo.
SEGUNDO PASO -> Creamos el Model, Migration (para que vaya a la BD) y Controller de cada Entidad. 
   En las Migrations -> Tenemos que indicar los tipos de datos que tendra cada campo que sera generado en la tabla de BD.
   $table ->string('nombre_campo') es VARCHAR
   $table ->integer('nombre_campo') es INT
   $table ->double('nombre_campo') es DOUBLE
TERCER PASO -> php artisan:model Nombre -mfsc
-mfsc -> Significa que cree Automaticamente Migration, Factory, Seeder y Controller.

Rutas->Controller->View

En las Migrations -> Tenemos que indicar los tipos de datos que tendra cada campo que sera generado en la tabla de BD.
$table ->string('nombre_campo') es VARCHAR
$table ->integer('nombre_campo') es INT
$table ->double('nombre_campo') es DOUBLE


Aunque podemos indicarle a Laravel directamente comando de SQL. Mediante metodos de nuestros models.
Eloquent ORM 
$model = Model::all() -> trae Todos los registro de la entidad Model.
$model = Model::find(id) -> trae el registro del id indicado.
$model = Model::where('campo', valor) -> trae el o los registros del Model que tienen 'campo' con un valor determinado.

Para ingresar un nuevo Model en la BD;
$model = new Model;
$model->campo = "valor";
$model->save();

MVC -> Es un patron de arquitectura de software. Este sistema propone la construccion de tres componentes distintos que son el modelo, la vista y el controlador. El objetivo es separar el manejo de datos y la logica de negocio, de la interfaz de usuario. (Ver imagen 'laravel-mvc.png')


Estructura de Directorios de Laravel.
app/http/controllers -> Controladores.
app/entidades -> Entidades.
routes/web.php -> Hojas de Ruta.
resources/view -> Vistas.
public -> js/css, imagenes, files.

Continuancion en la Parte-3.

*/