const porcentaje = (a,b) => a * (b/100);
const resta = (a,b) => a - b; 
let vidaU = 500;

class Dios {
    constructor(nombre, vidaD, ataqueD, poderD) {
      this.nombre = nombre;
      this.vidaD = vidaD;
      this.ataqueD = ataqueD;
      this.poderD = poderD;
    }
    toString() {
      return `${this.nombre}-${this.poderD}`;
    }
    atacarUser() {
      vidaU = vidaU - this.ataqueD;
    }
  }
  const dios1 = new Dios("Zeus", 200, 50, "Poder del trueno");
  const dios2 = new Dios("Poseidón", 175, 40, "Poder de agua");
  const dios3 = new Dios("Ares", 150, 30, "Poder del guerrero");
  const dios4 = new Dios("Apolo", 125, 20, "Poder de la belleza");

  const ataquesU = [
    {nombre: "Persuación", daño: 10},
    {nombre: "Espadazo", daño: 20},
    {nombre: "Bola de fuego", daño: 25},
    {nombre: "Bola de nieve", daño: 15}

  ];
let diosE;
let ataque;
let menu = prompt('¿Preparado para pelear? s/n');
if (menu == 's'){
    function eleccionDios(){
        let eleccion2 = parseInt(
            prompt(`Muy bien guerrero, escoge el dios que quieras enfrentar:\n1) ${dios1.toString()}\n2) ${dios2.toString()}\n3) ${dios3.toString()}\n4) ${dios4.toString()} `)
          );
          
          let opcionCorrecta = true;
          switch (eleccion2) {
            case 1:
              alert(`Has escogido a ${dios1.toString()}`);
              diosE = dios1;
        
              break;
        
            case 2:
              alert(`Has escogido a ${dios2.toString()}`);
              diosE = dios2;
        
              break;
            case 3:
              alert(`Has escogido a ${dios3.toString()}`);
              diosE = dios3;
        
              break;
            case 4:
              alert(`Has escogido a ${dios4.toString()}`);
              diosE = dios4;
        
              break;
            default:
              alert("Opción incorrecta");
              opcionCorrecta = false;
              break;
          }
          return opcionCorrecta;
        }

    if (eleccionDios()){
        function eleccionAtaque (){
            opcionCorrecta= true;
            var eleccion3 = parseInt(
                prompt(
                  `Escoge tu un ataque :\n1)${ataquesU[0].nombre}\n2)${ataquesU[1].nombre}\n3)${ataquesU[2].nombre}\n4)${ataquesU[3].nombre} `
                )
              );
              
            
              switch (eleccion3) {
                case 1:
                  ataque = porcentaje(diosE.vidaD,ataquesU[0].daño);
                  break;
            
                case 2:
                  ataque = porcentaje(diosE.vidaD,ataquesU[1].daño);
                  break;
                case 3:
                  ataque = porcentaje(diosE.vidaD,ataquesU[2].daño);
                  break;
                case 4:
                  ataque = porcentaje(diosE.vidaD,ataquesU[3].daño);
                  break;
                default:
                  alert("Opción incorrecta");
                  opcionCorrecta = false;
                  break;
                }
                
            return opcionCorrecta
        }
    }
    if (eleccionAtaque()){

        let vidaTotal = resta(diosE.vidaD,ataque);
                
        let vidaFinal = vidaTotal;
        let resultado = alert('Ahora '+ diosE.nombre +' tiene '+ vidaTotal + ' puntos de vida');
    
        
        do{
        eleccionAtaque();
        vidaFinal = resta(vidaFinal, ataque);
        resultado = alert('Ahora '+ diosE.nombre +' tiene '+ vidaFinal + ' puntos de vida');

            if (vidaFinal<=0)
            {

               alert ('Has vencido a '+ diosE.nombre + ', ahora te toca pelear contra las IA\'s');


            }
        }while (vidaFinal>0)


} 
}
else if (menu == 'n'){
    alert('Menudo cobarde, largo de aquí');
    } 
else {
    alert('Has ingresado un valor incorrecto');
}
