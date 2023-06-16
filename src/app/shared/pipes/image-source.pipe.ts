import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSource',
  standalone: true,
})
export class ImageSourcePipe implements PipeTransform {

  transform(value: string): string {
    return 'http://localhost:1337' + value
  }

}
