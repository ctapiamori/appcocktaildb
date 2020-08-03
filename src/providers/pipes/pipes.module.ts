import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewPipe } from './image-preview.pipe';

@NgModule({
  declarations: [ImagePreviewPipe],
  exports: [ImagePreviewPipe],
  providers: [ImagePreviewPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
