/*
MOUSE EVENTS:
    click          // Se activa cuando el usuario hace clic con el botón izquierdo del ratón sobre un elemento.
    dblclick       // Se activa cuando el usuario hace doble clic sobre un elemento.
    contextmenu    // Se activa al hacer clic con el botón derecho del ratón (menú contextual).
    mousedown      // Se activa cuando se presiona un botón del ratón sobre un elemento.
    mouseup        // Se activa cuando se suelta un botón del ratón sobre un elemento.
    mouseenter     // Se activa cuando el puntero entra en el área de un elemento (sin propagarse a hijos).
    mouseleave     // Se activa cuando el puntero sale del área de un elemento (sin propagarse a hijos).
    mousemove      // Se activa cada vez que el puntero del ratón se mueve sobre un elemento.
    mouseover      // Se activa cuando el puntero entra en un elemento o en uno de sus hijos.
    mouseout       // Se activa cuando el puntero sale de un elemento o de uno de sus hijos.
    hover          // Es una combinación de mouseenter y mouseleave. Permite definir dos funciones: entrar y salir.

KEYBOARD EVENTS:
    keydown        // Se activa cuando una tecla se presiona.
    keypress       // Se activa mientras una tecla está siendo presionada (obsoleto en navegadores modernos).
    keyup          // Se activa cuando una tecla se suelta.

FORM EVENTS:
    blur           // Se activa cuando un elemento pierde el foco.
    change         // Se activa cuando el valor de un input, select o textarea cambia.
    focus          // Se activa cuando un elemento gana el foco.
    focusin        // Igual que focus, pero se propaga (puede capturar eventos en hijos).
    focusout       // Igual que blur, pero se propaga (puede capturar eventos en hijos).
    select         // Se activa cuando el usuario selecciona texto dentro de un input o textarea.
    submit         // Se activa cuando un formulario se envía.

DOCUMENT/WINDOW EVENTS:
    load           // Se activa cuando un elemento o página se ha cargado completamente.
    resize         // Se activa cuando se cambia el tamaño de la ventana del navegador.
    scroll         // Se activa cuando se desplaza el contenido de un elemento o ventana.
    unload         // Se activa cuando la página está a punto de descargarse (obsoleto en HTML5).
    error          // Se activa cuando ocurre un error al cargar un elemento (por ejemplo, una imagen).

EVENT HANDLER METHODS (manejo avanzado de eventos en jQuery):
    bind           // Asocia uno o varios eventos a los elementos seleccionados (obsoleto, usar .on()).
    unbind         // Elimina un evento previamente asociado con bind() o on().
    on             // Asocia uno o varios eventos a elementos, incluso dinámicos (recomendado).
    off            // Elimina uno o varios eventos asociados con .on().
    one            // Asocia un evento que solo se ejecuta una vez y luego se elimina automáticamente.
    delegate       // Asocia eventos a elementos hijos que existan o se creen en el futuro (obsoleto, usar .on()).
    undelegate     // Elimina eventos delegados asociados con delegate().
    live           // Asociaba eventos a elementos futuros (obsoleto, usar .on()).
    die            // Eliminaba eventos asociados con live() (obsoleto, usar .off()).
    trigger        // Dispara manualmente un evento sobre los elementos seleccionados.
    triggerHandler // Dispara un evento en el primer elemento coincidente, pero sin propagación ni efecto por defecto.
*/