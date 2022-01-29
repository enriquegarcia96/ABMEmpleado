import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [MatSliderModule, MatToolbarModule],
})
export class AngularMaterialModule {}
