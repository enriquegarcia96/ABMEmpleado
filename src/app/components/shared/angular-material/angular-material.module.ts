import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  exports: [MatSliderModule, MatToolbarModule, MatTableModule],
})
export class AngularMaterialModule {}
