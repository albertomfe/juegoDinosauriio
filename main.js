console.log('start');

document.addEventListener('keydown',function(evento){
  console.log('cod='+evento.keyCode);

  /*saltar*/
  if(evento.keyCode==32)
  {
    //console.log('salta');
    saltar();
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
  imgRex.src='./img/rex.png';

  imgNube=new Image();//crear objeto imagen
  imgNube.src='img/nube.png';

  imgCactus=new Image();//crear objeto imagen
  imgCactus.src='img/cactus.png';

  imgSuelo=new Image();//crear objeto imagen
  imgSuelo.src='img/suelo.png';
}

var trex={y:90, vy:0,gravedad:2,salto:24,vymax:9,saltando:false};//objeto rex
function dibujaRex()
{
  //console.log('dibujando');
  cargarImagenes();//crear objetos imagen
  /*,,x,y,w,h*/
  ctx.drawImage(imgRex,0,0,256,256,50,trex.y,100,100);
}

/**
*efecto de gravedad
*/
function gravedad(){
//si esta saltando se aplica la gravedad
 if(trex.saltando==true){

     if(trex.y>90)//no puede pasar la posicion del suelo
     {
       //inicializar
       trex.saltando=false;
       trex.vy=0;
       trex.y=90;
     }
     else{
       //aplicar gravedad si no esta en el suelo
       trex.vy=trex.vy-trex.gravedad;
       trex.y=trex.y-trex.vy;
     }
 }
}

/**
*funcion de salto
*/
function saltar(){
  trex.saltando=true;
  trex.vy=trex.salto;
}


//----------------------------------------------------
//BUBLE PRINCIPAL 10 veces por segundo
var FPS=50;//frapes x segundo
//empezar a ciclar despues de cargar html y dom
setInterval(function()
{
  principal();
},1000/FPS);







function principal(){
  console.log('principal');
  borrarCanvas();
   gravedad();
  dibujaRex();//dibujar el dinosaurio
}
