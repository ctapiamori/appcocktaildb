import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePreview'
})
export class ImagePreviewPipe implements PipeTransform {
  transform(urlImage: string): any {
    return `${urlImage}/preview`;
  }

}
