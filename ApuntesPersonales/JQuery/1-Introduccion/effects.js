/*
    ==============================
    🔹 EFECTOS EN JQUERY
    ==============================

    jQuery proporciona una serie de métodos para crear animaciones y efectos visuales
    que mejoran la interacción del usuario con la página.

    ⚙️ SINTAXIS GENERAL:
        $(selector).efecto(velocidad, callback);

        Donde:
            - velocidad: opcional ("slow", "fast" o milisegundos)
            - callback: opcional, función que se ejecuta después del efecto

    ------------------------------------------
    🔸 EFECTOS BÁSICOS DE MOSTRAR/OCULTAR
    ------------------------------------------

    .show([speed], [callback])
        -> Muestra los elementos ocultos.
        Ejemplo: $("#caja").show("slow");

    .hide([speed], [callback])
        -> Oculta los elementos visibles.
        Ejemplo: $("#caja").hide(1000);

    .toggle([speed], [callback])
        -> Alterna entre show() y hide().
        Ejemplo: $("p").toggle("fast");

    ------------------------------------------
    🔸 EFECTOS DE DESVANECER (FADE)
    ------------------------------------------

    .fadeIn([speed], [callback])
        -> Muestra el elemento gradualmente (de transparente a opaco).
        Ejemplo: $(".foto").fadeIn(2000);

    .fadeOut([speed], [callback])
        -> Oculta gradualmente el elemento.
        Ejemplo: $(".foto").fadeOut("slow");

    .fadeToggle([speed], [callback])
        -> Alterna entre fadeIn() y fadeOut().
        Ejemplo: $("#texto").fadeToggle(500);

    .fadeTo(speed, opacity, [callback])
        -> Cambia la opacidad del elemento a un valor específico.
        Ejemplo: $("#panel").fadeTo("slow", 0.3);

    ------------------------------------------
    🔸 EFECTOS DE DESLIZAR (SLIDE)
    ------------------------------------------

    .slideDown([speed], [callback])
        -> Muestra el elemento deslizándose hacia abajo.
        Ejemplo: $("#menu").slideDown("fast");

    .slideUp([speed], [callback])
        -> Oculta el elemento deslizándose hacia arriba.
        Ejemplo: $("#menu").slideUp(1000);

    .slideToggle([speed], [callback])
        -> Alterna entre slideDown() y slideUp().
        Ejemplo: $("#menu").slideToggle();

    ------------------------------------------
    🔸 MÉTODOS DE ANIMACIÓN PERSONALIZADA
    ------------------------------------------

    .animate(properties, [speed], [easing], [callback])
        -> Permite crear animaciones personalizadas sobre propiedades CSS numéricas.
        Ejemplo:
            $("#caja").animate({
                left: '200px',
                opacity: 0.5,
                height: '150px'
            }, 1000, function(){
                alert("Animación terminada");
            });

        - properties: objeto con las propiedades CSS a animar.
        - easing: tipo de aceleración (por defecto "swing" o "linear").
        - callback: función ejecutada al finalizar.

    .stop([clearQueue], [jumpToEnd])
        -> Detiene la animación actual.
        Ejemplo: $("#caja").stop(true, false);

        - clearQueue: elimina animaciones pendientes.
        - jumpToEnd: salta al estado final actual.

    .delay(duration)
        -> Retrasa la ejecución del siguiente efecto en la cola.
        Ejemplo: $("#texto").fadeOut().delay(1000).fadeIn();

    ------------------------------------------
    🔸 COLAS Y CONTROL DE EFECTOS
    ------------------------------------------

    .queue([queueName], [callback])
        -> Muestra o manipula la cola de funciones/animaciones.
        Ejemplo:
            $("#div").queue(function(next){
                $(this).css("background", "red");
                next();
            });

    .dequeue([queueName])
        -> Ejecuta la siguiente función en la cola.
        Ejemplo: $("#div").dequeue();

    .clearQueue([queueName])
        -> Elimina las animaciones pendientes sin afectar la actual.
        Ejemplo: $("#div").clearQueue();

    ------------------------------------------
    🔸 EFECTOS ESPECIALES Y UTILIDADES
    ------------------------------------------

    .finish([queue])
        -> Finaliza todas las animaciones en curso y aplica el estado final inmediato.
        Ejemplo: $("#caja").finish();

    .promise([type], [target])
        -> Devuelve un objeto Promise que se resuelve cuando todas las animaciones se completan.
        Ejemplo:
            $("#div").fadeOut(1000).promise().done(function(){
                alert("Todas las animaciones han terminado.");
            });

    ------------------------------------------
    🔸 RESUMEN DE VELOCIDADES PREDEFINIDAS
    ------------------------------------------

        "slow"  = 600 ms
        "fast"  = 200 ms
        (valor numérico) = milisegundos (por ejemplo, 1500)

    ------------------------------------------
    🔸 EJEMPLO COMPLETO DE EFECTOS
    ------------------------------------------

    $(document).ready(function(){
        $("#btn").click(function(){
            $("#panel").slideUp(1000)
                       .delay(500)
                       .fadeIn(1500)
                       .animate({width: "300px", height: "200px"}, 1000)
                       .queue(function(next){
                           $(this).css("background-color", "lightblue");
                           next();
                       });
        });
    });
*/
