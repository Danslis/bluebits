import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { SliderComponent } from './slider.component';


@NgModule({
    imports: [CommonModule],
    declarations: [
    BannerComponent,
    SliderComponent
  ],
    exports: [
    BannerComponent,
    SliderComponent
  ]
})
export class UiModule {}
