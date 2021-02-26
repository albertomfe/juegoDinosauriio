console.log('start');

document.addEventListener('keydown',function(evento){
  console.log('cod='+evento.keyCode);

  /*saltar*/
  if(evento.keyCode==32)
  {
    console.log('salta');
  }

});

var start=0;
var canvas,ctx;
var ancho=700;
var alto=300;

/**
*Inicializar el lienzo
*/
function inicializa()
{
  canvas=document.getElementById('canvas');
  ctx=canvas.getContext('2d');
}

/**
*Borrar el lienzo
*/
function borrarCanvas(){
  canvas=document.getElementById('canvas');
  ctx=canvas.getContext('2d');
  canvas.height = alto;
  canvas.width = ancho;
}

/**
*carga de imagenes
*/
var imgRex,imgNube,imgCactus,imgSuelo;
function cargarImagenes(){
  imgRex=new Image();//crear objeto imagen
  imgRex.src='img/rex.png';

  imgNube=new Image();//crear objeto imagen
  imgNube.src='img/nube.png';

  imgCactus=new Image();//crear objeto imagen
  imgCactus.src='img/cactus.png';

  imgSuelo=new Image();//crear objeto imagen
  imgSuelo.src='img/suelo.png';
}

function dibujaRex()
{
  cargarImagenes();//crear objetos imagen
  /*,,w,h,x,y*/
  ctx.drawImage(imgRex,0,0,44,47,100,100,50,50);
}

//----------------------------------------------------
//BUBLE PRINCIPAL 10 veces por segundo
var FPS=10;//frapes x segundo
//empezar a ciclar despues de cargar html y dom
setInterval(function()
{
  principal();
},1000/FPS);







function principal(){
  console.log('principal');
  borrarCanvas();
  dibujaRex();//dibujar el dinosaurio
}
