import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(items: any, criterio: string): any {

    if (!items) return [];
    if (!criterio) return items;


    criterio = criterio.toUpperCase();
    let id = parseInt(criterio);
 
    if ( !Number.isNaN(id) && typeof id === 'number') {
      return items.filter(items => items.id == id ).filter(this.validaPalindromo); 
    }else {
      return items.filter(items => items.description.toUpperCase().indexOf(criterio)!==-1 || items.brand.toUpperCase().indexOf(criterio)!==-1).filter(this.validaPalindromo)
    }
    
  }


  validaPalindromo(palabra){
    let  palabraLimpia = palabra.brand.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var esPalindromo = palabraLimpia.split('').reverse().join('');
     
    // Palíndromo encontrado
    if (palabraLimpia === esPalindromo){
      palabra.desc = (50 * palabra.price) / 100;
    }
    return palabra;
  }

}
