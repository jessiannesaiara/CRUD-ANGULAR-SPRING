import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nome'
})
export class NomePipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'davi@gmail.com': return 'face'
    }
    return 'face';
  }

}
