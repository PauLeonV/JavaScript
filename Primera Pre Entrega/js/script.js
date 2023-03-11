let eleccion1 = prompt('¿Preparado para pelear? s/n');
let vidaDios = 200;
const porcentaje = (a,b) => a * (b/100);
const resta = (a,b) => a - b; 
if(eleccion1 != 's'){
    alert('Vaya cobarde, algún día tendrás que pelear');

}
else
{
  let eleccion2 = parseInt(prompt('Muy bien guerrero, escoge el dios que quieras enfrentar:\n 1) Zeus - Poder del trueno \n 2) Poseidón - Poder de agua \n 3) Ares -  Poder del guerrero \n 4) Apolo - Poder de la belleza' )); 
  let dios;
  let opcionCorrecta = true;
switch(eleccion2){

    case 1:
        alert('Has escogido a Zeus, dios del trueno');
        dios = 'Zeus';
       break;

    case 2:
        alert('Has escogido a Poseidón, dios del agua');
        dios = 'Poseidón';
         break;    
    case 3:
        alert('Has escogido a Ares, dios de la guerra');
        dios = 'Ares';
        break;
    case 4:
        alert('Has escogido a Apolo, dios de la belleza');
        dios = 'Apolo';
        break;
    default:
        alert('Opción incorrecta');
        opcionCorrecta = false;
        break;

}
 var eleccion3 = parseInt(prompt('Escoge tu próximo ataque:\n 1) Persuación \n 2) Ataque con espada \n 3) Ataque de fuego \n 4) Adrenalina'));
 let ataque
 
    switch(eleccion3){

    case 1:
        ataque = porcentaje (vidaDios, 10);
        break;
      
    case 2:
        ataque = porcentaje (vidaDios, 20);
         break;   
    case 3:
        ataque = porcentaje (vidaDios, 30);
        break;
    case 4:
        ataque = porcentaje (vidaDios, 25);
        break;
    default:
        alert('Opción incorrecta');
        opcionCorrecta = false;
        break;

}

let vidaTotal = resta(vidaDios,ataque);
alert('Ahora '+ dios +' tiene '+ vidaTotal + ' puntos de vida ');
let vidaFinal = vidaTotal;
do{

eleccion3 = parseInt(prompt('Escoge tu próximo ataque:\n 1) Persuación \n 2) Ataque con espada \n 3) Ataque de fuego \n 4) Adrenalina'));

switch(eleccion3){

    case 1:
        ataque = porcentaje (vidaDios, 10);
        break;
      
    case 2:
        ataque = porcentaje (vidaDios, 20);
         break;   
    case 3:
        ataque = porcentaje (vidaDios, 30);
        break;
    case 4:
        ataque = porcentaje (vidaDios, 25);
        break;
    default:
        alert('Opción incorrecta');
        opcionCorrecta = false;
        break;

}
vidaFinal = resta(vidaFinal, ataque);
resultado = alert('Ahora '+ dios +' tiene '+ vidaFinal + ' puntos de vida ');

if (vidaFinal<=0)
{
    
    alert ('Has vencido a '+ dios + ', ahora te toca pelear contra las IA\'s');
    
}

}while (vidaFinal>0)
}

