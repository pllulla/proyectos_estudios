

$(document).ready(function() {  //PONEMOS EL DOCUMENTO HTML LISTO PARA RECIBIR INSTRUCCIONES

    $("#titulo").hide();  //LE DECIMOS QUE ESCONDA EL DIV CON ID "titulo"

    $("#foto img").width(60).height(40).load(function() {       //EL DIV CON ID foto Y MÁS CONCRETAMENTE SU img SE VERA AL INICIO
                                                                //CON UN ANCHO DE 60 PIXELS Y UN LARGO DE 40 PX Y QUE JUSTO AL CARGAR load
        $(this)                                                 
                .animate({ marginTop: "40px" }, 1000)           //ESTE O this SE ALEJE 40PX DEL MARGEN DE ARRIBA EN UN PERIODO DE 1 SEGUNDO
                .animate({ marginLeft: "280px" }, 800 )         //SE ALEJE DEL MARGEN IQUIERDO 280PX EN 800 MILISEGUNDOS
                .animate({ width: "600px" }, 600 )              
                .animate({ height: "400px" }, 600, function() { //SU ANCHO AUMENTE 600PX EN 600 MLS Y SU LARGO AUMENTE 400PX EN 600 MLS

                    $("#titulo").css({                          //ADEMÁS QUIERO QUE COJAS EL TITULO QUE ESTA ESCONDIDO, LE APLIQUES ESTILO CSS
                                         'font-weight':'bold',  //GRUESO, 80PX, COLOR AZULADO Y ALINEADO EN EL CENTRO
                                         'font-size':'80px',
                                         'color':'#c12a20',
                                         'text-align':'center'

                                        }).fadeIn(1000);       // Y QUE LO ENSEÑES, MODIFICADO Y AL FINAL DE LAS ANIMACIONES

            });

        });// termina funcion load
    
    });// termina función ready

    
    $(document).ready(function() {        //PONEMOS EL DOCUMENTO HTML LISTO PARA RECIBIR INSTRUCCIONES

        $("h4").hide();                   //LE DECIMOS QUE ESCONDA LA ETIQUETA H4 Y EL TEXTO QUE CONTIENE
        $("#boton3").click(function(e) {  //CUANDO SE DA CLICK AL BOTON , EN ESTE CASO DE USUARIOS, QUE TIENE DEFINIDO EL id="boton3" 
            e.preventDefault();           //SE ACTIVA LA FUNCION AJAX, preventDefault evita que el navegador pueda saltar a otra página para
                                          //enseñar la informacion, queremos la informacion al momento sin recargar ni saltar a otra página
        $.ajax({
            url: "/consulta",             //LA FUNCION AJAX DE JQUERY COGE LOS DATOS QUE SE HAN ALMACENADO VIA POST EN LA RUTA DEL SERVIDOR "/consulta"
            data: $("form").serialize(),  //SE RECOGEN TODOS LOS DATOS Y SE SERIALIZAN O ALMACENAN EN UN ARRAY
            type: 'POST',
            dataType: "json",             //LE INDICAMOS QUE LOS DATOS SE DEVOLVERAN CON METODO POST Y FORMATO JSON
            success: function(response) { //SI TIENE EXITO success LOS DATOS ESTARAN ALMACENADOS EN response

                        var info = "<p> Nombre: " + response.Nombre + "</p>" ; //COMO LOS DATOS ESTAN EN FORMATO JSON TENEMOS QUE ACCEDER A CADA VALOR DE CADA CLAVE
                        info += "<p> Password: " + response.Contraseña + "</p> </br>"; // CON LOS DOCUMENTOS JSON SE ACCEDE A ELLOS CON LA nomenclatura del punto
                                                                                //DONDE response ES JSON Y nombre ES LA CLAVE Y EN ELLA ESTA EL VALOR
                             $("h4").show();                                    // QUE INTRODUCIMOS EN UNA ETIQUETA <p>
                             $("#datos").css({ //QUIERO QUE SE ENSEÑE AHORA EL CONTENIDO ESCONDIDO DE H4 Y EL DIV CON id="datos" QUE ESTA VACIO

                                         'font-weight':'bold',  //RECOJA LA INFORMACION DE LA VARIABLE info LA PONGAMAS GRUESA
                                         'font-size':'30px',    //AUMENTE EL TAMAÑO DEL TEXTO
                                         'color':'#5882FA',     //CAMBIE EL COLOR A AZULADO
                                         'text-align':'center', //CENTRE DENTRO DEL DIV EL TEXTO
                                         'border-style':'solid' //Y LE DEE AL DIV UN BORDE SOLIDO

                                        }).fadeIn().html(info); //LO ENSEÑE Y AÑADA EL CONTENIDO
            },
            error: function(error) {    //SI EL RESULTADO DE AJAX NO FUERA success Y FUERA error DENTRO DEL DIV con id="datos" NOS ENSEÑA UN MENSAJE DE ERROR
                $("#datos").html("EL CAMPO DE CONSULTA ES REQUERIDO Y EL DATO DEBE EXISTIR");
            }
        }); //se cierra AJAX
    });     //se cierra CLICK

    });     //se cierra READY


    $(document).ready(function() {        //PONEMOS EL DOCUMENTO HTML LISTO PARA RECIBIR INSTRUCCIONES

        $("h4").hide();                   //LE DECIMOS QUE ESCONDA LA ETIQUETA H4 Y EL TEXTO QUE CONTIENE
        $("#boton4").click(function(e) {  //CUANDO SE DA CLICK AL BOTON , EN ESTE CASO DE PELICULAS, QUE TIENE DEFINIDO EL id="boton4"
            e.preventDefault();           //SE ACTIVA LA FUNCION AJAX, preventDefault evita que el navegador pueda saltar a otra página para
                                          //enseñar la informacion, queremos la informacion al momento sin recargar ni saltar a otra página
        $.ajax({
            url: "/consulta2",            //LA FUNCION AJAX DE JQUERY COGE LOS DATOS QUE SE HAN ALMACENADO VIA POST EN LA RUTA DEL SERVIDOR "/consulta2"
            data: $("form").serialize(),  //SE RECOGEN TODOS LOS DATOS Y SE SERIALIZAN O ALMACENAN EN UN ARRAY
            type: 'POST',
            dataType: "json",              //LE INDICAMOS QUE LOS DATOS SE DEVOLVERAN CON METODO POST Y FORMATO JSON
            success: function(response2) { //SI TIENE EXITO success LOS DATOS ESTARAN ALMACENADOS EN response2

                        var info = "<p> Titulo: " + response2.Titulo + "</p>" ; //COMO LOS DATOS ESTAN EN FORMATO JSON TENEMOS QUE ACCEDER A CADA VALOR DE CADA CLAVE
                        info += "<p> Año: " + response2.Año + "</p>";           //CON LOS DOCUMENTOS JSON SE ACCEDE A ELLOS CON LA nomenclatura del punto
                        info += "<p> Actor principal: </br>" + response2.Actores.principal + "</p>";   //DONDE response2 ES JSON Y actores ES EL NOMBRE DEL  
                        info += "<p> Actor secundario: </br>" + response2.Actores.secundario + "</p> </br>"; //DOCUMENTO INCRUSTADO Y EN ELLA ESTA EL VALOR
                                                                                                        // QUE INTRODUCIMOS EN UNA ETIQUETA <p>
                             $("h4").show();                                   
                             $("#datos").css({ //QUIERO QUE SE ENSEÑE AHORA EL CONTENIDO ESCONDIDO DE H4 Y EL DIV CON id="datos" QUE ESTA VACIO

                                         'font-weight':'bold',  //RECOJA LA INFORMACION DE LA VARIABLE info LA PONGAMAS GRUESA
                                         'font-size':'30px',    //AUMENTE EL TAMAÑO DEL TEXTO
                                         'color':'#5882FA',     //CAMBIE EL COLOR A AZULADO
                                         'text-align':'center', //CENTRE DENTRO DEL DIV EL TEXTO
                                         'border-style':'solid' //Y LE DEE AL DIV UN BORDE SOLIDO

                                        }).fadeIn().html(info); //LO ENSEÑE Y AÑADA EL CONTENIDO
            },
            error: function(error) {  //SI EL RESULTADO DE AJAX NO FUERA success Y FUERA error DENTRO DEL DIV con id="datos" NOS ENSEÑA UN MENSAJE DE ERROR
                $("#datos").html("EL CAMPO DE CONSULTA ES REQUERIDO Y EL DATO DEBE EXISTIR");
            }
        }); //se cierra AJAX
    });     //se cierra CLICK

    });     //se cierra READY