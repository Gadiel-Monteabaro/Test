/*
    Inicializar repositorio GIT

    -> git init
    // creara una zona llamada "staging", dentro de la memoria RAM, donde se guardaran los cambios que se realizen.
    // creara un repositorio donde /.git/, donde se guardaran todos los cambios historicos del proyecto.

    -> git rm --cached -r .
    // todo lo que esta dentro de nuestro directorio inicializado "staging", sea quitado.

    -> git status
    // muestra el estado del directorio de trabajo y del área del entorno de ensayo.
    // permite ver los cambios que se han preparado, los que no y los archivos en los que Git no va a realizar el seguimiento. 

    -> git add . or git add "name.extension"
    // agrega los archivos modificados, elimados o redireccionados al "HEAD", pero todavia no estan en nuestro repositorio.
    // git add . agrega todos los archivos que fueron modificados, git add "name.extension" simplemente agregamos el archivo que seleccionemos.
    
    -> git commit -m "commit name"
    // confirmamos el envio de las modificaciones de nuestros archivos a nuestro repositorio.
    // -m, permite agregar un mensaje describiendo la actualizacion de nuestro directorio.

    -> git diff "name.extension"
    // muestra la diferencia entre la version actual y la version anterior de nuestro archivo.

    -> git checkout "name.extension"
    // pide revertir un archivo a la ultima version.
*/

/*
    Enviar a repositorio remoto

    -> git remote add origin <URL del repositorio>
    // creamos un repositorio remoto llamado "origin", donde enviaremos nuestros cambios.

    -> git push -u origin main
    // vinculamos el repositorio local con el repositorio remoto mediante el indicador -u.
    // origin, es el nombre de nuestro repositorio remoto.
    // main, es la rama principal o predeterminada de nuestro repositorio remoto.

    -> git push
    // enviamos las confirmaciones a nuestro repositorio remoto.
*/

/*
    Git Ignore
    -> .gitignore  
    // es un archivo de texto que le dice a git que archivos o carpetas debe ignorar para un proyecto.

    -> *.txt
    // dentro  del archivo .gitignore, utilizamos el comodin, donde todos los archivos en este caso .txt no sean agregados a nuestro "staging"

    -> #comment
    // nos permite escribir comentarios en nuestro archivo .gitignore
*/

/*
    Git Clone
    -> git clone <URL del repositorio>
    // clonamos en nuestro directorio el repositorio remoto de otro usuario.
*/

/*
    Git Branch
    -> git branch <nombre de la rama>
    // cramos una nueva rama en nuestro repositorio, para no alterar nuestra rama principal "main"

    -> git branch
    // vemos que ramas tenemos en nuestro repositorio. el asterisco nos muestra en que rama de nuestro repositorio estamos posicionados.

    -> git checkout <nombre de la rama>
    // nos permite cambiar de rama, donde guardaremos los cambios que realizemos.

    -> git merge <nombre de la rama>
    // dentro de nuestra rama principal "main", los cambios efectuados dentro de las ramas externas, podemos vincular los cambios dentro de la rama principal.
    // :q! -> con esta exprecion guardamos los cambios realizados.

    -> git push origin main -u

    // ATENCION!!!
    // siempre al hacer el "merge", debemos estar dentro de la rama principal. y llamar a los cambios de la rama externa.

    // ATENCION!!!
    // si trabajamo con distintas ramas en un solo repositorio, siempre revisar en que rama o "branch" estamos posicionados.
*/

/*
    Fork
    // realizar una copia de un repositorio remoto ajeno, y ponerlo en nuestro propio repositorio git-hub.    
*/