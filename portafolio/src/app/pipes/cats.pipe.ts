import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'cats'
})
export class CatsPipe implements PipeTransform {
  
  //volver un string los datos,
  //remover las comas y agregar un espacio
  transform(value:string): string {
    let cats = value.toString().replace(',', ' ');
    return `${cats}`;
  }

}