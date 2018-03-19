  function dibujar(){

                var ctx = document.getElementById ('nuestroCanvas');
                var contenido = ctx.getContext ('2d');
                var imagenGrafica = new Image();
                imagenGrafica.src = 'grafica.png';
                imagenGrafica.onload = function(){
                        //Cargo la imagen en la posición
                        contenido.drawImage(imagenGrafica,0,0);
                        //Indicar el grosor de la línea
                        contenido.lineWidth = 4;
                        //Dibujo las líneas para simular la gráfica
                        contenido.beginPath();

                        contenido.moveTo(16,156);
                        contenido.lineTo(77,66);
                        contenido.lineTo(135,100);
                        contenido.lineTo(194,200);
                        contenido.lineTo(255,185);
                        contenido.lineTo(316,195);
                        contenido.lineTo(376,155);
                        contenido.lineTo(436,185);
                        contenido.strokeStyle = "hsla(333, 71%, 53%, 1)";
                        contenido.stroke();
                         //Indicar el grosor de la línea
                        contenido.lineWidth = 1;
                         //Dibujo las líneas para simular la gráfica
                        contenido.beginPath();
                        contenido.moveTo(16,126);
                        contenido.lineTo(77,176);
                        contenido.lineTo(135,160);
                        contenido.lineTo(194,100);
                        contenido.lineTo(255,155);
                        contenido.lineTo(316,225);
                        contenido.lineTo(376,85);
                        contenido.lineTo(436,185);
                        contenido.strokeStyle = "hsla(120, 100%, 50%, 1)";
                        contenido.stroke();
                }
            }
