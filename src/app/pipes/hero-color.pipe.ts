import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroColor'
})

export class HeroColorPipe implements PipeTransform {
  transform(colorCode: Color, ): string {

    // return Color[colorCode] || 'sin color'; opciond el profesor

    //  opcion mia
    switch (colorCode) {
      case 0:
        return 'red';
      case 1:
        return 'black';
      case 2:
        return 'blue';
      case 3:
        return 'green';
      default:
        return 'sin color';
    }

  }
}
