import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroCreator'
})

export class HeroCreatorPipe implements PipeTransform {
  transform(value: Creator, ): string {
    //OPCION DEL PROFESOR

return value === Creator.DC ? 'DC Comics' : 'Marvel Comics';

    //  opcion mia
    // switch (value) {
    //   case 0:
    //     return 'DC Comics';
    //   case 1:
    //     return 'Marvel Comics';
    //   default:
    //     return 'Creador desconocido';
    // }

  }
}
